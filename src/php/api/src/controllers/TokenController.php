<?php
namespace App\controllers;

use App\DTO\UserDTO;
use App\DTO\TokenDTO;
use App\response\HTTPResponse;
use App\factories\TokenFactory;
use App\services\ITokenService;
use App\controllers\TokenRefrescoController;

class TokenController {

    private ITokenService $service;

	function __construct() {
        $this->service = TokenFactory::getService();
	}

    
    public function update(UserDTO $user) {
        date_default_timezone_set('Europe/Madrid'); 
        $date = strtotime("now + 10 seconds");
        $str = $date;
        $token = password_hash($str, PASSWORD_DEFAULT, ['cost' => 5]);
        $data = new TokenDTO($user->id(), $token, $date);
        try {
            if(TokenFactory::getService()::insert($data) > 0) {
                $tokenRefresco = $this->insertTokenRefresco($user->id());
            };

        } catch (\Throwable $e) {
            HTTPResponse::json(400, $e->getMessage());
        }
     
        $data = ["Token" => $token, 'TokenRefresco' => $tokenRefresco];
        return $data;
    }

    public function insertTokenRefresco($idUsuario) {
        $peticion = new TokenRefrescoController();
        return $peticion->insert($idUsuario);
    }

    

}