<?php
namespace App\DAO\impl;
use App\DTO\ArticuloDTO;
use App\DAO\IArticulosDAO;
use App\db\orm\DB;
use Exception;

class ArticulosDBDAO implements IArticulosDAO
{



    function read(): array
    {
        $result = array();

        $db_data = DB::table('articulos')->get();
        foreach ($db_data as $articulo) {
            $result[] = new ArticuloDTO(
                    $articulo->id,
                    $articulo->nombre,
                    $articulo->descripcion,
                    $articulo->precio,
                    $articulo->oferta,
                    $articulo->descuento,
                    $articulo->categoria,
                    $articulo->subcategoria

            );
        }
        return $result;
    }



    function findById(int $id): ArticuloDTO
    {
        $db_data = DB::table('articulos')->find($id);
        $result = new ArticuloDTO(
                $db_data->id,
                $db_data->nombre,
                $db_data->descripcion,
                $db_data->precio,
                $db_data->oferta,
                $db_data->descuento,
                $db_data->categoria,
                $db_data->subcategoria
        );

        return $result;
    }

}