<?php
use App\App;

require_once __DIR__ . "/vendor/autoload.php";
//$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
//$dotenv->load(); 
$app = new App();
$app->run();