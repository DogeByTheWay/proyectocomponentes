<?php

namespace App\DTO;
use JsonSerializable;
 
class ArticuloDTO implements JsonSerializable{
 
    /**
     * @param $id int 
     * @param $nombre string 
     */
    function __construct(private int $id, private string $nombre,private string $descripcion,private int $precio,private ?int $oferta, 
    private ?int $descuento, private int $categoria, private int $subcategoria) 
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->precio = $precio;
        $this->oferta = $oferta;
        $this->descuento = $descuento;
        $this->categoria = $categoria;
        $this->subcategoria = $subcategoria;
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

    public function descripcion(): string {
        return $this->descripcion;
    }
    public function precio(): int {
        return $this->precio;
    }

    public function oferta(): int {
        return $this->oferta;
    }
    public function descuento(): int {
        return $this->descuento;
    }
    public function categoria(): int {
        return $this->oferta;
    }
    public function subcategoria(): int {
        return $this->subcategoria;
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
            'descripcion' => $this->descripcion,
            'precio'=>$this->precio,
            'oferta'=>$this->oferta==1 ? true : false,
            'descuento'=>$this->descuento,
            'categoria'=>$this->categoria,
            'subcategoria'=>$this->subcategoria

         
        ];      
    }
}