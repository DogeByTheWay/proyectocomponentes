-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-01-2023 a las 15:05:07
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tiendacomponentes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(62) NOT NULL,
  `descripcion` varchar(525) NOT NULL,
  `precio` int(11) NOT NULL,
  `oferta` tinyint(1) DEFAULT NULL,
  `descuento` int(11) DEFAULT NULL,
  `categoria` int(11) NOT NULL,
  `subcategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `nombre`, `descripcion`, `precio`, `oferta`, `descuento`, `categoria`, `subcategoria`) VALUES
(1, 'Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6', 'Procesador Intel Core i5-1135G7 (4C / 8T, 2.4 / 4.2GHz, 8MB). Memoria RAM 8GB Soldered DDR4-3200. Almacenamiento 256GB SSD M.2 2242 PCIe 3.0x4 NVMe. Unidad óptica No dispone. Display 15.6 FHD (1920x1080) TN 250nits Anti-glare, 45% NTSC. Controlador gráfico Integrada Intel Iris Xe', 429, 1, 10, 1, 1),
(2, 'PC Racing Ordenador Gaming AMD Ryzen 7 5700G/16GB/1TB SSD', 'Torre: Hummer MC Pro es la versión optimizada de la clásica Hummer MC, el chasis más espectacular de todo el catálogo de Nox. Con un diseño atractivo y elegante en color blanco mantiene sus prestaciones, entre ellas su impresionante lateral acrílico, desde el que asomarse a su impactante interior, incorporando la novedosa tecnología ARGB. Fuente de alimentación: 550W 80 Plus Bronze. Procesador: AMD Ryzen 7 5700G 4.6GHz. Placa base: MSI / GIGABYTE / A520 / B450. Memoria RAM: 16GB DDR4 3200 MHz. Disco duro 1: 1TB SSD NVMe', 869, 1, 20, 1, 2),
(3, 'Placa base Asus TUF GAMING B450-PLUS II', 'CPU AMD AM4 Socket for 3rd/2nd/1st Gen AMD Ryzen™/2nd and 1st Gen AMD Ryzen™ Vega Graphics Processors. Chipset AMD B450. 4 x DIMM, Max. 128GB, DDR4. Dual Channel Memory Architecture ECC Memory support varies by CPU.', 119, 1, 15, 3, 5),
(4, 'AMD Ryzen 7 5800X 3.8GHz', '# de núcleos de CPU 8 # de hilos 16. Reloj base 3.8GHz. Reloj de aumento máx. Hasta 4.7GHz. Caché L2 total 4MB. Caché L3 total 32MB. CMOS TSMC 7nm. Versión de PCI Express PCIe 4.0. TDP/TDP predeterminado 105W. Velocidad máxima de memoria Up to 3200MHz. Tipo de memoria DDR4.', 161, 1, 25, 3, 6),
(5, 'Samsung 870 EVO SSD 2.5 500GB SATA3 Negro', 'Unidad de estado sólido. Factor de forma de disco SSD: 2.5. Interfaz: Serial ATA III. SDD, capacidad: 500 GB. Velocidad de lectura: 560 MB/s. Velocidad de escritura: 530 MB/s.', 43, NULL, NULL, 3, 7),
(6, 'ASUS GeForce RTX 2060 Dual OC EVO Edition 6GB GDDR6', 'Familia de procesadores de gráficos: NVIDIA. Procesador gráfico: GeForce RTX 2060. Máxima resolución: 7680 x 4320 Pixeles. CUDA: Si. Frecuencia del procesador: 1365 MHz. Núcleos CUDA: 1920. Aumento de la velocidad de reloj del procesador: 1755 MHz. Capacidad memoria de adaptador gráfico: 6 GB. Tipo de memoria de adaptador gráfico: GDDR6. Tipo de interfaz: PCI Express x16 3.0. Número de puertos HDMI: 2, DVI-D: 1. Versión HDMI: 2.0b.', 300, NULL, NULL, 3, 8),
(7, 'Team Group Delta White RGB DDR4 3200 PC4-25600 16GB 2x8GB CL16', 'RAM. Memoria interna: 16 GB. Tipo de memoria interna: DDR4. Velocidad de memoria del reloj: 3200 MHz. Componente para: PC/servidor. Forma de factor de memoria: 288-pin DIMM. Diseño de memoria (módulos x tamaño): 2 x 8 GB. Latencia CAS: 16. Sistema operativo Windows soportado: Si. Sistema operativo Linux soportado: Si', 56, NULL, NULL, 3, 9),
(8, 'Philips 27M1N3200VS/00 27 LED FullHD 165Hz', 'Diagonal de la pantalla: 68,6 cm (27). Brillo de la pantalla (típico): 250 cd / m². Resolución de la pantalla: 1920 x 1080 Pixeles. Tiempo de respuesta: 4 ms. Superficie de la pantalla: Mate. Relación de aspecto: 16:9. Razón de contraste (típica): 3000:1. Máxima velocidad de actualización: 165 Hz. Cobertura sRGB (típica): 121,9%. Cobertura NTSC (típica): 101,5%. Cobertura Adobe RGB: 89,9%', 117, NULL, NULL, 4, 10),
(9, 'Xiaomi Mi Smart Compact Proyector 120\' FullHD 500 Lúmenes ANSI', 'Proyector Compatibilidad de tamaño de pantalla: 1016 - 5080 mm (40 - 200\'). Brillo de proyector: 500 lúmenes ANSI. Resolución original del proyector: 1080p (1920x1080). Enfoque: Auto. Cantidad de puertos USB 2.0: 1. Entrada de audio (L,R): 1. Número de puertos HDMI: 1. Wifi: Si. Bluetooth: Si. Versión de Bluetooth: 4.0 BLE', 359, NULL, NULL, 4, 11),
(10, 'Xiaomi TV P1E 43\' LED UltraHD 4K HDR10', 'Diagonal de la pantalla: 109,2 cm (43\'). Tipo HD: 4K Ultra HD. Tecnología de visualización: LED. Relación de aspecto nativa: 16:9. Formato de vídeo soportado: 1080p,1440p,2160p. Brillo de pantalla: 270 cd/m². Frecuencia nativa de refresco: 60 Hz', 199, NULL, NULL, 4, 12),
(11, 'Canon Selphy CP1300 Impresora Portátil Color WiFi Negra', 'Pantalla incorporada: Si. Pantalla: LCD. Sistema operativo Windows soportado: Si. Sistema operativo MAC soportado: Si. Otros sistemas operativos soportados: Android,iOS. Wifi: Si. Puerto USB: Si. Impresión directa: Si. Conector USB: Mini-USB B.', 69, NULL, NULL, 4, 13),
(12, 'HyperX Quadcast S Micrófono RGB Condensador USB Autónomo', 'Sensibilidad de micrófono: -36 dB. Micrófono, distorsión armónica total (THD): 0,05%. Micrófono, impedancia de salida: 32 Ohmios. Micrófono, relación señal/ruido: 90 dB. Tipo de dirección de micrófono: Omnidireccional. Conector USB: USB Tipo C', 98, NULL, NULL, 4, 14),
(13, 'Bose Companion 2 Series III Altavoces Multimedia Negro', 'Tipo de interfaz de altavoz: RCA. Auriculares: 3,5 mm. Corriente de salida de adaptador AC: 1,2 A. Corriente: 0,6 A. Voltaje de entrada DC: 12 V. Canales de salida de audio: 2.0 canales. Amplificador: Integrado.', 88, NULL, NULL, 4, 15),
(14, 'Samsung MUF-256AB/EU 256GB USB 3.1', 'Lector de huella digital: No. Funciones de protección: Resistente a golpes, Resistente a la temperatura, Resistente al agua. Capacidad: 256 GB. Interfaz del dispositivo: USB tipo A. Versión USB: 3.1 (3.1 Gen 1). Velocidad de lectura (USB 3.0 (3.1 Gen 1)): 200 MB/s. Conectar y usar (Plug and Play): Si', 35, NULL, NULL, 2, 3),
(15, 'Disco Duro Externo Toshiba Canvio Basics 2.5\' 1TB USB 3.0', 'Capacidad de disco duro: 1000 GB. Conexión USB: Si. Tecnología Thunderbolt (Rayo): No. Versión USB: 3.0 (3.2 Gen 1). Color del producto: Negro.', 39, NULL, NULL, 2, 4),
(16, 'Philips 27M1N3200VS/00 27 LED FullHD 165Hz', 'Diagonal de la pantalla: 68,6 cm (27). Brillo de la pantalla (típico): 250 cd / m². Resolución de la pantalla: 1920 x 1080 Pixeles. Tiempo de respuesta: 4 ms. Superficie de la pantalla: Mate. Relación de aspecto: 16:9. Razón de contraste (típica): 3000:1. Máxima velocidad de actualización: 165 Hz. Cobertura sRGB (típica): 121,9%. Cobertura NTSC (típica): 101,5%. Cobertura Adobe RGB: 89,9%', 117, NULL, NULL, 4, 10),
(17, 'Xiaomi Mi Smart Compact Proyector 120\' FullHD 500 Lúmenes ANSI', 'Proyector Compatibilidad de tamaño de pantalla: 1016 - 5080 mm (40 - 200\'). Brillo de proyector: 500 lúmenes ANSI. Resolución original del proyector: 1080p (1920x1080). Enfoque: Auto. Cantidad de puertos USB 2.0: 1. Entrada de audio (L,R): 1. Número de puertos HDMI: 1. Wifi: Si. Bluetooth: Si. Versión de Bluetooth: 4.0 BLE', 359, NULL, NULL, 4, 11),
(18, 'Xiaomi TV P1E 43\' LED UltraHD 4K HDR10', 'Diagonal de la pantalla: 109,2 cm (43\'). Tipo HD: 4K Ultra HD. Tecnología de visualización: LED. Relación de aspecto nativa: 16:9. Formato de vídeo soportado: 1080p,1440p,2160p. Brillo de pantalla: 270 cd/m². Frecuencia nativa de refresco: 60 Hz', 199, NULL, NULL, 4, 12),
(19, 'Canon Selphy CP1300 Impresora Portátil Color WiFi Negra', 'Pantalla incorporada: Si. Pantalla: LCD. Sistema operativo Windows soportado: Si. Sistema operativo MAC soportado: Si. Otros sistemas operativos soportados: Android,iOS. Wifi: Si. Puerto USB: Si. Impresión directa: Si. Conector USB: Mini-USB B.', 69, NULL, NULL, 4, 13),
(20, 'HyperX Quadcast S Micrófono RGB Condensador USB Autónomo', 'Sensibilidad de micrófono: -36 dB. Micrófono, distorsión armónica total (THD): 0,05%. Micrófono, impedancia de salida: 32 Ohmios. Micrófono, relación señal/ruido: 90 dB. Tipo de dirección de micrófono: Omnidireccional. Conector USB: USB Tipo C', 98, NULL, NULL, 4, 14),
(21, 'Bose Companion 2 Series III Altavoces Multimedia Negro', 'Tipo de interfaz de altavoz: RCA. Auriculares: 3,5 mm. Corriente de salida de adaptador AC: 1,2 A. Corriente: 0,6 A. Voltaje de entrada DC: 12 V. Canales de salida de audio: 2.0 canales. Amplificador: Integrado.', 88, NULL, NULL, 4, 15),
(22, 'Philips 27M1N3200VS/00 27 LED FullHD 165Hz', 'Diagonal de la pantalla: 68,6 cm (27). Brillo de la pantalla (típico): 250 cd / m². Resolución de la pantalla: 1920 x 1080 Pixeles. Tiempo de respuesta: 4 ms. Superficie de la pantalla: Mate. Relación de aspecto: 16:9. Razón de contraste (típica): 3000:1. Máxima velocidad de actualización: 165 Hz. Cobertura sRGB (típica): 121,9%. Cobertura NTSC (típica): 101,5%. Cobertura Adobe RGB: 89,9%', 117, NULL, NULL, 4, 10),
(23, 'Xiaomi Mi Smart Compact Proyector 120\' FullHD 500 Lúmenes ANSI', 'Proyector Compatibilidad de tamaño de pantalla: 1016 - 5080 mm (40 - 200\'). Brillo de proyector: 500 lúmenes ANSI. Resolución original del proyector: 1080p (1920x1080). Enfoque: Auto. Cantidad de puertos USB 2.0: 1. Entrada de audio (L,R): 1. Número de puertos HDMI: 1. Wifi: Si. Bluetooth: Si. Versión de Bluetooth: 4.0 BLE', 359, NULL, NULL, 4, 11),
(24, 'Xiaomi TV P1E 43\' LED UltraHD 4K HDR10', 'Diagonal de la pantalla: 109,2 cm (43\'). Tipo HD: 4K Ultra HD. Tecnología de visualización: LED. Relación de aspecto nativa: 16:9. Formato de vídeo soportado: 1080p,1440p,2160p. Brillo de pantalla: 270 cd/m². Frecuencia nativa de refresco: 60 Hz', 199, NULL, NULL, 4, 12),
(25, 'Canon Selphy CP1300 Impresora Portátil Color WiFi Negra', 'Pantalla incorporada: Si. Pantalla: LCD. Sistema operativo Windows soportado: Si. Sistema operativo MAC soportado: Si. Otros sistemas operativos soportados: Android,iOS. Wifi: Si. Puerto USB: Si. Impresión directa: Si. Conector USB: Mini-USB B.', 69, NULL, NULL, 4, 13),
(26, 'HyperX Quadcast S Micrófono RGB Condensador USB Autónomo', 'Sensibilidad de micrófono: -36 dB. Micrófono, distorsión armónica total (THD): 0,05%. Micrófono, impedancia de salida: 32 Ohmios. Micrófono, relación señal/ruido: 90 dB. Tipo de dirección de micrófono: Omnidireccional. Conector USB: USB Tipo C', 98, NULL, NULL, 4, 14),
(27, 'Bose Companion 2 Series III Altavoces Multimedia Negro', 'Tipo de interfaz de altavoz: RCA. Auriculares: 3,5 mm. Corriente de salida de adaptador AC: 1,2 A. Corriente: 0,6 A. Voltaje de entrada DC: 12 V. Canales de salida de audio: 2.0 canales. Amplificador: Integrado.', 88, NULL, NULL, 4, 15),
(28, 'Philips 27M1N3200VS/00 27 LED FullHD 165Hz', 'Diagonal de la pantalla: 68,6 cm (27). Brillo de la pantalla (típico): 250 cd / m². Resolución de la pantalla: 1920 x 1080 Pixeles. Tiempo de respuesta: 4 ms. Superficie de la pantalla: Mate. Relación de aspecto: 16:9. Razón de contraste (típica): 3000:1. Máxima velocidad de actualización: 165 Hz. Cobertura sRGB (típica): 121,9%. Cobertura NTSC (típica): 101,5%. Cobertura Adobe RGB: 89,9%', 117, NULL, NULL, 4, 10),
(29, 'Xiaomi Mi Smart Compact Proyector 120\' FullHD 500 Lúmenes ANSI', 'Proyector Compatibilidad de tamaño de pantalla: 1016 - 5080 mm (40 - 200\'). Brillo de proyector: 500 lúmenes ANSI. Resolución original del proyector: 1080p (1920x1080). Enfoque: Auto. Cantidad de puertos USB 2.0: 1. Entrada de audio (L,R): 1. Número de puertos HDMI: 1. Wifi: Si. Bluetooth: Si. Versión de Bluetooth: 4.0 BLE', 359, NULL, NULL, 4, 11),
(30, 'Xiaomi TV P1E 43\' LED UltraHD 4K HDR10', 'Diagonal de la pantalla: 109,2 cm (43\'). Tipo HD: 4K Ultra HD. Tecnología de visualización: LED. Relación de aspecto nativa: 16:9. Formato de vídeo soportado: 1080p,1440p,2160p. Brillo de pantalla: 270 cd/m². Frecuencia nativa de refresco: 60 Hz', 199, NULL, NULL, 4, 12),
(31, 'Canon Selphy CP1300 Impresora Portátil Color WiFi Negra', 'Pantalla incorporada: Si. Pantalla: LCD. Sistema operativo Windows soportado: Si. Sistema operativo MAC soportado: Si. Otros sistemas operativos soportados: Android,iOS. Wifi: Si. Puerto USB: Si. Impresión directa: Si. Conector USB: Mini-USB B.', 69, NULL, NULL, 4, 13),
(32, 'HyperX Quadcast S Micrófono RGB Condensador USB Autónomo', 'Sensibilidad de micrófono: -36 dB. Micrófono, distorsión armónica total (THD): 0,05%. Micrófono, impedancia de salida: 32 Ohmios. Micrófono, relación señal/ruido: 90 dB. Tipo de dirección de micrófono: Omnidireccional. Conector USB: USB Tipo C', 98, NULL, NULL, 4, 14),
(33, 'Bose Companion 2 Series III Altavoces Multimedia Negro', 'Tipo de interfaz de altavoz: RCA. Auriculares: 3,5 mm. Corriente de salida de adaptador AC: 1,2 A. Corriente: 0,6 A. Voltaje de entrada DC: 12 V. Canales de salida de audio: 2.0 canales. Amplificador: Integrado.', 88, NULL, NULL, 4, 15),
(34, 'Philips 27M1N3200VS/00 27 LED FullHD 165Hz', 'Diagonal de la pantalla: 68,6 cm (27). Brillo de la pantalla (típico): 250 cd / m². Resolución de la pantalla: 1920 x 1080 Pixeles. Tiempo de respuesta: 4 ms. Superficie de la pantalla: Mate. Relación de aspecto: 16:9. Razón de contraste (típica): 3000:1. Máxima velocidad de actualización: 165 Hz. Cobertura sRGB (típica): 121,9%. Cobertura NTSC (típica): 101,5%. Cobertura Adobe RGB: 89,9%', 117, NULL, NULL, 4, 10),
(35, 'Xiaomi Mi Smart Compact Proyector 120\' FullHD 500 Lúmenes ANSI', 'Proyector Compatibilidad de tamaño de pantalla: 1016 - 5080 mm (40 - 200\'). Brillo de proyector: 500 lúmenes ANSI. Resolución original del proyector: 1080p (1920x1080). Enfoque: Auto. Cantidad de puertos USB 2.0: 1. Entrada de audio (L,R): 1. Número de puertos HDMI: 1. Wifi: Si. Bluetooth: Si. Versión de Bluetooth: 4.0 BLE', 359, NULL, NULL, 4, 11),
(36, 'Xiaomi TV P1E 43\' LED UltraHD 4K HDR10', 'Diagonal de la pantalla: 109,2 cm (43\'). Tipo HD: 4K Ultra HD. Tecnología de visualización: LED. Relación de aspecto nativa: 16:9. Formato de vídeo soportado: 1080p,1440p,2160p. Brillo de pantalla: 270 cd/m². Frecuencia nativa de refresco: 60 Hz', 199, NULL, NULL, 4, 12),
(37, 'Canon Selphy CP1300 Impresora Portátil Color WiFi Negra', 'Pantalla incorporada: Si. Pantalla: LCD. Sistema operativo Windows soportado: Si. Sistema operativo MAC soportado: Si. Otros sistemas operativos soportados: Android,iOS. Wifi: Si. Puerto USB: Si. Impresión directa: Si. Conector USB: Mini-USB B.', 69, NULL, NULL, 4, 13),
(38, 'HyperX Quadcast S Micrófono RGB Condensador USB Autónomo', 'Sensibilidad de micrófono: -36 dB. Micrófono, distorsión armónica total (THD): 0,05%. Micrófono, impedancia de salida: 32 Ohmios. Micrófono, relación señal/ruido: 90 dB. Tipo de dirección de micrófono: Omnidireccional. Conector USB: USB Tipo C', 98, NULL, NULL, 4, 14),
(39, 'Bose Companion 2 Series III Altavoces Multimedia Negro', 'Tipo de interfaz de altavoz: RCA. Auriculares: 3,5 mm. Corriente de salida de adaptador AC: 1,2 A. Corriente: 0,6 A. Voltaje de entrada DC: 12 V. Canales de salida de audio: 2.0 canales. Amplificador: Integrado.', 88, NULL, NULL, 4, 15),
(40, 'Philips 27M1N3200VS/00 27 LED FullHD 165Hz', 'Diagonal de la pantalla: 68,6 cm (27). Brillo de la pantalla (típico): 250 cd / m². Resolución de la pantalla: 1920 x 1080 Pixeles. Tiempo de respuesta: 4 ms. Superficie de la pantalla: Mate. Relación de aspecto: 16:9. Razón de contraste (típica): 3000:1. Máxima velocidad de actualización: 165 Hz. Cobertura sRGB (típica): 121,9%. Cobertura NTSC (típica): 101,5%. Cobertura Adobe RGB: 89,9%', 117, NULL, NULL, 4, 10),
(41, 'Xiaomi Mi Smart Compact Proyector 120\' FullHD 500 Lúmenes ANSI', 'Proyector Compatibilidad de tamaño de pantalla: 1016 - 5080 mm (40 - 200\'). Brillo de proyector: 500 lúmenes ANSI. Resolución original del proyector: 1080p (1920x1080). Enfoque: Auto. Cantidad de puertos USB 2.0: 1. Entrada de audio (L,R): 1. Número de puertos HDMI: 1. Wifi: Si. Bluetooth: Si. Versión de Bluetooth: 4.0 BLE', 359, NULL, NULL, 4, 11),
(42, 'Xiaomi TV P1E 43\' LED UltraHD 4K HDR10', 'Diagonal de la pantalla: 109,2 cm (43\'). Tipo HD: 4K Ultra HD. Tecnología de visualización: LED. Relación de aspecto nativa: 16:9. Formato de vídeo soportado: 1080p,1440p,2160p. Brillo de pantalla: 270 cd/m². Frecuencia nativa de refresco: 60 Hz', 199, NULL, NULL, 4, 12),
(43, 'Canon Selphy CP1300 Impresora Portátil Color WiFi Negra', 'Pantalla incorporada: Si. Pantalla: LCD. Sistema operativo Windows soportado: Si. Sistema operativo MAC soportado: Si. Otros sistemas operativos soportados: Android,iOS. Wifi: Si. Puerto USB: Si. Impresión directa: Si. Conector USB: Mini-USB B.', 69, NULL, NULL, 4, 13),
(44, 'HyperX Quadcast S Micrófono RGB Condensador USB Autónomo', 'Sensibilidad de micrófono: -36 dB. Micrófono, distorsión armónica total (THD): 0,05%. Micrófono, impedancia de salida: 32 Ohmios. Micrófono, relación señal/ruido: 90 dB. Tipo de dirección de micrófono: Omnidireccional. Conector USB: USB Tipo C', 98, NULL, NULL, 4, 14),
(45, 'Bose Companion 2 Series III Altavoces Multimedia Negro', 'Tipo de interfaz de altavoz: RCA. Auriculares: 3,5 mm. Corriente de salida de adaptador AC: 1,2 A. Corriente: 0,6 A. Voltaje de entrada DC: 12 V. Canales de salida de audio: 2.0 canales. Amplificador: Integrado.', 88, NULL, NULL, 4, 15),
(46, 'Philips 27M1N3200VS/00 27 LED FullHD 165Hz', 'Diagonal de la pantalla: 68,6 cm (27). Brillo de la pantalla (típico): 250 cd / m². Resolución de la pantalla: 1920 x 1080 Pixeles. Tiempo de respuesta: 4 ms. Superficie de la pantalla: Mate. Relación de aspecto: 16:9. Razón de contraste (típica): 3000:1. Máxima velocidad de actualización: 165 Hz. Cobertura sRGB (típica): 121,9%. Cobertura NTSC (típica): 101,5%. Cobertura Adobe RGB: 89,9%', 117, NULL, NULL, 4, 10),
(47, 'Xiaomi Mi Smart Compact Proyector 120\' FullHD 500 Lúmenes ANSI', 'Proyector Compatibilidad de tamaño de pantalla: 1016 - 5080 mm (40 - 200\'). Brillo de proyector: 500 lúmenes ANSI. Resolución original del proyector: 1080p (1920x1080). Enfoque: Auto. Cantidad de puertos USB 2.0: 1. Entrada de audio (L,R): 1. Número de puertos HDMI: 1. Wifi: Si. Bluetooth: Si. Versión de Bluetooth: 4.0 BLE', 359, NULL, NULL, 4, 11),
(48, 'Xiaomi TV P1E 43\' LED UltraHD 4K HDR10', 'Diagonal de la pantalla: 109,2 cm (43\'). Tipo HD: 4K Ultra HD. Tecnología de visualización: LED. Relación de aspecto nativa: 16:9. Formato de vídeo soportado: 1080p,1440p,2160p. Brillo de pantalla: 270 cd/m². Frecuencia nativa de refresco: 60 Hz', 199, NULL, NULL, 4, 12),
(49, 'Canon Selphy CP1300 Impresora Portátil Color WiFi Negra', 'Pantalla incorporada: Si. Pantalla: LCD. Sistema operativo Windows soportado: Si. Sistema operativo MAC soportado: Si. Otros sistemas operativos soportados: Android,iOS. Wifi: Si. Puerto USB: Si. Impresión directa: Si. Conector USB: Mini-USB B.', 69, NULL, NULL, 4, 13),
(50, 'HyperX Quadcast S Micrófono RGB Condensador USB Autónomo', 'Sensibilidad de micrófono: -36 dB. Micrófono, distorsión armónica total (THD): 0,05%. Micrófono, impedancia de salida: 32 Ohmios. Micrófono, relación señal/ruido: 90 dB. Tipo de dirección de micrófono: Omnidireccional. Conector USB: USB Tipo C', 98, NULL, NULL, 4, 14),
(51, 'Bose Companion 2 Series III Altavoces Multimedia Negro', 'Tipo de interfaz de altavoz: RCA. Auriculares: 3,5 mm. Corriente de salida de adaptador AC: 1,2 A. Corriente: 0,6 A. Voltaje de entrada DC: 12 V. Canales de salida de audio: 2.0 canales. Amplificador: Integrado.', 88, NULL, NULL, 4, 15),
(52, 'Philips 27M1N3200VS/00 27 LED FullHD 165Hz', 'Diagonal de la pantalla: 68,6 cm (27). Brillo de la pantalla (típico): 250 cd / m². Resolución de la pantalla: 1920 x 1080 Pixeles. Tiempo de respuesta: 4 ms. Superficie de la pantalla: Mate. Relación de aspecto: 16:9. Razón de contraste (típica): 3000:1. Máxima velocidad de actualización: 165 Hz. Cobertura sRGB (típica): 121,9%. Cobertura NTSC (típica): 101,5%. Cobertura Adobe RGB: 89,9%', 117, NULL, NULL, 4, 10),
(53, 'Xiaomi Mi Smart Compact Proyector 120\' FullHD 500 Lúmenes ANSI', 'Proyector Compatibilidad de tamaño de pantalla: 1016 - 5080 mm (40 - 200\'). Brillo de proyector: 500 lúmenes ANSI. Resolución original del proyector: 1080p (1920x1080). Enfoque: Auto. Cantidad de puertos USB 2.0: 1. Entrada de audio (L,R): 1. Número de puertos HDMI: 1. Wifi: Si. Bluetooth: Si. Versión de Bluetooth: 4.0 BLE', 359, NULL, NULL, 4, 11),
(54, 'Xiaomi TV P1E 43\' LED UltraHD 4K HDR10', 'Diagonal de la pantalla: 109,2 cm (43\'). Tipo HD: 4K Ultra HD. Tecnología de visualización: LED. Relación de aspecto nativa: 16:9. Formato de vídeo soportado: 1080p,1440p,2160p. Brillo de pantalla: 270 cd/m². Frecuencia nativa de refresco: 60 Hz', 199, NULL, NULL, 4, 12),
(55, 'Canon Selphy CP1300 Impresora Portátil Color WiFi Negra', 'Pantalla incorporada: Si. Pantalla: LCD. Sistema operativo Windows soportado: Si. Sistema operativo MAC soportado: Si. Otros sistemas operativos soportados: Android,iOS. Wifi: Si. Puerto USB: Si. Impresión directa: Si. Conector USB: Mini-USB B.', 69, NULL, NULL, 4, 13),
(56, 'HyperX Quadcast S Micrófono RGB Condensador USB Autónomo', 'Sensibilidad de micrófono: -36 dB. Micrófono, distorsión armónica total (THD): 0,05%. Micrófono, impedancia de salida: 32 Ohmios. Micrófono, relación señal/ruido: 90 dB. Tipo de dirección de micrófono: Omnidireccional. Conector USB: USB Tipo C', 98, NULL, NULL, 4, 14),
(57, 'Bose Companion 2 Series III Altavoces Multimedia Negro', 'Tipo de interfaz de altavoz: RCA. Auriculares: 3,5 mm. Corriente de salida de adaptador AC: 1,2 A. Corriente: 0,6 A. Voltaje de entrada DC: 12 V. Canales de salida de audio: 2.0 canales. Amplificador: Integrado.', 88, NULL, NULL, 4, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carritos`
--

