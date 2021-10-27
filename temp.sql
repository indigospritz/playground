-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2021 at 12:52 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `temp`
--

-- --------------------------------------------------------

--
-- Table structure for table `challenges`
--

CREATE TABLE `challenges` (
  `challenge_id` int(11) NOT NULL,
  `hacker_id` int(11) NOT NULL,
  `difficulty_level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `challenges`
--

INSERT INTO `challenges` (`challenge_id`, `hacker_id`, `difficulty_level`) VALUES
(4810, 77726, 4),
(21089, 27205, 1),
(36566, 5580, 7),
(66730, 52243, 6),
(71055, 52243, 2);

-- --------------------------------------------------------

--
-- Table structure for table `difficulty`
--

CREATE TABLE `difficulty` (
  `difficulty_level` int(11) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `difficulty`
--

INSERT INTO `difficulty` (`difficulty_level`, `score`) VALUES
(1, 20),
(2, 30),
(3, 40),
(4, 60),
(5, 80),
(6, 100),
(7, 120);

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `grade` int(11) NOT NULL,
  `min_mark` int(11) NOT NULL,
  `max_mark` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`grade`, `min_mark`, `max_mark`) VALUES
(1, 0, 9),
(2, 10, 19),
(3, 20, 29),
(4, 30, 39),
(5, 40, 49),
(6, 50, 59),
(7, 60, 69),
(8, 70, 79),
(9, 80, 89),
(10, 90, 100);

-- --------------------------------------------------------

--
-- Table structure for table `hackers`
--

CREATE TABLE `hackers` (
  `hacker_id` int(11) NOT NULL,
  `name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hackers`
--

INSERT INTO `hackers` (`hacker_id`, `name`) VALUES
(5580, 'Rose'),
(8439, 'Angela'),
(27205, 'Frank'),
(52243, 'Patrick'),
(52348, 'Lisa'),
(57645, 'Kimberly'),
(77726, 'Bonnie'),
(83082, 'Michael'),
(86870, 'Todd'),
(90411, 'Joe');

-- --------------------------------------------------------

--
-- Table structure for table `occupations`
--

CREATE TABLE `occupations` (
  `name` varchar(10) NOT NULL,
  `occupation` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `occupations`
--

INSERT INTO `occupations` (`name`, `occupation`) VALUES
('Samantha', 'Doctor'),
('Julia', 'Actor'),
('Maria', 'Actor'),
('Meera', 'Singer'),
('Ashely', 'Professor'),
('Ketty', 'Professor'),
('Christeen', 'Professor'),
('Jane', 'Actor'),
('Jenny', 'Actor'),
('Priya', 'Singer');

-- --------------------------------------------------------

--
-- Table structure for table `statio`
--

CREATE TABLE `statio` (
  `id` int(11) NOT NULL,
  `city` varchar(10) NOT NULL,
  `state` varchar(10) NOT NULL,
  `lat_n` int(11) NOT NULL,
  `IDEK` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `statio`
--

INSERT INTO `statio` (`id`, `city`, `state`, `lat_n`, `IDEK`) VALUES
(1, 'Osaka', 'Nagoya', 12, ''),
(2, 'Onigashima', 'Hokaido', 31, ''),
(3, 'Horikuru', 'Shinkansen', 20, ''),
(4, 'Joetsu', 'Yamagata', 12, '');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(10) NOT NULL,
  `marks` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `marks`) VALUES
(1, 'Julia', 88),
(2, 'Samantha', 68),
(3, 'Maria', 99),
(4, 'Scarlet', 78),
(5, 'Ashley', 63),
(6, 'Jane', 81);

-- --------------------------------------------------------

--
-- Table structure for table `submissions`
--

CREATE TABLE `submissions` (
  `submission_id` int(11) NOT NULL,
  `hacker_id` int(11) NOT NULL,
  `challenge_id` int(11) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `submissions`
--

INSERT INTO `submissions` (`submission_id`, `hacker_id`, `challenge_id`, `score`) VALUES
(68628, 77726, 36566, 30),
(65300, 77726, 21089, 10),
(40326, 52243, 36566, 77),
(8941, 27205, 4810, 4),
(83554, 77726, 66730, 30),
(43353, 52243, 66730, 0),
(55385, 52348, 71055, 20),
(39784, 27205, 71055, 23),
(94613, 86870, 71055, 30),
(45788, 52348, 36566, 0),
(93058, 86870, 36566, 30),
(7344, 8439, 66730, 92),
(2721, 8439, 4810, 36),
(523, 5580, 71055, 4),
(49105, 52348, 66730, 0),
(55877, 57645, 66730, 80),
(38355, 27205, 66730, 35),
(3924, 8439, 36566, 80),
(97397, 90411, 66730, 100),
(84162, 83082, 4810, 40),
(97431, 90411, 71055, 30);

-- --------------------------------------------------------

--
-- Table structure for table `users_transaction`
--

CREATE TABLE `users_transaction` (
  `id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `old_balance` int(11) NOT NULL,
  `new_balance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_transaction`
--

INSERT INTO `users_transaction` (`id`, `user_id`, `old_balance`, `new_balance`) VALUES
(NULL, 3, 25, 50),
(NULL, 9, 54, 26),
(NULL, 1, 25, 27),
(NULL, 9, 12, 34),
(0, 2, 12, 2);

-- --------------------------------------------------------

--
-- Table structure for table `wand`
--

CREATE TABLE `wand` (
  `id` int(11) NOT NULL,
  `code` int(11) NOT NULL,
  `coins_needed` int(11) NOT NULL,
  `power` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wand`
--

INSERT INTO `wand` (`id`, `code`, `coins_needed`, `power`) VALUES
(1, 4, 3688, 8),
(2, 3, 9365, 3),
(3, 3, 7187, 10),
(4, 3, 734, 8),
(5, 1, 6020, 2),
(6, 2, 6773, 7),
(7, 3, 9873, 9),
(8, 3, 7721, 7),
(9, 1, 1647, 10),
(10, 4, 504, 5),
(11, 2, 7587, 5),
(12, 5, 9897, 10),
(13, 3, 4651, 8),
(14, 2, 5408, 1),
(15, 2, 6018, 7),
(16, 4, 7710, 5),
(17, 2, 8798, 7),
(18, 2, 3312, 3),
(19, 4, 7651, 6),
(20, 5, 5689, 3);

-- --------------------------------------------------------

--
-- Table structure for table `wand_property`
--

CREATE TABLE `wand_property` (
  `code` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `is_evil` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wand_property`
--

INSERT INTO `wand_property` (`code`, `age`, `is_evil`) VALUES
(1, 45, 0),
(2, 40, 0),
(3, 4, 1),
(4, 20, 0),
(5, 17, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`grade`);

--
-- Indexes for table `statio`
--
ALTER TABLE `statio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wand`
--
ALTER TABLE `wand`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `grades`
--
ALTER TABLE `grades`
  MODIFY `grade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `statio`
--
ALTER TABLE `statio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
