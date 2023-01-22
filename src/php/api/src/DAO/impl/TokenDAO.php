<?php

namespace App\impl\DAO;

use App\DTO\TokenDTO;

class TokenDAO {
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