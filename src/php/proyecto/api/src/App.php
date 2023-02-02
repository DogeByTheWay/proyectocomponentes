<?php

namespace App;

class App
{

    public function run(): void
    {
        include base_path('routes/api.php');       
    }

}