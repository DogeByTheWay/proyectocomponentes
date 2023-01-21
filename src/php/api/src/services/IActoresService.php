<?php
namespace App\services;

use App\DTO\ActorDTO;

interface IActoresService {

    public static function read();
    public static function find($id);
    public static function insert($actor);
    public static function delete($id);
    public static function update($id, ActorDTO $actor);
}