<?php
namespace App\DAO;
use App\DTO\SubcategoriaDTO;
 
interface ISubcategoriasDAO {
 

    public function read(): array;
    public function findById(int $id): SubcategoriaDTO;
}