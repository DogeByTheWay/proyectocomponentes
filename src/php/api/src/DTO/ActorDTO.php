<?php

namespace App\DTO;
use JsonSerializable;

class ActorDTO implements JsonSerializable{

function __construct(private ?int $id, private string $nombre, private int $anyo, private string $pais) 
{
    $this->id = $id;
    $this->nombre = $nombre;
    $this->anyo = $anyo;
    $this->pais = $pais;
}

public function id(): int {
    return $this->id;
}

public function nombre(): string {
    return $this->nombre;
}

public function anyo(): int {
    return $this->anyo;
}

public function pais(): string {
    return $this->pais;
}

function jsonSerialize(): mixed {
    return [
        'id' => $this->id,
        'nombre' => $this->nombre,
        'anyo' => $this->anyo,
        'pais' => $this->pais
    ];		
}
}