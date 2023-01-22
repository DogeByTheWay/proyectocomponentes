<?php

namespace App\DAO\impl;

use App\db\orm\DB;
use App\DTO\TokenDTO;
use App\DAO\ITokenDAO;

class TokenDAO implements ITokenDAO{
    public static function findByToken(string $token): TokenDTO {
        return true;
    }
    public static function findById(int $idUsuario): TokenDTO  {
        return true;
    }
    public static function insert(TokenDTO $token): int  {
        return DB::table('token')->updateToken($token->idUsuario(), ["token" => $token->token(), 'expiraEn' => $token->expiraEn()]);
      }
}