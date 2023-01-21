<?php
namespace App\DAO;

use App\DTO\ActorDTO;

interface IActoresDAO {    

    public static function create(ActorDTO $actor): int;
    public static function read(): array;
    public static function findById(int $id): ActorDTO;
    public static function update(int $id, ActorDTO $actor): int;
    public static function delete(int $id): int;

}