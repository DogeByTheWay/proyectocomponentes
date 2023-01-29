<?php
namespace App\DAO;
use App\DTO\CategoriaDTO;
 
interface ICategoriasDAO {
 

    public function read(): array;
    public function findById(int $id): CategoriaDTO;
}