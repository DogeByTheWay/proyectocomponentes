<?php

namespace App\DAO\impl;

use App\db\orm\DB;
use App\DTO\TokenDTO;
use App\DAO\ITokenDAO;

class TokenDAO implements ITokenDAO{
    public static function findByToken(string $token): TokenDTO {
        $db_data =  DB::table('token')->findByToken($token);
        $result = new TokenDTO(
            $db_data->idUsuario, 
            $db_data->token, 
            $db_data->expiraEn
        );            
        return $result; 
    }
    public static function findByIdUsuario(int $idUsuario): int  {
        try {
            DB::table('token')->findByIdUsuario($idUsuario);
            return 1;
        } catch (\Exception $e) {
            return 0;
        }
    }
    public static function update(TokenDTO $token): int  {
        return DB::table('token')->updateToken($token->idUsuario(), ["token" => $token->token(), 'expiraEn' => $token->expiraEn()]);
      }
      public static function insert(TokenDTO $token): int  {
          return DB::table('token')->insert(['idUsuario' => $token->idUsuario(), 'token' => $token->token(), 'expiraEn' => $token->expiraEn()]);
        }
}