<?php
namespace App\factories;

use App\services\ITokenRefrescoService;
use App\DAO\ITokenRefrescoDAO;
use App\services\impl\TokenRefrescoService;
use App\DAO\impl\TokenRefrescoDAO;


class TokenRefrescoFactory {

    public static function getService(): ITokenRefrescoService {
        return new TokenRefrescoService();
    }

    public static function getDAO(): ITokenRefrescoDAO {
        return new TokenRefrescoDAO();
    }

}