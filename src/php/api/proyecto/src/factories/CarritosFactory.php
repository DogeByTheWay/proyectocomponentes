<?php
namespace App\factories;
use App\services\ICarritosService;
use App\services\impl\CarritosService;
use App\DAO\ICarritosDAO;
use App\DAO\impl\CarritosDBDAO;
class CarritosFactory{

    public static function getService(): ICarritosService{
        return new CarritosService();
    }

    public static function getDAO(): ICarritosDAO{
    
        return new CarritosDBDAO();
     
    }
}