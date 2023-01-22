<?php
namespace App\DTO;
use JsonSerializable;

class TokenDTO implements JsonSerializable{

	function __construct(private int $idUsuario, private string $token, private int $expiraEn) 
	{
	    $this->idUsuario = $idUsuario;
	    $this->token = $token;
	    $this->expiraEn = $expiraEn;
	}

	
	public function idUsuario(): int {
		return $this->idUsuario;
	}

	public function token(): string {
		return $this->token;
	}

	public function expiraEn(): int {
		return $this->expiraEn;
	}
	
	function jsonSerialize(): mixed {
		return [
			'idUsuario' => $this->idUsuario,
			'token' => $this->token,
			'expiraEn' => $this->expiraEn
		];		
	}
}