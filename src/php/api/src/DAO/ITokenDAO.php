<?php

namespace App\DAO;

use App\DTO\TokenDTO;

interface ITokenDAO {
    public static function findByToken(string $token): TokenDTO;
    public static function findById(int $idUsuario): TokenDTO;  
    public static function insert(TokenDTO $user): int ;
}