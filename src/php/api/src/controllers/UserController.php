<?php
namespace App\controllers;

use App\DTO\UserDTO;
use App\factories\UserFactory;
use App\response\HTTPResponse;
use App\services\IUserService;

class UserController {

    private IUserService $service;

	function __construct() {
        $this->service = UserFactory::getService();
	}
    public function getData(): \stdClass {
        $json = file_get_contents('php://input'); 
        $data = json_decode($json);
        return $data;
    }
    
    public function sanitizarDatos($data) {
        $data->nombre = strip_tags($data->nombre);
        $data->password = strip_tags($data->password);
        return $data;
    }

    public function passwordHash($datosSanitizados) {
        $datosSanitizados->password = password_hash($datosSanitizados->password, PASSWORD_DEFAULT, ['cost' => 10]);
       
        return $datosSanitizados;
    }   

    public function crearDTO() {
        $data = $this->getData();
        try {
            if(!isset($data->nombre) || !isset($data->password)) {
                throw new \Throwable();
            }
            $datosSanitizados = $this->sanitizarDatos($data);
            if(filter_var($datosSanitizados->nombre, FILTER_VALIDATE_EMAIL)) {
                $user =  new UserDTO(null, $datosSanitizados->nombre, $datosSanitizados->password);                
                return $user;
            } else {
                HTTPResponse::json(400, "Email no es valido.");  
            }
        } catch (\Throwable $e) {
            HTTPResponse::json(400, "Informacion incompleta.");        
        }        
    }

    public function login() {
        $user = $this->crearDTO();
        if(!is_null($user)) {
            try {
                $db_data = UserFactory::getService()::findByNombre($user);
                if(password_verify($user->password(), $db_data->password())) {
                    $this->insertToken($db_data);
                    HTTPResponse::json(201, "Sesion iniciada");
                } else {
                    HTTPResponse::json(400, "Contrasenya incorrecta");
                }
                
            }catch(\Exception $e) {
                HTTPResponse::json($e->getCode(), "El email no esta registrado");
            }
        }
    }

    public function insertToken($user) {
        $token = new TokenController();
        $token->update($user);
    }

    public function logout($id) {
        try {
            UserFactory::getService()::findById($id);
            HTTPResponse::json(201, "Sesion suspendida");
        }catch(\Exception $e) {
            HTTPResponse::json($e->getCode(), "El id no esta registrado");
        }
    }

    public function registro(): void {        
        $user = $this->crearDTO($registro = true);
        if(!is_null($user)) {
            try {
                UserFactory::getService()::insert($user);
                HTTPResponse::json(201, "Usuario creado");
            }catch(\Exception $e) {
                HTTPResponse::json($e->getCode(), "El email ya esta registrado");
            }
        }
    }
}