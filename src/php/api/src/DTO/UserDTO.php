<?php
namespace App\DTO;
use JsonSerializable;

class UserDTO implements JsonSerializable{

	function __construct(private ?int $id, private string $usuario, private string $password, 
						private bool $admin=false, private bool $loged=false) 
	{
	    $this->id = $id;
	    $this->usuario = $usuario;
	    $this->password = $password;
	    $this->admin = $admin;
		$this->loged = $loged;

	}

	
	public function setPassword(string $password): void{
		$this->password = $password;
	}

	public function setAdmin(bool $admin): void{
		$this->admin = $admin;
	}

	public function setLoged(bool $loged): void{
		$this->loged = $loged;
	}

	public function id(): int {
		return $this->id;
	}

	public function usuario(): string {
		return $this->usuario;
	}

	public function password(): string {
		return $this->password;
	}

	public function admin(): bool {
		return $this->admin;
	}
	public function loged(): bool {
		return $this->loged;
	}

	function jsonSerialize(): mixed {
		return [
			'id' => $this->id,
			'usuario' => $this->usuario,
			'password' => $this->password,
			'admin' => $this->admin
		];		
	}
}