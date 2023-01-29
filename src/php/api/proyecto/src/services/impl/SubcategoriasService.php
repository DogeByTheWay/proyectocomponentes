<?php

namespace App\services\impl;
use App\services\ISubcategoriasService;
use App\DTO\SubcategoriaDTO;
use App\DAO\ISubcategoriasDAO;
use App\factories\SubcategoriasFactory;
use Exception;
 
class SubcategoriasService implements ISubcategoriasService {
    
    private ISubcategoriasDAO $dao;
    function __construct(){
        //se llama inyeccion de interfaces , estoy creando un objeto de MoviesStaticDAO y su implementacion
        //es la de ImoviesDao
        $this->dao= SubcategoriasFactory::getDAO();
     }
 
    public function all(): array {
       return  $this->dao->read();
    }
 
  
    function find($id): SubcategoriaDTO {
return $this->dao->findById($id);
    }
}