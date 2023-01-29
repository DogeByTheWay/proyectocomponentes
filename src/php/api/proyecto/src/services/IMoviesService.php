<?php

namespace App\services;
use App\DTO\MovieDTO;

interface IMoviesService {
    public static function all(): array;
    public static function find($id): MovieDTO;
    public static function insert($movie): int;
    public static function update(int $id, MovieDTO $movie): int;
    public static function delete($id): int;
}