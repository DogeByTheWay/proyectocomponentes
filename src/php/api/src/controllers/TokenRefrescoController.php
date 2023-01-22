<?php
namespace App\controllers;

use App\DTO\TokenRefrescoDTO;
use App\DTO\TokenDTO;
use App\factories\TokenFactory;
use App\response\HTTPResponse;
use App\services\ITokenService;

class TokenRefrescoController {

    private ITokenRefrescoService $service;

	function __construct() {
        $this->service = TokenRefrescoFactory::getService();
	}

    
    public function insert($idUsuario) {
        date_default_timezone_set('Europe/Madrid'); 
        $date = strtotime("now + 30 seconds");
        $token = password_hash($date, PASSWORD_DEFAULT, ['cost' => 5]);
        $data = new TokenRefrescoDTO($idUsuario, $token, $date, true);
        try {
            $tokenRefresco = TokenRefrescoFactory::getService()::insert($data);
            if($tokenRefresco > 0) {
                $this->find($idUsuario);
                return $token;
            }
        } catch (\Throwable $e) {
            HTTPResponse::json(400, $e->getMessage());
        }
    }
    
    public function read($idUsuario){
        try {
            $tokensAntiguos = TokenRefrescoFactory::getService()::read($idUsuario);           
        } catch (\Throwable $th) {
            HTTPResponse::json(404, $th->getMessage());
        }
    }
    

}