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
            $$this->read($idUsuario);
            $tokenRefresco = TokenRefrescoFactory::getService()::insert($data);
            if($tokenRefresco > 0) {
                
                return $token;
            }
        } catch (\Throwable $e) {
            HTTPResponse::json(400, $e->getMessage());
        }
    }
    
    public function read($idUsuario){
        try {
            $tokensAntiguos = TokenRefrescoFactory::getService()::read($idUsuario);    
            foreach ($tokensAntiguos as $tokenRefresco) {                
                if($tokenRefresco['activo'] == true) {
                    array_replace($tokenRefresco, array('activo' => false));
                }
            }       

        } catch (\Throwable $th) {
            HTTPResponse::json(404, $th->getMessage());
        }
    }
    

}