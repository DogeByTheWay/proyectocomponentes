<?php
namespace App\DAO\impl;

use App\DTO\MovieDTO;
use App\DAO\IMoviesDAO;

class MoviesJSONDAO implements IMoviesDAO
{
	static private string $pathJson;
    
 	/**
	 */
	function __construct() {
		self::$pathJson = base_path('src/data');
	}

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
		try {
			$jsonData = json_decode(file_get_contents(self::$pathJson.'/peliculas.json'), false);
			foreach ($jsonData as $movie) {
				$result[] = new MovieDTO(
											$movie->id, 
											$movie->titulo, 
											$movie->anyo, 
											$movie->duracion
				);
			}	
		} catch (\Throwable $th) {
			//throw $th;
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
