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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `feature_id` int DEFAULT NULL,
  `product_name` varchar(60) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `colour` varchar(45) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `creation_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(255) DEFAULT 'https://media.istockphoto.com/photos/mobile-phone-top-view-with-white-screen-picture-id1161116588?k=20&m=1161116588&s=612x612&w=0&h=NKv_O5xQecCHZic53onobxjqGfW7I-D-tBrzXaPbj_Q=',
  `soh` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `fk_products_features_idx` (`feature_id`),
  CONSTRAINT `fk_products_features` FOREIGN KEY (`feature_id`) REFERENCES `features` (`feature_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'IPhone42069',1300,'Green',2021,'2022-04-20 17:02:10','../static/images/iphone13.png',69),(2,1,'Samsung S22',2200,'Purple',2022,'2022-04-20 21:08:14','../static/images/s22.webp',10),(5,1,'IPhone 13',1300,'Green',2021,'2022-05-03 12:19:27','../static/images/iphone13.png',12),(6,1,'BorkenPhone',10,'Green',1900,'2022-05-03 12:19:27','https://media.istockphoto.com/photos/redhat-cowgirl-with-hat-smiling-on-phone-at-ranch-in-salt-lake-city-picture-id981853932',1),(7,1,'IPhone 10',1000,'Green',2021,'2022-05-03 12:19:28','../static/images/iphone13.png',12),(8,1,'Oppo 13',180,'Blue',2101,'2022-05-03 12:19:28','https://media.istockphoto.com/photos/young-man-holding-mobile-device-with-white-screen-picture-id1339292521',12),(9,1,'IPhone 13',1300,'Green',2021,'2022-05-03 12:19:28','../static/images/iphone13.png',12),(10,1,'IPhoneNokia 13',90,'Green',2100,'2022-05-03 12:19:28','https://media.istockphoto.com/photos/young-man-holding-isolated-smartphone-screen-picture-id1339293778',12),(11,1,'IPhone 13',1300,'Green',2099,'2022-05-03 12:19:30','../static/images/iphone13.png',12),(12,1,'Display Broken Phone',100,'Green',2021,'2022-05-03 12:19:30','../static/images/iphone13.png',12),(13,1,'IPhone 13',1300,'Green',2021,'2022-05-03 12:19:31','../static/images/iphone13.png',12),(14,1,'IPhone 13',1300,'Green',2021,'2022-05-03 12:19:31','../static/images/iphone13.png',12),(15,1,'IPhone 13',1300,'Green',2021,'2022-05-03 12:19:32','../static/images/iphone13.png',12),(19,1,'Nokia SHit',1231,'Orange',2004,'2022-06-02 10:46:01','https://thumbs.dreamstime.com/z/man-holding-cell-phone-happy-middle-aged-giving-thumb-up-52857617.jpg',123),(20,1,'Vivobook',123123,'Aqua',2018,'2022-06-02 10:48:42','https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.png',123),(21,1,'StolenBrokenPhoneAbbeyStinky',1000000,'White',2003,'2022-06-02 10:51:17','https://media.istockphoto.com/photos/mobile-phone-top-view-with-white-screen-picture-id1161116588?k=20&m=1161116588&s=612x612&w=0&h=NKv_O5xQecCHZic53onobxjqGfW7I-D-tBrzXaPbj_Q=',1),(22,1,'AbbeyMeanie',1000000,'White',2003,'2022-06-02 10:53:08','https://media.istockphoto.com/photos/mobile-phone-top-view-with-white-screen-picture-id1161116588?k=20&m=1161116588&s=612x612&w=0&h=NKv_O5xQecCHZic53onobxjqGfW7I-D-tBrzXaPbj_Q=',1),(23,1,'nokia42069',6900,'Orange',7888,'2022-06-02 17:35:48','https://media.istockphoto.com/photos/mobile-phone-top-view-with-white-screen-picture-id1161116588?k=20&m=1161116588&s=612x612&w=0&h=NKv_O5xQecCHZic53onobxjqGfW7I-D-tBrzXaPbj_Q=',90);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-05 13:34:25
