<?php
use App\App;
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

require_once __DIR__ . "/vendor/autoload.php";
//$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
//$dotenv->load(); 
$app = new App();
$app->run();