<?php
namespace App\DAO\impl;
use App\DTO\CarritoDTO;
use App\DAO\ICarritosDAO;
use App\db\orm\DB;
use Exception;

class CarritosDBDAO implements ICarritosDAO
{



    function read(): array
    {
        $result = array();

        $db_data = DB::table('carritos')->get();
        foreach ($db_data as $carrito) {
            $result[] = new CarritoDTO(
                    $carrito->id,
                    $carrito->idUsuario,
                    $carrito->estado,
                    $carrito->activo
            );
        }
        return $result;
    }



    function findById(int $id): array
    {
        $db_data = DB::table('carritos')->findByIdUsuarioCarrito($id);
        foreach ($db_data as $carrito) {
            $result[] = new CarritoDTO(
                    $carrito->id,
                    $carrito->idUsuario,
                    $carrito->estado,
                    $carrito->activo
            );
        }

        return $result;
    }

    function insert(CarritoDTO $carrito):int
    {
        return DB::table('carritos')->insert(['idUsuario' => $carrito->idUsuario(), 'estado' => $carrito->estado(), 'activo' => $carrito->activo()]);
    }

}