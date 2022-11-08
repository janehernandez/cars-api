-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for cars-api
CREATE DATABASE IF NOT EXISTS `cars-api` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `cars-api`;

-- Dumping structure for table cars-api.cars
DROP TABLE IF EXISTS `cars`;
CREATE TABLE IF NOT EXISTS `cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `make` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `year` int(4) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table cars-api.cars: ~8 rows (approximately)
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` (`id`, `make`, `model`, `year`, `created_at`, `updated_at`) VALUES
	(1, 'Mitsubishi', 'Adventure', 2015, '2022-11-07 22:39:31', '2022-11-09 00:27:00'),
	(2, 'Mercedes-Benz', 'A-Class', 2022, '2022-11-07 23:05:20', '2022-11-07 23:05:20'),
	(3, 'Tesla', 'Cybertruck', 2023, '2022-11-07 23:06:33', '2022-11-07 23:06:33'),
	(4, 'Tesla', 'Model 3', 2021, '2022-11-07 23:44:22', '2022-11-07 23:44:22'),
	(5, 'Toyota', 'Avalon Hybrid', 2021, '2022-11-08 00:13:11', '2022-11-08 00:13:11'),
	(6, 'Toyota', 'bZ4X', 2023, '2022-11-08 00:24:55', '2022-11-08 00:24:55'),
	(7, 'Toyota', 'Camry', 2021, '2022-11-08 00:26:30', '2022-11-08 00:26:30'),
	(8, 'Toyota', 'Camry', 2023, '2022-11-08 00:27:48', '2022-11-08 00:27:48'),
	(9, 'Toyota', 'Camry', 2022, '2022-11-08 00:29:22', '2022-11-08 00:29:22');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
