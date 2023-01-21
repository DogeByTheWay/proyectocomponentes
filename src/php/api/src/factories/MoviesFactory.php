<?php
namespace App\factories;

use App\services\IMoviesService;
use App\DAO\IMoviesDAO;
use App\services\impl\MoviesService;
use App\DAO\impl\MoviesJSONDAO;
use App\DAO\impl\MoviesStaticDAO;
use App\DAO\impl\MoviesDBDAO;


class MoviesFactory {

    public static function getService(): IMoviesService{
        return new MoviesService();
    }

    public static function getDAO(): IMoviesDAO {
        //return new MoviesStaticDAO();
        return new MoviesDBDAO();
    }

}