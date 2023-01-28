<?php

namespace App\services;

use App\DTO\TokenDTO;

interface ITokenService {
    public static function findByToken(string $token): TokenDTO;
    public static function findById(int $idUsuario): int;
    public static function update(TokenDTO $user): int;    
    public static function insert(TokenDTO $user): int;
}