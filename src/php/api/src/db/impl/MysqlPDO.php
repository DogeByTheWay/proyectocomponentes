<?php

namespace App\db\impl;

use PDO;
use PDOException;
use App\db\IPDOConnection;

class MysqlPDO implements IPDOConnection {

        public static function connect(): PDO{
            try {         
                
                $db = $_ENV['DB'];
                $user = $_ENV['USER'];
                $password = $_ENV['PASSWORD']; 
                $sql = $_ENV['TIPODB'];
                $url = $_ENV['URL'];

                $pdo = new PDO("$sql:host=$url;dbname=$db", $user, $password);    ;
                $pdo->exec("set names utf8");
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                throw new PDOException("Error al conectar con la bbdd",500);
            }
            return $pdo;
        }
}
