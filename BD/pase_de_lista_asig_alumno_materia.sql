-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: pase_de_lista
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `asig_alumno_materia`
--

DROP TABLE IF EXISTS `asig_alumno_materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asig_alumno_materia` (
  `ASIG_AM_ID` varchar(10) NOT NULL,
  `GRUPO_ID` varchar(4) NOT NULL,
  `LABORATORIO_ID` varchar(10) NOT NULL,
  `ALUMNO_ID` int NOT NULL,
  PRIMARY KEY (`ASIG_AM_ID`),
  KEY `GRUPO_ID` (`GRUPO_ID`),
  KEY `LABORATORIO_ID` (`LABORATORIO_ID`),
  KEY `ALUMNO_ID` (`ALUMNO_ID`),
  CONSTRAINT `asig_alumno_materia_ibfk_1` FOREIGN KEY (`GRUPO_ID`) REFERENCES `cat_grupo` (`GRUPO_ID`),
  CONSTRAINT `asig_alumno_materia_ibfk_2` FOREIGN KEY (`LABORATORIO_ID`) REFERENCES `cat_laboratorio` (`LABORATORIO_ID`),
  CONSTRAINT `asig_alumno_materia_ibfk_3` FOREIGN KEY (`ALUMNO_ID`) REFERENCES `alumno` (`ALUMNO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asig_alumno_materia`
--

LOCK TABLES `asig_alumno_materia` WRITE;
/*!40000 ALTER TABLE `asig_alumno_materia` DISABLE KEYS */;
/*!40000 ALTER TABLE `asig_alumno_materia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-08 21:55:15
