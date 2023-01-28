<?php

namespace App\DAO\impl;

use App\db\orm\DB;
use App\DTO\TokenRefrescoDTO;
use App\DAO\ITokenRefrescoDAO;

class TokenRefrescoDAO implements ITokenRefrescoDAO{
    public static function findByToken(string $token): TokenRefrescoDTO {
        return true;
    }
    public static function read(int $idUsuario): array {
        return DB::table('tokenrefresco')->where('idUsuario', '=', $idUsuario)->get();
    }
    public static function insert(TokenRefrescoDTO $token): int  {
        return DB::table('tokenrefresco')->insert(['idUsuario' => $token->idUsuario(), "token" => $token->token(), 'expiraEn' => $token->expiraEn(), 'activo' => $token->activo()]);
      }
      
    public static function update(TokenRefrescoDTO $token): int {
        return DB::table('tokenrefresco')->update($token->id(), ["idUsuario" => $token->idUsuario(), "token" => $token->token(), "expiraEn" => $token->expiraEn(), "activo" => $token->activo()]);
    }
}