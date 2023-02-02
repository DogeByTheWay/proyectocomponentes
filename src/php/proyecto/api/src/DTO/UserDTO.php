<?php
namespace App\DTO;
use JsonSerializable;

class UserDTO implements JsonSerializable{

	function __construct(private ?int $id, private string $nombre, private string $password) 
	{
	    $this->id = $id;
	    $this->nombre = $nombre;
	    $this->password = $password;
	}

	
	public function id(): int {
		return $this->id;
	}

	public function nombre(): string {
		return $this->nombre;
	}

	public function password(): string {
		return $this->password;
	}
	
	function jsonSerialize(): mixed {
		return [
			'id' => $this->id,
			'nombre' => $this->nombre,
			'password' => $this->password
		];		
	}
}