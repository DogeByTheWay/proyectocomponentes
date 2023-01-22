<?php

namespace App\impl\services;

use App\DTO\TokenDTO;

class TokenService {
    public static function findByToken(string $token): TokenDTO {
        return true;
    }
    public static function findById(int $idUsuario): TokenDTO  {
        return true;
    }
    public static function insert(TokenDTO $token):int  {
        return TokenFactory::getDAO()::insert($token);
    }
}