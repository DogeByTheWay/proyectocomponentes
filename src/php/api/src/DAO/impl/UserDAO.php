<?php

namespace App\DAO\impl;
use App\db\orm\DB;
use App\DTO\UserDTO;
use App\DAO\IUserDAO;

class UserDAO implements IUserDAO {
    public static function insert(UserDTO $user): bool {
        return DB::table('user')->insert(['usuario' => $user->usuario(), 
        'password' => $user->password()]);;
    }
    public static function findByUsuario(UserDTO $user): bool {
        $db_data = DB::table('user')->findUser($user->usuario());
        $respuesta = false;
        if(password_verify($user->password(), $db_data->password)) {
            $respuesta = true;
            $user->setLoged(true);
            DB::table('user')->update($db_data->id, 
            ['usuario' => $db_data->usuario, 
            'password' => $db_data->password, 
            'admin' => $db_data->admin,
            'loged' => $user->loged()
            ]);
        }    
        return $respuesta;
    }

    public static function findById(int $id): bool {
        $db_data = DB::table('user')->find($id);
        return DB::table('user')->update($db_data->id, 
            ['usuario' => $db_data->usuario, 
            'password' => $db_data->password, 
            'admin' => $db_data->admin,
            'loged' => false
            ]);
    }
}