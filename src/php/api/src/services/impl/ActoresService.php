<?php
namespace App\services\impl;

use App\factories\ActoresFactory;
use App\services\IActoresService;

class ActoresService implements IActoresService {

    public static function read() {
        return ActoresFactory::getDAO()::read();
    }
    public static function find($id) {
        return ActoresFactory::getDAO()::findById($id);
    }
    public static function insert($actor) {
        return ActoresFactory::getDAO()::create($actor);
    }
    public static function delete($id) {
        return ActoresFactory::getDAO()::delete($id);
    }
    public static function update($id,$actor){
        return ActoresFactory::getDAO()::update($id, $actor);
    }
}