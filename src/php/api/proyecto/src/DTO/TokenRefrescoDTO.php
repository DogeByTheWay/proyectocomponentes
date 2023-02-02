<?php
namespace App\DTO;
use JsonSerializable;

class TokenRefrescoDTO implements JsonSerializable{

	function __construct(private ?int $id, private int $idUsuario, private string $token, private int $expiraEn, private int $activo) 
	{
	    $this->idUsuario = $idUsuario;
	    $this->token = $token;
	    $this->expiraEn = $expiraEn;
        $this->activo = $activo;
        
	}
	public function id(): int {
		return $this->id;
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

	public function activo(): int {
		return $this->activo;
	}
	public function setActivo(int $activo) {
		$this->activo = $activo;
	}
	
	function jsonSerialize(): mixed {
		return [
            'id' => $this->id,
			'idUsuario' => $this->idUsuario,
			'token' => $this->token,
			'expiraEn' => $this->expiraEn,
            'activo' => $this->activo
		];		
	}
}