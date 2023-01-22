<?php

namespace App\services\impl;

use App\DTO\TokenDTO;
use App\factories\TokenFactory;
use App\services\ITokenService;

class TokenService implements ITokenService{
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