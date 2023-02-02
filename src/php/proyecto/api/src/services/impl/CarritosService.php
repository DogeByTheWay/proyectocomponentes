<?php

namespace App\services\impl;
use App\services\ICarritosService;
use App\DTO\CarritoDTO;
use App\DAO\ICarritosDAO;
use App\factories\CarritosFactory;
use Exception;
 
class CarritosService implements ICarritosService {
    
    private ICarritosDAO $dao;
    function __construct(){
        //se llama inyeccion de interfaces , estoy creando un objeto de MoviesStaticDAO y su implementacion
        //es la de ImoviesDao
        $this->dao= CarritosFactory::getDAO();
     }
 
    public function all(): array {
       return  $this->dao->read();
    }
 
  
    public function find($id): array {
        return $this->dao->findById($id);
    }

    public function insert(CarritoDTO $carrito): int{
        return $this->dao->insert($carrito);
    }
}