<?php

namespace App\DAO\impl;

use App\db\orm\DB;
use App\DTO\ActorDTO;
use App\DAO\IActoresDAO;

class ActoresDAO implements IActoresDAO{

    
    public static function create(ActorDTO $actor): int {
        return DB::table('actores')->insert(['nombre' => $actor->nombre(), 'anyo' => $actor->anyo(), 'pais' => $actor->pais()]);
     }
    
    public static function read(): array {
        $result = array();        
        $db_data = DB::table('actores')->select('*')->get();
        foreach ($db_data as $actor) {
            $result[] = new ActorDTO(
            $actor->id, 
            $actor->nombre, 
            $actor->anyo, 
            $actor->pais
        );            
        }
        return $result;
    }
    public static function findById(int $id): ActorDTO {
        $db_data = DB::table('actores')->find($id);
        $result = new ActorDTO(
                $db_data->id, 
                $db_data->nombre, 
                $db_data->anyo, 
                $db_data->pais         
            );         
            return $result;   
    }

    public static function update(int $id, ActorDTO $actor): int {       
      return DB::table('actores')->update($id, ['nombre' => $actor->nombre(), 'anyo' => $actor->anyo(), 'pais' => $actor->pais()]);
     }
    public static function delete(int $id): int {
        return DB::table('actores')->delete($id);
    }
    
}