<?php

namespace App\services;
use App\DTO\CategoriaDTO;
 
interface ICategoriasService {
    public function all(): array;
    public function find($id): CategoriaDTO;
}