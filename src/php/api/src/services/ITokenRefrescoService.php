<?php

namespace App\services;

use App\DTO\TokenRefrescoDTO;

interface ITokenRefrescoService {
    public static function findByToken(string $token): TokenRefrescoDTO;
    public static function read(int $idUsuario): array;
    public static function insert(TokenRefrescoDTO $token): int;
    public static function update(TokenRefrescoDTO $token): int;
}