CREATE TABLE `carritos` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `estado` varchar(6) NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carritos`
--

INSERT INTO `carritos` (`id`, `idUsuario`, `estado`, `activo`) VALUES
(1, 1, 'pagado', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

create table `categorias`(
`id` int auto_increment,
`nombre` varchar(40),
 primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias`(`id`,`nombre`) VALUES 
(null,'Ordenadores'),
(null,'DiscosDuros'),
(null,'Componentes'),
(null,'Audio,Video');
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `idCarrito` int(11) NOT NULL,
  `idArticulo` int(11) NOT NULL,
  `unidades` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `idCarrito`, `idArticulo`, `unidades`) VALUES
(1, 1, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategorias`
--

CREATE TABLE `subcategorias` (
  `id` int(11) auto_increment,
  `nombre` varchar(18) NOT NULL,
  `categoria` int(11) NOT NULL,
  primary key (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `subcategorias`
--
INSERT INTO `subcategorias` (`id`, `nombre`, `categoria`) VALUES
(NULL, 'Portatiles', 1),
(NULL, 'PC', 1),
(NULL, 'Memorias USB', 2),
(NULL, 'Disco duro externo', 2),
(NULL, 'Placas base', 3),
(NULL, 'Procesador', 3),
(NULL, 'Discos Duros', 3),
(NULL, 'Tarjetas gráficas', 3),
(NULL, 'RAM', 3),
(NULL, 'Monitores', 4),
(NULL, 'Proyectores', 4),
(NULL, 'TV', 4),
(NULL, 'Impresoras', 4),
(NULL, 'Micrófonos', 4),
(NULL, 'Altavoces', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `token`
--

CREATE TABLE `token` (
  `idUsuario` bit(1) NOT NULL,
  `token` varchar(94) NOT NULL,
  `expiraEn` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `token`
--

INSERT INTO `token` (`idUsuario`, `token`, `expiraEn`) VALUES
(b'1', '$2y$05$6l.NBjfHUr86U6SgGdr6duM.ATx7PbTNodhKWWrCN8dP.ZtvY6EmG', 1674407446);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tokenrefresco`
--

CREATE TABLE `tokenrefresco` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `token` varchar(75) NOT NULL,
  `expiraEn` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tokenrefresco`
--

INSERT INTO `tokenrefresco` (`id`, `idUsuario`, `token`, `expiraEn`, `activo`) VALUES
(1, 1, 'asdfasdfasdfasdfasdfasdfasdfsa23345asfasdfasdfasfasfdasdfasfdasfdasfasfdasf', 121212122, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(17) NOT NULL,
  `password` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `password`) VALUES
(1, 'mario@gmail.com', '$2y$10$cH3RXXH.MnWz2VRMOF5lG.F0tKEYNcdOAQnhZNOREGRCnkOjWK1pa'),
(2, 'wendy@gmail.com', '$2y$10$cH3RXXH.MnWz2VRMOF5lG.F0tKEYNcdOAQnhZNOREGRCnkOjWK1pa'),
(3, 'esteban@gmail.com', '$2y$10$cH3RXXH.MnWz2VRMOF5lG.F0tKEYNcdOAQnhZNOREGRCnkOjWK1pa'),
(4, 'pablo@gmail.com', '$2y$10$cH3RXXH.MnWz2VRMOF5lG.F0tKEYNcdOAQnhZNOREGRCnkOjWK1pa');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carritos`
--
ALTER TABLE `carritos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias`
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `subcategorias`
--


--
-- Indices de la tabla `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `tokenrefresco`
--
ALTER TABLE `tokenrefresco`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carritos`
--
ALTER TABLE `carritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tokenrefresco`
--
ALTER TABLE `tokenrefresco`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
