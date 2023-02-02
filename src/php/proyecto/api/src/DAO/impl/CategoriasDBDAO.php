<?php
namespace App\DAO\impl;
use App\DTO\CategoriaDTO;
use App\DAO\ICategoriasDAO;
use App\db\orm\DB;
use Exception;

class CategoriasDBDAO implements ICategoriasDAO
{



    function read(): array
    {
        $result = array();

        $db_data = DB::table('categorias')->get();
        foreach ($db_data as $categoria) {
            $result[] = new CategoriaDTO(
                    $categoria->id,
                    $categoria->nombre

            );
        }
        return $result;
    }



    function findById(int $id): CategoriaDTO
    {
        $db_data = DB::table('categorias')->find($id);
        $result = new CategoriaDTO(
                $db_data->id,
                $db_data->nombre
        );

        return $result;
    }

}