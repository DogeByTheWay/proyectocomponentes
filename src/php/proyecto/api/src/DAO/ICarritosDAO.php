<?php
namespace App\DAO;
use App\DTO\CarritoDTO;
 
interface ICarritosDAO {
 

    public function read(): array;
    public function findById(int $id): array;
    public function insert(CarritoDTO $carrito): int;
}