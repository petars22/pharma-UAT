-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2021 at 02:03 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pharma-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
CREATE TABLE `activities` (
  `id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indication_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_by` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `name`, `brand_id`, `indication_id`, `created_by`, `updated_by`) VALUES
('8ed32030-3192-11ec-842d-412c5751744b', 'Answers to question deadline', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'Administrator', 'Administrator');

-- --------------------------------------------------------

--
-- Table structure for table `activity_history`
--

DROP TABLE IF EXISTS `activity_history`;
CREATE TABLE `activity_history` (
  `id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_id` int(5) NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `activity_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `month` int(2) NOT NULL,
  `year` int(4) NOT NULL,
  `brand_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indication_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_by` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activity_history`
--

INSERT INTO `activity_history` (`id`, `country_id`, `note`, `activity_id`, `month`, `year`, `brand_id`, `indication_id`, `created_by`, `updated_by`) VALUES
('25907050-3007-11ec-acd6-adfe88a9612b', 42, 'asdasdsaddas', '1', 12, 2021, '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'Administrator', 'Administrator'),
('8f198a90-2eca-11ec-b969-1f19a5cc6385', 42, 'aaaaa', '1', 11, 2021, '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'Administrator', 'Administrator'),
('9c995970-3190-11ec-8367-a110a30fb13d', 42, 'ccccccccccc', '2', 10, 2021, '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'Administrator', 'Administrator'),
('db225870-2ecc-11ec-b969-1f19a5cc6385', 42, 'bbbbbb', '7', 10, 2021, '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'Administrator', 'Administrator');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `thumbnail`) VALUES
('4ea08b60-30de-11ec-a3bf-c72f74a07716', 'test brand', 'aaaaaa');

-- --------------------------------------------------------

--
-- Table structure for table `indications`
--

DROP TABLE IF EXISTS `indications`;
CREATE TABLE `indications` (
  `id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `indications`
--

INSERT INTO `indications` (`id`, `name`, `brand_id`) VALUES
('fee5db40-30ea-11ec-b6f9-638294b1396e', 'test indication', '4ea08b60-30de-11ec-a3bf-c72f74a07716');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `display_name`) VALUES
('', 'admin', 'admin123', 'danije.tkalcec@gmail.com', 'Administrator');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_history`
--
ALTER TABLE `activity_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `indications`
--
ALTER TABLE `indications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
