<?php
namespace App\factories;

use App\services\ITokenService;
use App\DAO\ITokenDAO;
use App\services\impl\TokenService;
use App\DAO\impl\TokenDAO;


class TokenFactory {

    public static function getService(): ITokenService {
        return new TokenService();
    }

    public static function getDAO(): ITokenDAO {
        return new TokenDAO();
    }

}