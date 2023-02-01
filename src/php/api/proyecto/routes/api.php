<?php
$router = new \Bramus\Router\Router();

$router->setNamespace('\App');

$router->post('/registro','controllers\UserController@registro');
$router->post('/login', 'controllers\UserController@login');
$router->post('/logout/(\d+)', 'controllers\UserController@logout');
$router->get('/categorias', 'controllers\CategoriasController@all');
$router->get('/categorias/(\d+)', 'controllers\CategoriasController@find');
$router->get('/subcategorias', 'controllers\SubcategoriasController@all');
$router->get('/subcategorias/(\d+)', 'controllers\SubcategoriasController@find');
$router->get('/articulos', 'controllers\ArticulosController@all');
$router->get('/articulos/(\d+)', 'controllers\ArticulosController@find');
$router->get('/', function() { echo "Bienvenid@ a Tech'n'Save"; });
$router->get('/usuarios', 'controllers\UserController@all');
$router->get('/user/(\d+)', 'controllers\UserController@getUser');
$router->get('/usuarios/(\d+)', 'controllers\UserController@find');
$router->post('/token', 'controllers\TokenController@insert');
$router->get('/token', 'controllers\TokenController@isExpired');
$router->get('/token/(\d+)', 'controllers\TokenController@freshToken');
$router->get('/tokenrefresco', 'controllers\TokenRefrescoController@find');
$router->delete('/token/(\d+)', 'controllers\TokenController@delete');
$router->put('/token/(\d+)', 'controllers\TokenController@update');
$router->patch('/token/(\d+)', 'controllers\TokenController@patch');
$router->set404(function() {
    http_response_code(404);
    echo json_encode(['Message' => 'Recurso no encontrado']);
});

$router->run();