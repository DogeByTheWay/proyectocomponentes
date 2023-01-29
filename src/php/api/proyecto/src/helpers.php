<?php

define("BASE_DIR", dirname(__DIR__));

if (! function_exists('base_path')) {
    /**
     * Devuelve la ruta indicada desde la ruta raiz del proyecto.
     *
     * @param  string  $path
     * @return string
     */
    function base_path(string $path = ''): string {
        return BASE_DIR . "/" . ltrim($path, "/");
    }
}