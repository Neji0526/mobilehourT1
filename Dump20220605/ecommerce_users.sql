CREATE DATABASE  IF NOT EXISTS `ecommerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecommerce`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `creation_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=143 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (125,'Max','Woollons','admin','maxwoollons','$2b$10$gGrKDZzeaqXyEPCPh20z/Ob7dLNrknZorZyrpc.CGCnVmVoFM69tO','2022-05-11 13:32:14'),(129,'asdasdasd','working2022','admin','maxwoollons@outlook.com','$2b$10$eFoztZghOIUreptEEanl6.NmhGlFZuqtEeVFsp1HrYA5/kUUpjs8e','2022-05-18 11:54:23'),(130,'asdasdjknasdjnasd','asjkdkjasdnjadnka','admin','asdasjdkadbjkasd','$2b$10$OaiLs16fAPOEAfVwxeajC.aXVS1EYJsUB.3831jU87LCK9nkk5G0y','2022-05-18 12:06:09'),(133,'&amp;^!*&amp;^*&amp;!@#','!&amp;*^&amp;*!&amp;^@*$!@','admin','asdasdqqqqqqq','$2b$10$rLU7hOnkg2SgFXyzGmnY/.6dX7EWWnSQflYXiONUpUL.xrczlIsh6','2022-05-18 12:14:47'),(134,'ASDBDHBJHASD','ASdbhsdbjhdhjbasd','admin','asdasdasd','$2b$10$wlUuHya9aK8YfiQjEePrP.lMBNVQ29B8sL6keJSOIy8gs9azmQQFW','2022-05-18 12:30:33'),(136,'pPOOPWPQopweopqpwoejqwe','eqwbhbsqbxhsqxbjqwbx','admin','qwdqwhbdqwhbdjhqwbdbhjqw','$2b$10$f51KL2epKkuEe7fqByP7Xe1zuvjQoZNqJsUSfgqcw.BIvujg8S2Ry','2022-05-18 12:31:27'),(137,'aksdbjhasdbhjas','asdjnasdhjjasdb','admin','dasdhjsbdjhasd','$2b$10$tqhXkX8GTwQ3Z0aZSTLeBOiSHMQeqCD5uz/3HDKNdHsAj9b8cQVFa','2022-05-18 12:33:49'),(138,'qwhdbqwdhbhjqwdbhjqwd','mqndqwdqwbda','admin','qwdnqwdbjkqwnqwd','$2b$10$KGlf0aU3ic58hU49O.BqGeYgFzQhUlT1hvqV5RLcVlqLOu.Tq7Idy','2022-05-18 12:35:20');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-05 13:34:24
