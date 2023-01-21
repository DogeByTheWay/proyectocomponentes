<?php
$router = new \Bramus\Router\Router();

$router->setNamespace('\App');

$router->post('/registro','controllers\UserController@registro');
$router->post('/login', 'controllers\UserController@login');
$router->post('/logout/(\d+)', 'controllers\UserController@logout');

$router->get('/', function() { echo "Bienvenido a la API de películas"; });
$router->get('/peliculas', 'controllers\MoviesController@all');
$router->get('/peliculas/(\d+)', 'controllers\MoviesController@find');
$router->get('/peliculas/(\d+)/criticas', function($id) { include __DIR__ . "/../app/pelicula_criticas.php"; });
$router->get('/peliculas/(\d+)/actores', function($id) { include __DIR__ . "/../app/pelicula_actores.php"; });
$router->post('/peliculas', 'controllers\MoviesController@insert');
$router->delete('/peliculas/(\d+)', 'controllers\MoviesController@delete');
$router->put('/peliculas/(\d+)', 'controllers\MoviesController@update');
$router->set404(function() {
    http_response_code(404);
    echo json_encode(['Message' => 'Recurso no encontrado']);
});
$router->get('/actores', 'controllers\ActoresController@all');
$router->get('/actores/(\d+)', 'controllers\ActoresController@find');
$router->post('/actores', 'controllers\ActoresController@insert');
$router->delete('/actores/(\d+)', 'controllers\ActoresController@delete');
$router->put('/actores/(\d+)', 'controllers\ActoresController@update');

$router->run();