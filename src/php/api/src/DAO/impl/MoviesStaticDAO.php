<?php
namespace App\DAO\impl;

use App\DTO\MovieDTO;
use App\DAO\IMoviesDAO;

class MoviesStaticDAO implements IMoviesDAO {

    private static $movies = [
        array(
            "id" => 1,
            "titulo" => "El padrino",
            "anyo" => 1972,
            "duracion" => 175
        ) ,
        array(
            "id" => 2,
            "titulo" => "El padrino 2",
            "anyo" => 1974,
            "duracion" => 200
        ) ,
        array(
            "id" => 3,
            "titulo" => "Senderos de gloria",
            "anyo" => 1957,
            "duracion" => 86
        ) ,
        array(
            "id" => 4,
            "titulo" => "Primera plana",
            "anyo" => 1974,
            "duracion" => 105
        )
    ];


	/**
	 *
	 * @param MovieDTO $movie
	 *
	 * @return bool
	 */
	static function create(MovieDTO $movie): bool {
        return false;
    }
	
	/**
	 *
	 * @return array
	 */
	static function read(): array {
        $result = array();

        foreach (self::movies as $movie) {
            array_push($result, new MovieDTO(
                                        $movie['id'], 
                                        $movie['titulo'], 
                                        $movie['anyo'], 
                                        $movie['duracion']
                                )
            );
        }

        return $result;
	}
	
	/**
	 *
	 * @param int $id
	 *
	 * @return MovieDTO
	 */
	static function findById(int $id): MovieDTO {
        $movies = self::read();
        $movie = array_filter($movies, function($movie) use ($id){ return $movie->id() == $id; });
        if(!empty($movie)) {
            //reset() establece el puntero interno de un array a su primer elemento
            return reset($movie);
        }

        throw new \Exception("No se ha encontrado la película");
	}
	
	/**
	 *
	 * @param int $id
	 * @param MovieDTO $movie
	 *
	 * @return bool
	 */
	static function update(int $id, MovieDTO $movie): bool {
        return false;
	}
	
	/**
	 *
	 * @param int $id
	 *
	 * @return bool
	 */
	static function delete(int $id): bool {
        return false;
	}
}