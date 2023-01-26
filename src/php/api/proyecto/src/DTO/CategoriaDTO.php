<?php

namespace App\DTO;
use JsonSerializable;
 
class CategoriaDTO implements JsonSerializable{
 
    /**
     * @param $id int 
     * @param $nombre string 
     */
    function __construct(private int $id, private string $nombre) 
    {
        $this->id = $id;
        $this->nombre = $nombre;
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
    public function nombre(): string {
        return $this->nombre;
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
            'nombre' => $this->nombre,
         
        ];      
    }
}