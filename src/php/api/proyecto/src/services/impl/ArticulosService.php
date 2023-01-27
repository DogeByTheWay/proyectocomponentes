<?php

namespace App\services\impl;
use App\services\IArticulosService;
use App\DTO\ArticuloDTO;
use App\DAO\IArticulosDAO;
use App\factories\ArticulosFactory;
use Exception;
 
class ArticulosService implements IArticulosService {
    
    private IArticulosDAO $dao;
    function __construct(){
        //se llama inyeccion de interfaces , estoy creando un objeto de MoviesStaticDAO y su implementacion
        //es la de ImoviesDao
        $this->dao= ArticulosFactory::getDAO();
     }
 
    public function all(): array {
       return  $this->dao->read();
    }
 
  
    function find($id): ArticuloDTO {
return $this->dao->findById($id);
    }
}