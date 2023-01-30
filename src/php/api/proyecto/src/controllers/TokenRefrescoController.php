<?php
namespace App\controllers;

use App\DTO\TokenDTO;
use App\DTO\TokenRefrescoDTO;
use App\response\HTTPResponse;
use App\factories\TokenFactory;
use App\services\ITokenService;
use App\factories\TokenRefrescoFactory;
use App\services\ITokenRefrescoService;

class TokenRefrescoController {

    private ITokenRefrescoService $service;

	function __construct() {
        $this->service = TokenRefrescoFactory::getService();
	}

    public function find() {        
        try {
            $tokenRefresco = ltrim(getallheaders()['Authorization'], 'Bearer ');
            $DTO = TokenRefrescoFactory::getService()::findByToken($tokenRefresco); 
            $now = strtotime('now');
            if ($now < $DTO->expiraEn()) {
                if($DTO->activo() == 1) {
                    HTTPResponse::json(200,"Token todavia valido.");
                } else {
                    $DTO->setActivo(0);
                    $this->update($DTO);  
                    HTTPResponse::json(511,"Token hackeado.");
                }                
            } else {            
                HTTPResponse::json(400,"Token expirado.");
            }
        } catch( \Throwable $e) {
            HttpResponse::json(400, $e->getMessage() . "Token invalido");
        }
    }

    
    public function insert($idUsuario) {
        date_default_timezone_set('Europe/Madrid'); 
        $date = strtotime("now + 3000 seconds");
        $token = password_hash($date, PASSWORD_DEFAULT, ['cost' => 5]);
        $data = new TokenRefrescoDTO(null,$idUsuario, $token, $date, 1);
        try {
            $this->readOldTokens($idUsuario);
            $tokenRefresco = TokenRefrescoFactory::getService()::insert($data);
            if($tokenRefresco > 0) {                         
                return $token;                
            }
        } catch (\Throwable $e) {
            HTTPResponse::json(400, $e->getMessage() . " fallo insertar");
        }
    }
    
    public function readOldTokens($idUsuario){
       try {
            $tokenAntiguo = TokenRefrescoFactory::getService()::read($idUsuario); 
            $registros = count($tokenAntiguo);
            $ultimo = $registros - 1;
            if($registros > 0) {        
                $token = new TokenRefrescoDTO($tokenAntiguo[$ultimo]->id, $tokenAntiguo[$ultimo]->idUsuario,
                    $tokenAntiguo[$ultimo]->token, $tokenAntiguo[$ultimo]->expiraEn, 0);
                $this->update($token);                      
            }
        } catch (\Throwable $th) {
            HTTPResponse::json(400, $th->getMessage() . " fallo al leer registros tokenRefresco");
        }   
    }
 
    public function update(TokenRefrescoDTO $token) {
        try {
            TokenRefrescoFactory::getService()::update($token); 
        } catch (\Throwable $e) {
            HTTPResponse::json(400, $e->getMessage() . " Fallo al actualizar tokenRefresco");
        }
    }

}