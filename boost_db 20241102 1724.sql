﻿--
-- Script was generated by Devart dbForge Studio for MySQL, Version 6.3.358.0
-- Product home page: http://www.devart.com/dbforge/mysql/studio
-- Script date 11/2/2024 5:24:49 PM
-- Server version: 5.5.5-10.4.27-MariaDB
-- Client version: 4.1
--


-- 
-- Disable foreign keys
-- 
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

-- 
-- Set SQL mode
-- 
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 
-- Set character set the client will use to send SQL statements to the server
--
SET NAMES 'utf8';

-- 
-- Set default database
--
USE boost_db;

--
-- Definition for table category
--
DROP TABLE IF EXISTS category;
CREATE TABLE category (
  id INT(11) NOT NULL AUTO_INCREMENT,
  categ_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB
AUTO_INCREMENT = 3
AVG_ROW_LENGTH = 8192
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci
ROW_FORMAT = DYNAMIC;

--
-- Definition for table migrations
--
DROP TABLE IF EXISTS migrations;
CREATE TABLE migrations (
  id INT(11) NOT NULL AUTO_INCREMENT,
  timestamp BIGINT(20) NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB
AUTO_INCREMENT = 5
AVG_ROW_LENGTH = 5461
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci
ROW_FORMAT = DYNAMIC;

--
-- Definition for table users
--
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  roles VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB
AUTO_INCREMENT = 5
AVG_ROW_LENGTH = 5461
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci
ROW_FORMAT = DYNAMIC;

--
-- Definition for table product
--
DROP TABLE IF EXISTS product;
CREATE TABLE product (
  id INT(11) NOT NULL AUTO_INCREMENT,
  prod_name VARCHAR(255) NOT NULL,
  base_price INT(11) NOT NULL,
  userId INT(11) DEFAULT NULL,
  white_crewneck_price INT(11) NOT NULL,
  white_hoodie_price INT(11) NOT NULL,
  black_crewneck_price INT(11) NOT NULL,
  black_hoodie_price INT(11) NOT NULL,
  categoryId INT(11) DEFAULT NULL,
  color VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_329b8ae12068b23da547d3b4798 FOREIGN KEY (userId)
    REFERENCES users(id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT FK_ff0c0301a95e517153df97f6812 FOREIGN KEY (categoryId)
    REFERENCES category(id) ON DELETE NO ACTION ON UPDATE NO ACTION
)
ENGINE = INNODB
AUTO_INCREMENT = 11
AVG_ROW_LENGTH = 2048
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci
ROW_FORMAT = DYNAMIC;

-- 
-- Dumping data for table category
--
INSERT INTO category VALUES
(2, 'T-shirt');

-- 
-- Dumping data for table migrations
--
INSERT INTO migrations VALUES
(1, 1730447070637, 'NewMigrations1730447070637'),
(2, 1730482518270, 'Updated1730482518270'),
(3, 1730486941333, 'Updated21730486941333'),
(4, 1730490973474, 'Updated31730490973474');

-- 
-- Dumping data for table users
--
INSERT INTO users VALUES
(1, 'raghad', 'raghad@gmail.com', '1234', 'user'),
(3, 'raghad2', 'raghad2@gmail.com', '4321', 'admin'),
(4, 'raghad', 'raghad2@gmail.com', '14154', 'user');

-- 
-- Dumping data for table product
--
INSERT INTO product VALUES
(1, 'hoodi', 5000, NULL, 0, 0, 0, 0, NULL, '', ''),
(3, 'hoodi', 0, NULL, 0, 0, 0, 0, NULL, '', ''),
(4, 'hoodi', 0, 4, 0, 0, 0, 0, NULL, '', ''),
(5, 'hoodi', 5000, 3, 0, 0, 0, 0, NULL, '', ''),
(6, 'hoodi', 0, NULL, 0, 0, 0, 0, 2, '', ''),
(7, 'hoodi', 0, NULL, 0, 0, 0, 0, NULL, '', 'shirt'),
(8, 'hoodi', 5000, NULL, 0, 0, 0, 0, 2, '', ''),
(9, 'hoodi', 5000, NULL, 0, 0, 0, 1000, 2, '', ''),
(10, 'Long hoodi', 1000, NULL, 0, 1000, 0, 0, NULL, 'whtie', 'hoodi');

-- 
-- Restore previous SQL mode
-- 
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

-- 
-- Enable foreign keys
-- 
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;