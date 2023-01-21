<?php

namespace App\factories;

use App\db\impl\MysqlPDO;

class DBFactory {

    public static function getConnection() {
        return new MysqlPDO();       
    }
}
