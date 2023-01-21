-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2022 a las 22:27:40
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `movies`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actores`
--

CREATE TABLE `actores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(14) NOT NULL,
  `anyo` int(11) NOT NULL,
  `pais` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `actores`
--

INSERT INTO `actores` (`id`, `nombre`, `anyo`, `pais`) VALUES
(1, 'Marlon Brando', 1924, 'EEUU'),
(2, 'Al Pacino', 1940, 'EEUU'),
(3, 'Robert Duvall', 1931, 'EEUU'),
(4, 'James Caan', 1940, 'EEUU'),
(5, 'Diane Keaton', 1946, 'EEUU'),
(6, 'Robert De Niro', 1943, 'EEUU'),
(7, 'Kirk Douglas', 1916, 'EEUU'),
(8, 'Ralph Meeker', 1920, 'EEUU'),
(9, 'Adolphe Menjou', 1890, 'EEUU'),
(10, 'Jack Lemmon', 1925, 'EEUU'),
(11, 'Walter Matthau', 1920, 'EEUU'),
(12, 'Susan Saranpio', 1946, 'ALBA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(18) NOT NULL,
  `anyo` int(11) NOT NULL,
  `duracion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `titulo`, `anyo`, `duracion`) VALUES
(0, 'Supermario', 1976, 221),
(1, 'Supermario', 1976, 221),
(2, 'Supermario', 1976, 221),
(3, 'Senderos de gloria', 1957, 86),
(4, 'Primera plana', 1974, 105);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pelicula_actor`
--

CREATE TABLE `pelicula_actor` (
  `id_pelicula` int(11) NOT NULL,
  `id_actor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pelicula_actor`
--

INSERT INTO `pelicula_actor` (`id_pelicula`, `id_actor`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 2),
(2, 3),
(2, 5),
(2, 6),
(3, 7),
(3, 8),
(3, 9),
(4, 10),
(4, 11),
(4, 12);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actores`
--
ALTER TABLE `actores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actores`
--
ALTER TABLE `actores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
