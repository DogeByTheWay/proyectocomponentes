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

    
    public function insert($idUsuario) {
        date_default_timezone_set('Europe/Madrid'); 
        $date = strtotime("now + 30 seconds");
        $token = password_hash($date, PASSWORD_DEFAULT, ['cost' => 5]);
        $data = new TokenRefrescoDTO(null,$idUsuario, $token, $date, true);
        try {
            $this->read($idUsuario);
            $tokenRefresco = TokenRefrescoFactory::getService()::insert($data);
            if($tokenRefresco > 0) {
                
                return $token;
            }
        } catch (\Throwable $e) {
            HTTPResponse::json(400, $e->getMessage() . " fallo insertar");
        }
    }
    
    public function read($idUsuario){
       try {
            $tokenAntiguo = TokenRefrescoFactory::getService()::read($idUsuario); 
            $registros = count($tokenAntiguo);
            $ultimo = $registros - 1;
            if($registros > 0) {        
                $token = new TokenRefrescoDTO($tokenAntiguo[$ultimo]->id, $tokenAntiguo[$ultimo]->idUsuario,
                    $tokenAntiguo[$ultimo]->token, $tokenAntiguo[$ultimo]->expiraEn, 0);
                TokenRefrescoFactory::getService()::update($token);                      
            }
        } catch (\Throwable $th) {
            HTTPResponse::json(400, $th->getMessage() . " fallo al leer registros tokenRefresco");
        }   
    }
 
    public function update(TokenRefrescoDTO $token) {
        try {
            if(TokenFactory::getService()::update($token) > 0) {

            }

        } catch (\Throwable $e) {
            HTTPResponse::json(400, $e->getMessage() . " Fallo al actualizar tokenRefresco");
        }
        $result = new LocalStorageDTO($user->id(), $token, $tokenRefresco);            
        return $result;
    }

}