<?php

namespace App\DTO;
use JsonSerializable;
 
class CarritoDTO implements JsonSerializable{
 
    /**
     * @param $id int 
     * @param $nombre string 
     */
    function __construct(private ?int $id, private int $idUsuario,private string $estado,private int $activo) 
    {
        $this->id = $id;
        $this->idUsuario = $idUsuario;
        $this->estado = $estado;
        $this->activo = $activo;
    }
 
 
    /**
     * @return int
     */
    public function id(): int {
        return $this->id;
    }
 
    /**
     * @return string
     */
    public function idUsuario(): int {
        return $this->idUsuario;
    }

    public function estado(): string {
        return $this->estado;
    }
    public function activo(): int {
        return $this->activo;
    }


    /**
     * Specify data which should be serialized to JSON
     * Serializes the object to a value that can be serialized natively by json_encode().
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value of any type other than a resource .
     */
    function jsonSerialize(): mixed {
        return [
            'id' => $this->id,
            'idUsuario' => $this->idUsuario,
            'estado' => $this->estado,
            'activo'=>$this->activo==1 ? true : false
        ];      
    }
}