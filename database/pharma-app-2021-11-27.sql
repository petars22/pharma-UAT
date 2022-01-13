-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2021 at 04:11 PM
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
  `order_index` int(3) NOT NULL,
  `created_by` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_by` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `name`, `brand_id`, `indication_id`, `order_index`, `created_by`, `updated_by`) VALUES
('764ed4c0-332f-11ec-9fcb-bb87ad734b67', 'Date for early advice', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 2, 'Administrator', 'Administrator'),
('83413150-332f-11ec-9fcb-bb87ad734b67', 'Date we need global', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 3, 'Administrator', 'Administrator'),
('8a01b550-332f-11ec-9fcb-bb87ad734b67', 'Last date we can get materials by (test)', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 4, 'Administrator', 'Administrator'),
('8ed32030-3192-11ec-842d-412c5751744b', 'Answers to question deadline', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 1, 'Administrator', 'Administrator'),
('a8f01ab0-332f-11ec-9fcb-bb87ad734b67', 'Decision (known internaly)', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 5, 'Administrator', 'Administrator'),
('babfe360-332f-11ec-9fcb-bb87ad734b67', 'Available date', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 6, 'Administrator', 'Administrator'),
('d01cca70-332f-11ec-9fcb-bb87ad734b67', 'Questions received', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 7, 'Administrator', 'Administrator'),
('db4d04a0-332f-11ec-9fcb-bb87ad734b67', 'Available for review', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 8, 'Administrator', 'Administrator');

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
('4a28e7b0-38ba-11ec-b408-dd38751e6b5e', 42, '', '8ed32030-3192-11ec-842d-412c5751744b', 3, 2022, '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'Administrator', 'Administrator'),
('8f198a90-2eca-11ec-b969-1f19a5cc6385', 42, 'aaaaa', '8ed32030-3192-11ec-842d-412c5751744b', 11, 2021, '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'Administrator', 'Administrator'),
('9c995970-3190-11ec-8367-a110a30fb13d', 42, 'ccccccccccc', '764ed4c0-332f-11ec-9fcb-bb87ad734b67', 10, 2021, '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'Administrator', 'Administrator'),
('c5e64ec0-38af-11ec-b408-dd38751e6b5e', 42, 'note 2022', '8ed32030-3192-11ec-842d-412c5751744b', 2, 2022, '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'Administrator', 'Administrator'),
('db225870-2ecc-11ec-b969-1f19a5cc6385', 42, 'bbbbbb', 'd01cca70-332f-11ec-9fcb-bb87ad734b67', 10, 2021, '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'Administrator', 'Administrator'),
('e6f23df0-38a4-11ec-a98a-d94a12e0ddf1', 42, 'note - refresh', '8ed32030-3192-11ec-842d-412c5751744b', 12, 2021, '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'Administrator', 'Administrator');

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
CREATE TABLE `answers` (
  `id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indication_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `question` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer_date` date NOT NULL,
  `sources` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `origin` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `similar_question` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_created` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `brand_id`, `indication_id`, `question`, `answer`, `answer_date`, `sources`, `origin`, `category`, `similar_question`, `created_by`, `date_created`) VALUES
('0ea952b0-4ad5-11ec-b18d-f7b63c3fadf0', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'question 1', 'answer 1', '2021-10-21', '[{\"name\":\"F_14_2_12_2b_os_mitt_c2 Primjer graf.rtf\",\"path\":\"F_14_2_12_2b_os_mitt_c2 Primjer graf_2021-10-21.rtf\"}]', '3', '-', '[{\"id\":\"db6defa0-4ad4-11ec-b18d-f7b63c3fadf0\",\"text\":\"question\"}]', 'Administrator', '2021-11-21'),
('4ff22b00-4af0-11ec-9960-5b91faffba04', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'aaaaa', 'bbbb', '2021-10-22', '[{\"name\":\"Knowledge repository (1).xlsx\",\"path\":\"Knowledge repository (1)_2021-10-21.xlsx\"}]', '8', '-', '[{\"id\":\"0ea952b0-4ad5-11ec-b18d-f7b63c3fadf0\",\"text\":\"question 1\"},{\"id\":\"db6defa0-4ad4-11ec-b18d-f7b63c3fadf0\",\"text\":\"question\"}]', 'Administrator', '2021-11-21'),
('db6defa0-4ad4-11ec-b18d-f7b63c3fadf0', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'question', 'answer', '2021-10-21', '[{\"name\":\"TFL podaci.docx\",\"path\":\"TFL podaci_2021-10-21.docx\"}]', '3', '-', '', 'Administrator', '2021-11-21');

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
('4ea08b60-30de-11ec-a3bf-c72f74a07716', 'test brand', 'data:image/gif;base64,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');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
CREATE TABLE `documents` (
  `id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indication_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `cohort` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `analysis_set` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `endpoint` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data_cutoff_date` date NOT NULL,
  `document` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_created` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `brand_id`, `indication_id`, `title`, `cohort`, `analysis_set`, `endpoint`, `data_cutoff_date`, `document`, `created_by`, `date_created`) VALUES
('8b0ba090-4f91-11ec-97f7-c18391e3264b', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', 'Figure 14.2.12.2b. Kaplan-Meier Plot of Overall Survival (Cohort 2: KT M-Z ) (mITT Analysis Set, N = 14)', 'Cohort 2', 'mITT', 'Overall Survival', '2021-10-27', '[{\"name\":\"F_14_2_12_2b_os_mitt_c2 Primjer graf.rtf\",\"path\":\"F_14_2_12_2b_os_mitt_c2 Primjer graf_2021-10-27.rtf\"}]', 'Administrator', '2021-11-27');

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
('ec995950-38bd-11ec-b408-dd38751e6b5e', 'test indication 2', '4ea08b60-30de-11ec-a3bf-c72f74a07716'),
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

-- --------------------------------------------------------

--
-- Table structure for table `warnings`
--

DROP TABLE IF EXISTS `warnings`;
CREATE TABLE `warnings` (
  `id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indication_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activity_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `warning` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_by` int(11) NOT NULL,
  `active` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `warnings`
--

INSERT INTO `warnings` (`id`, `brand_id`, `indication_id`, `activity_id`, `warning`, `created_by`, `updated_by`, `active`) VALUES
('e2518220-38a3-11ec-a98a-d94a12e0ddf1', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', '8ed32030-3192-11ec-842d-412c5751744b', 'test warning', 'Administrator', 0, 1),
('cc982dc0-38a4-11ec-a98a-d94a12e0ddf1', '4ea08b60-30de-11ec-a3bf-c72f74a07716', 'fee5db40-30ea-11ec-b6f9-638294b1396e', '764ed4c0-332f-11ec-9fcb-bb87ad734b67', 'test warning 2 - refresh', 'Administrator', 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `activity_history`
--
ALTER TABLE `activity_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
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
