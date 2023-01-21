<?php
namespace App\controllers;

use App\DTO\ActorDTO;
use App\response\HTTPResponse;
use App\factories\ActoresFactory;
use App\services\IActoresService;

class ActoresController {

    private IActoresService $service;

    function __constructor() {
        $this->service = ActoresFactory::getService();
    }

    function all() {
        try {
            HTTPResponse::json(200, ActoresFactory::getService()::read());
        } catch(\PDOException $e) {
            HTTPResponse::json($e->getCode(), $e->getMessage());
        }  
    }

    function find($id) {
        try {
            HTTPResponse::json(200, ActoresFactory::getService()::find($id));
            //echo json_encode($this->service->find($id));
        } catch (\Throwable $th) {
            HTTPResponse::json(404, $th->getMessage());
            //echo json_encode($th->getMessage());
        }
    }

    function insert() {
        $actor = $this->jsonDepurado();
            if($actor instanceof ActorDTO) {
                ActoresFactory::getService()::insert($actor);
                HTTPResponse::json(201, "Recurso creado");
            } else {
                HTTPResponse::json(400, "No se modifica la base de datos.");
            }  
    }

    function delete($id) {
        try {
            HTTPResponse::json(200, ActoresFactory::getService()::delete($id));
            //echo json_encode($this->service->find($id));
        } catch (\Throwable $th) {
            HTTPResponse::json(404, $th->getMessage());
            //echo json_encode($th->getMessage());
        }
    }

    function update($id) {
        $actor = $this->jsonDepurado();
        if($actor instanceof ActorDTO) {
            try {
            ActoresFactory::getService()::update($id,$actor);              
            HTTPResponse::json(201, "Recurso actualizado"); 
            } catch(\Exception $e) {
                HTTPResponse::json(404, $e->getMessage());
            }
        } else {
            HTTPResponse::json(400, "No se modifica la base de datos.");
        }     
    }
    
    public function jsonDepurado() {
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            if(isset($data['nombre']) && isset($data['anyo']) && isset($data['pais'])) {            
                if(gettype($data['nombre'])=="string" && gettype($data['anyo'])=="integer" && gettype($data['pais'])=="string") {
                    return new actorDTO(null, $data['nombre'], $data['anyo'], $data['pais']);
                } else {
                throw new \Exception("Campos de los actores en formato erroneo.", 400);
                }
            } else {
                throw new \Exception("Faltan campos del actor.",400);
            }
        }  catch (\Exception $e) {
            HTTPResponse::json($e->getCode(), $e->getMessage());
        }
    }
}