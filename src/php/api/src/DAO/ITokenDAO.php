<?php

namespace App\DAO;

use App\DTO\TokenDTO;

interface ITokenDAO {
    public static function findByToken(string $token): TokenDTO;
    public static function findByIdUsuario(int $idUsuario): int;  
    public static function insert(TokenDTO $user): int ;
    public static function update(TokenDTO $user): int ;
}