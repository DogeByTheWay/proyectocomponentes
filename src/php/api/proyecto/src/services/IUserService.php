<?php

namespace App\services;
use App\DTO\UserDTO;

interface IUserService {
    public static function findByUsuario(UserDTO $user): bool;
    public static function findById(int $id): bool;
    public static function insert(UserDTO $user): bool;
}