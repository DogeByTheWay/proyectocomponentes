<?php
namespace App\DAO;
use App\DTO\ArticuloDTO;
 
interface IArticulosDAO {
 

    public function read(): array;
    public function findById(int $id): ArticuloDTO;
    public function findByCategorias(string $categoria, int $id): array;
}