<?php

namespace App\impl\services;

use App\DTO\TokenRefrescoDTO;
use App\factories\TokenFactory;


class TokenRefrescoService {
    public static function findByToken(string $token): TokenRefrescoDTO {
        return true;
    }
    public static function read(int $idUsuario): array  {
        return TokenFactory::getDAO()::read($idUsuario);
    }
    public static function insert(TokenRefrescoDTO $token):int  {
        return TokenFactory::getDAO()::insert($token);
    }
}