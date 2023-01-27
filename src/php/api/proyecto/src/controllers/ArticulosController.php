<?php

namespace App\controllers;
use App\factories\ArticulosFactory;
use App\response\HTTPResponse;
use Exception;
 
class ArticulosController {

 
    public function all(){
        
        HTTPResponse::json(200,ArticulosFactory::getService()->all());
    }
 
    public function find($id){
       try{
        HTTPResponse::json(200,ArticulosFactory::getService()->find($id));
       }catch(Exception $e){
        HTTPResponse::json(400,$e->getMessage());
    }
}
}