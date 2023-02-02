<?php
namespace App\controllers;

use App\DTO\CarritoDTO;
use App\response\HTTPResponse;
use App\factories\CarritosFactory;
use App\services\ICarritosService;

class CarritosController {

    private ICarritosService $service;

	function __construct() {
        $this->service = CarritosFactory::getService();
	}

    public function all(){
        try {
            HTTPResponse::json(200, CarritosFactory::getService()->all());
        } catch(\PDOException $e) {
            HTTPResponse::json(intval($e->getCode()), $e->getMessage());
        }       
    }

    public function find($id){
        try {
            HTTPResponse::json(200, CarritosFactory::getService()->find($id));
            //echo json_encode($this->service->find($id));
        } catch (\Throwable $th) {
            HTTPResponse::json(404, $th->getMessage());
            //echo json_encode($th->getMessage());
        }
    }

    public function insert() {       
            $carrito = $this->jsonDepurado();
            if($carrito instanceof CarritoDTO) {
                CarritosFactory::getService()->insert($carrito);
                HTTPResponse::json(201, "Recurso creado");
            } else {
                HTTPResponse::json(400, "No se modifica la base de datos.");
            }  
    }

    public function update($id) {      
            $carrito = $this->jsonDepurado();
            if($carrito instanceof CarritoDTO) {
                try {
                CarritosFactory::getService()::update($id,$carrito);              
                HTTPResponse::json(201, "Recurso actualizado"); 
                } catch(\Exception $e) {
                    HTTPResponse::json(404, $e->getMessage());
                }
            } else {
                HTTPResponse::json(400, "No se modifica la base de datos.");
            }     
    }

    public function delete($id){
        try {
            HTTPResponse::json(200, CarritosFactory::getService()::delete($id));
            //echo json_encode($this->service->find($id));
        } catch (\Throwable $th) {
            HTTPResponse::json(404, $th->getMessage());
            //echo json_encode($th->getMessage());
        }
    }

    public function jsonDepurado() {
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            if(isset($data['idUsuario']) && isset($data['estado']) && isset($data['activo'])) {            
                if(gettype($data['idUsuario'])=="integer" && gettype($data['estado'])=="string" && gettype($data['activo'])=="integer") {
                    return new CarritoDTO(null, $data['idUsuario'], $data['estado'], $data['activo']);
                } else {
                throw new \Exception("Campos del carrito en formato erroneo.", 400);
                }
            } else {
                throw new \Exception("Faltan campos del carrito.",400);
            }
        }  catch (\Exception $e) {
            HTTPResponse::json($e->getCode(), $e->getMessage());
        }
    }
}