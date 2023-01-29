<?php
namespace App\controllers;

use App\DTO\MovieDTO;
use App\response\HTTPResponse;
use App\factories\MoviesFactory;
use App\services\IMoviesService;

class MoviesController {

    private IMoviesService $service;

	function __construct() {
        $this->service = MoviesFactory::getService();
	}

    public function all(){
        try {
            HTTPResponse::json(200, MoviesFactory::getService()::all());
        } catch(\PDOException $e) {
            HTTPResponse::json(intval($e->getCode()), $e->getMessage());
        }       
    }

    public function find($id){
        try {
            HTTPResponse::json(200, MoviesFactory::getService()::find($id));
            //echo json_encode($this->service->find($id));
        } catch (\Throwable $th) {
            HTTPResponse::json(404, $th->getMessage());
            //echo json_encode($th->getMessage());
        }
    }

    public function insert() {       
            $movie = $this->jsonDepurado();
            if($movie instanceof MovieDTO) {
                MoviesFactory::getService()::insert($movie);
                HTTPResponse::json(201, "Recurso creado");
            } else {
                HTTPResponse::json(400, "No se modifica la base de datos.");
            }  
    }

    public function update($id) {      
            $movie = $this->jsonDepurado();
            if($movie instanceof MovieDTO) {
                try {
                MoviesFactory::getService()::update($id,$movie);              
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
            HTTPResponse::json(200, MoviesFactory::getService()::delete($id));
            //echo json_encode($this->service->find($id));
        } catch (\Throwable $th) {
            HTTPResponse::json(404, $th->getMessage());
            //echo json_encode($th->getMessage());
        }
    }

    public function jsonDepurado() {
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            if(isset($data['titulo']) && isset($data['anyo']) && isset($data['duracion'])) {            
                if(gettype($data['titulo'])=="string" && gettype($data['anyo'])=="integer" && gettype($data['duracion'])=="integer") {
                    return new MovieDTO(null, $data['titulo'], $data['anyo'], $data['duracion']);
                } else {
                throw new \Exception("Campos de la pelicula en formato erroneo.", 400);
                }
            } else {
                throw new \Exception("Faltan campos de la pelicula.",400);
            }
        }  catch (\Exception $e) {
            HTTPResponse::json($e->getCode(), $e->getMessage());
        }
    }
}