<?php
$router = new \Bramus\Router\Router();

$router->setNamespace('\App');

$router->post('/registro','controllers\UserController@registro');
$router->post('/login', 'controllers\UserController@login');
$router->get('/logout/(\d+)', 'controllers\UserController@logout');
$router->get('/token/(.*)', 'controllers\TokenController@isExpired');

$router->get('/', function() { echo "Bienvenid@ a Tech'n'Save"; });
$router->get('/usuarios', 'controllers\UserController@all');
$router->get('/usuarios/(\d+)', 'controllers\UserController@find');
$router->post('/token', 'controllers\TokenController@insert');
$router->delete('/token/(\d+)', 'controllers\TokenController@delete');
$router->put('/token/(\d+)', 'controllers\TokenController@update');
$router->patch('/token/(\d+)', 'controllers\TokenController@patch');
$router->set404(function() {
    http_response_code(404);
    echo json_encode(['Message' => 'Recurso no encontrado']);
});

$router->run();