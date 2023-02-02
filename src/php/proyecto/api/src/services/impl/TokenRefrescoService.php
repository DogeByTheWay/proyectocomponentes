<?php

namespace App\services\impl;

use App\DTO\TokenRefrescoDTO;
use App\factories\TokenFactory;
use App\factories\TokenRefrescoFactory;
use App\services\ITokenRefrescoService;


class TokenRefrescoService implements ITokenRefrescoService{
    public static function findByToken(string $token): TokenRefrescoDTO {
        return TokenRefrescoFactory::getDAO()::findByToken($token);
    }
    public static function read(int $idUsuario): array  {
        return TokenRefrescoFactory::getDAO()::read($idUsuario);
    }
    public static function insert(TokenRefrescoDTO $token):int  {
        return TokenRefrescoFactory::getDAO()::insert($token);
    }
    
    public static function update(TokenRefrescoDTO $token): int {
        return TokenRefrescoFactory::getDAO()::update($token);
    }
}