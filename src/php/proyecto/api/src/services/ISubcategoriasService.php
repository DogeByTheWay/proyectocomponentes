<?php

namespace App\services;
use App\DTO\SubcategoriaDTO;
 
interface ISubcategoriasService {
    public function all(): array;
    public function find($id): SubcategoriaDTO;
}