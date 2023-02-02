<?php
namespace App\factories;
use App\services\ICategoriasService;
use App\services\impl\CategoriasService;
use App\DAO\ICategoriasDAO;
use App\DAO\impl\CategoriasDBDAO;
class CategoriasFactory{

    public static function getService(): ICategoriasService{
        return new CategoriasService();
    }

    public static function getDAO(): ICategoriasDAO{
    
        return new CategoriasDBDAO();
     
    }
}