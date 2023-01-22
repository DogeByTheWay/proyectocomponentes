<?php

namespace App\services\impl;

use App\DTO\UserDTO;
use App\factories\UserFactory;
use App\services\IUserService;

class UserService implements IUserService {

    public static function findByNombre(UserDTO $user): UserDTO {
        return UserFactory::getDAO()::findByNombre($user);
    }

    public static function findById(int $id): \stdClass {
      return UserFactory::getDAO()::findById($id);
    }

    public static function insert(UserDTO $user): bool {
		return UserFactory::getDAO()::insert($user);
    }
}