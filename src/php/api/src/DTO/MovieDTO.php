<?php
namespace App\DTO;
use JsonSerializable;

class MovieDTO implements JsonSerializable{

	function __construct(private ?int $id, private string $titulo, private int $anyo, private int $duracion) 
	{
	    $this->id = $id;
	    $this->titulo = $titulo;
	    $this->anyo = $anyo;
	    $this->duracion = $duracion;
	}


	public function id(): int {
		return $this->id;
	}

	public function titulo(): string {
		return $this->titulo;
	}

	public function anyo(): int {
		return $this->anyo;
	}

	public function duracion(): int {
		return $this->duracion;
	}

	function jsonSerialize(): mixed {
		return [
			'id' => $this->id,
			'titulo' => $this->titulo,
			'anyo' => $this->anyo,
			'duracion' => $this->duracion
		];		
	}
}