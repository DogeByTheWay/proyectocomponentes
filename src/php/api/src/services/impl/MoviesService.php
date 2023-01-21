<?php

namespace App\services\impl;
use App\services\IMoviesService;
use App\DAO\IMoviesDAO;
use App\DTO\MovieDTO;
use App\factories\MoviesFactory;

class MoviesService implements IMoviesService {

    public static function all(): array {
        return MoviesFactory::getDAO()::read();
    }

	public static function find($id): MovieDTO {
        return MoviesFactory::getDAO()::findById($id);
	}

	public static function insert($movie):int{
		return MoviesFactory::getDAO()::create($movie);
	}
	
	public static function delete($id): int {
        return MoviesFactory::getDAO()::delete($id);
	}
	
    public static function update(int $id, MovieDTO $movie): int {
        return MoviesFactory::getDAO()::update($id, $movie);
	}
}
