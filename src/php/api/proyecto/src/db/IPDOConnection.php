<?php

namespace App\db;
 
interface IPDOConnection {
    public static function connect(): \PDO;
}