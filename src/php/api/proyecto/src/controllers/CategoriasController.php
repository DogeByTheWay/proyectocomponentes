<?php

namespace App\controllers;
use App\factories\CategoriasFactory;
use App\response\HTTPResponse;
use Exception;
 
class CategoriasController {
 /*
    private IActoresService $service;
 /*ANTES DEL FACTORY
    function __construct() {
        $this->service = new ActoresService();
    }
    */
 
    public function all(){
        
        HTTPResponse::json(200,CategoriasFactory::getService()->all());
    }
 
    public function find($id){
       try{
        HTTPResponse::json(200,CategoriasFactory::getService()->find($id));
       }catch(Exception $e){
        HTTPResponse::json(400,$e->getMessage());
    }
}
}