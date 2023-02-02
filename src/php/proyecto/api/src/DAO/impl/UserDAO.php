<?php

namespace App\DAO\impl;
use App\db\orm\DB;
use App\DTO\UserDTO;
use App\DAO\IUserDAO;

class UserDAO implements IUserDAO {
    public static function insert(UserDTO $user): bool {
        return DB::table('usuarios')->insert(['nombre' => $user->nombre(), 
        'password' => $user->password()]);
    }
    public static function findByNombre(UserDTO $user): UserDTO {        
        $db_data = DB::table('usuarios')->findByNombre($user->nombre());        
            $result =  new UserDTO(
                $db_data->id, 
                $db_data->nombre, 
                $db_data->password
            );               
        return $result;
    }

    public static function findById(int $id): \stdClass {
        return DB::table('usuarios')->find($id);
    }
    
    public static function find(int $idUsuario): USerDTO {
        $db_data =  DB::table('usuarios')->find($idUsuario);
        $result = new UserDTO(
            $db_data->id, 
            $db_data->nombre, 
            $db_data->password
        );            
        return $result; 
    }
}