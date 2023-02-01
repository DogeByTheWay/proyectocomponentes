<?php
namespace App\controllers;

use App\DTO\UserDTO;
use App\DTO\TokenDTO;
use App\DTO\LocalStorageDTO;
use App\response\HTTPResponse;
use App\factories\TokenFactory;
use App\services\ITokenService;
use App\controllers\TokenRefrescoController;

class TokenController {

    function isExpired() {
        try {
            $token = ltrim(getallheaders()['Authorization'], 'Bearer ');
            $DTO = TokenFactory::getService()::findByToken($token); 
            $now = strtotime('now');
            if ($now < $DTO->expiraEn()) {
                HTTPResponse::json(200,"Token todavia valido.");
            } else {            
                HTTPResponse::json(400,"Token expirado.");
            }
        } catch( \Throwable $e) {
            HttpResponse::json(400, $e->getMessage() . "Token invalido");
        }
    }
  

    
    public function freshToken(int $idUsuario) {
        date_default_timezone_set('Europe/Madrid'); 
        $date = strtotime("now + 5 seconds");
        $str = $date;
        $token = password_hash($str, PASSWORD_DEFAULT, ['cost' => 5]);
        $data = new TokenDTO($idUsuario, $token, $date);
        try {
            if(TokenFactory::getService()::update($data) > 0) {
                $tokenRefresco = $this->insertTokenRefresco($idUsuario);
            };

        } catch (\Throwable $e) {
            HTTPResponse::json(400, $e->getMessage() . " Fallo al actualizar tokenRefresco");
        }
        $result = new LocalStorageDTO($idUsuario, $token, $tokenRefresco);            
        return $result;
    }

    function insert(UserDTO $user) {
        date_default_timezone_set('Europe/Madrid'); 
        $date = strtotime("now + 5 seconds");
        $str = $date;
        $token = password_hash($str, PASSWORD_DEFAULT, ['cost' => 5]);
        $data = new TokenDTO($user->id(), $token, $date);
        try {
            $count = TokenFactory::getService()::insert($data);
        } catch (\Throwable $e) {
            HTTPResponse::json(400, $e->getMessage() . " Fallo al insertar token");
        }
        try {
            if( $count > 0) {
                $tokenRefresco = $this->insertTokenRefresco($user->id());
            };

        } catch (\Throwable $e) {
            HTTPResponse::json(400, $e->getMessage() . " Fallo al insertar tokenRefresco");
        }
        $result = new LocalStorageDTO($user->id(), $token, $tokenRefresco);            
        return $result;
    }
     
    
    public function findById(int $idUsuario): int {
        return TokenFactory::getService()::findById($idUsuario); 
        }

    
    public function update(UserDTO $user) {
        date_default_timezone_set('Europe/Madrid'); 
        $date = strtotime("now + 5 seconds");
        $str = $date;
        $token = password_hash($str, PASSWORD_DEFAULT, ['cost' => 5]);
        $data = new TokenDTO($user->id(), $token, $date);
        try {
            if(TokenFactory::getService()::update($data) > 0) {
                $tokenRefresco = $this->insertTokenRefresco($user->id());
            };

        } catch (\Throwable $e) {
            HTTPResponse::json(400, $e->getMessage() . " Fallo al actualizar tokenRefresco");
        }
        $result = new LocalStorageDTO($user->id(), $token, $tokenRefresco);            
        return $result;
    }

    public function insertTokenRefresco($idUsuario) {
        $peticion = new TokenRefrescoController();
        return $peticion->insert($idUsuario);
    }

    

}