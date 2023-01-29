<?php

namespace App\services;
use App\DTO\ArticuloDTO;
 
interface IArticulosService {
    public function all(): array;
    public function find($id): ArticuloDTO;
}