<?php

namespace App\services\impl;
use App\services\ICategoriasService;
use App\DTO\CategoriaDTO;
use App\DAO\ICategoriasDAO;
use App\factories\CategoriasFactory;
use Exception;
 
class CategoriasService implements ICategoriasService {
    
    private ICategoriasDAO $dao;
    function __construct(){
        //se llama inyeccion de interfaces , estoy creando un objeto de MoviesStaticDAO y su implementacion
        //es la de ImoviesDao
        $this->dao= CategoriasFactory::getDAO();
     }
 /*
    private $Categorias = [
        array(
            "id" => 1,
            "nombre" => "Jennifer Lopez",
           
        ) ,
        array(
            "id" => 2,
            "nombre" => "Pablo Escobar",
          
        ) ,
        array(
            "id" => 3,
            "nombre" => "Chanin Tatum",
          
        ) ,
        array(
            "id" => 4,
            "nombre" => "Will Smith",
        
        )
    ];
 
 */
    public function all(): array {
       return  $this->dao->read();
    }
 
  
    function find($id): CategoriaDTO {
        /*
        $misCategorias= $this->all();
        //Probar recorrer mi pelicula con un for each y acceder al $id  
        foreach ($misCategorias as $actor){
         //como no es un array si no que un objeto porque he accedido desde el método all
         //para acceder al id tengo que acceder mediante el metodo get de id de la clase MovieDTO porque es un
         //objeto de esa clase 
          if($actor->id()==$id){
           //   $resultado=$miPelicula[$id-1];
              return  $actor;
            }      
                                               }
                     //esto lo que hace es lanzar la excepcion y todo eso va escalando al controlador y tendría que //hacer ahí
            //un try catch para que se ejecute la exception. También hay que importar la clase Exception tanto aqui como en Movies Controller
            throw new Exception( "<p> No se ha encontrado la película si el $id no existe</p>");
  
 */
return $this->dao->findById($id);
    }
}