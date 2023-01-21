-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-01-2023 a las 16:07:51
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
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(100) NOT NULL,
  `usuario` varchar(120) NOT NULL,
  `password` varchar(300) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `loged` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `usuario`, `password`, `admin`, `loged`) VALUES
(1, 'coscada@gmail.com', '$2y$10$mzrE4J4NWdD0cAgjVyKdweFS9YGaNW4ETps.67Fx.AuX7Jhdfe.by', 0, 1),
(4, 'coscadillo@gmail.com', '$2y$10$lRELqavD8y/Z8QBk.HW4o.K715ywM3JGAk2dOfhkoCSwYnhg4wvpq', 0, 1),
(5, 'coscadete@gmail.com', '$2y$10$4W5f4ZiMC775m1qF2Cjru.55IHhRQg0L/ugLKs56W9m7zEPTqoskS', 0, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
