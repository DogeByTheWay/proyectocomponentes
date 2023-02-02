<?php
namespace App\DAO\impl;
use App\DTO\SubcategoriaDTO;
use App\DAO\ISubcategoriasDAO;
use App\db\orm\DB;
use Exception;

class SubcategoriasDBDAO implements ISubcategoriasDAO
{



    function read(): array
    {
        $result = array();

        $db_data = DB::table('subcategorias')->get();
        foreach ($db_data as $subcategoria) {
            $result[] = new SubcategoriaDTO(
                    $subcategoria->id,
                    $subcategoria->nombre,
                    $subcategoria->categoria

            );
        }
        return $result;
    }



    function findById(int $id): SubcategoriaDTO
    {
        $db_data = DB::table('subcategorias')->find($id);
        $result = new SubcategoriaDTO(
                $db_data->id,
                $db_data->nombre,
                $db_data->categoria
        );

        return $result;
    }

}