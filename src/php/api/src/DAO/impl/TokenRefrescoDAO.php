<?php

namespace App\impl\DAO;

use App\DTO\TokenRefrescoDTO;

class TokenRefrescoDAO {
    public static function findByToken(string $token): TokenRefrescoDTO {
        return true;
    }
    public static function read(int $idUsuario): array {
        return DB::table('tokenrefresco')->where('idUsuario', '=', $idUsuario)->get();
    }
    public static function insert(TokenRefrescoDTO $token): int  {
        return DB::table('tokenrefresco')->insert(['idUsuario' => $token->idUsuario(), "token" => $token->token(), 'expiraEn' => $token->expiraEn(), 'activo' => $token->activo()]);
      }
}