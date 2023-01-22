<?php

namespace App\DAO;

use App\DTO\TokenRefrescoDTO;

interface ITokenRefrescoDAO {
    public static function findByToken(string $token): TokenRefrescoDTO;
    public static function read(int $idUsuario): array; 
    public static function insert(TokenRefrescoDTO $token): int;
}