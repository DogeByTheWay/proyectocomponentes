<?php
namespace App\factories;

use App\services\IUserService;
use App\DAO\IUserDAO;
use App\services\impl\UserService;
use App\DAO\impl\UserDAO;


class UserFactory {

    public static function getService(): IUserService {
        return new UserService();
    }

    public static function getDAO(): IUserDAO {
        return new UserDAO();
    }

}