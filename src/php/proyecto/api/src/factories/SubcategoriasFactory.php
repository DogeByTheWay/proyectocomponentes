<?php
namespace App\factories;
use App\services\ISubcategoriasService;
use App\services\impl\SubcategoriasService;
use App\DAO\ISubcategoriasDAO;
use App\DAO\impl\SubcategoriasDBDAO;
class SubcategoriasFactory{

    public static function getService(): ISubcategoriasService{
        return new SubcategoriasService();
    }

    public static function getDAO(): ISubcategoriasDAO{
    
        return new SubcategoriasDBDAO();
     
    }
}