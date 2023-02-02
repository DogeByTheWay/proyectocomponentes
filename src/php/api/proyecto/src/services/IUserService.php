<?php

namespace App\services;
use App\DTO\UserDTO;

interface IUserService {
    public static function findByNombre(UserDTO $user): UserDTO;
    public static function findById(int $id): \stdClass;
    public static function insert(UserDTO $user): bool;
    public static function find(int $idUsuario): UserDTO;
}