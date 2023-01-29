<?php
namespace App\DTO;
use JsonSerializable;

class LocalStorageDTO implements JsonSerializable{

	function __construct(private int $idUsuario, private string $token, private string $tokenRefresco) 
	{
	    $this->idUsuario = $idUsuario;
	    $this->token = $token;
	    $this->tokenRefresco = $tokenRefresco;
	}

	
	public function idUsuario(): int {
		return $this->idUsuario;
	}

	public function token(): string {
		return $this->token;
	}

	public function tokenRefresco(): string {
		return $this->tokenRefresco;
	}
	
	function jsonSerialize(): mixed {
		return [
			'idUsuario' => $this->idUsuario,
			'token' => $this->token,
			'tokenRefresco' => $this->tokenRefresco
		];		
	}
}