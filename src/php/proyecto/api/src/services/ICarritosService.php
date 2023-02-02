<?php

namespace App\services;
use App\DTO\CarritoDTO;
 
interface ICarritosService {
    public function all(): array;
    public function find($id): array;
    public function insert(CarritoDTO $carrito): int;
}