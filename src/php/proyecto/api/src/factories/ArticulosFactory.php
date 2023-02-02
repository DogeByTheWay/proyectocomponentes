<?php
namespace App\factories;
use App\services\IArticulosService;
use App\services\impl\ArticulosService;
use App\DAO\IArticulosDAO;
use App\DAO\impl\ArticulosDBDAO;
class ArticulosFactory{

    public static function getService(): IArticulosService{
        return new ArticulosService();
    }

    public static function getDAO(): IArticulosDAO{
    
        return new ArticulosDBDAO();
     
    }
}