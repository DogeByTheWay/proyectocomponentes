<?php

namespace App\services\impl;

use App\DTO\TokenDTO;
use App\factories\TokenFactory;
use App\services\ITokenService;

class TokenService implements ITokenService{
    public static function findById(int $idUsuario): int {
        return TokenFactory::getDAO()::findByIdUsuario($idUsuario);
    }
    public static function findByToken(string $token): TokenDTO {
        return TokenFactory::getDAO()::findByToken($token);
    }
    public static function update(TokenDTO $token):int  {
        return TokenFactory::getDAO()::update($token);
    }
    public static function insert(TokenDTO $token):int  {
        return TokenFactory::getDAO()::insert($token);
    }
}