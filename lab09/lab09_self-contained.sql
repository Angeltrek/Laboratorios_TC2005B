-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lab09
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `entregan`
--

DROP TABLE IF EXISTS `entregan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entregan` (
  `Fecha` datetime NOT NULL,
  `Cantidad` int DEFAULT NULL,
  `Clave` int NOT NULL,
  `Numero` int NOT NULL,
  `RFC` varchar(15) NOT NULL,
  PRIMARY KEY (`Fecha`),
  KEY `Clave` (`Clave`),
  KEY `Numero` (`Numero`),
  KEY `RFC` (`RFC`),
  CONSTRAINT `entregan_ibfk_1` FOREIGN KEY (`Clave`) REFERENCES `materiales` (`Clave`),
  CONSTRAINT `entregan_ibfk_2` FOREIGN KEY (`Numero`) REFERENCES `proyectos` (`Numero`),
  CONSTRAINT `entregan_ibfk_3` FOREIGN KEY (`RFC`) REFERENCES `proveedores` (`RFC`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entregan`
--

LOCK TABLES `entregan` WRITE;
/*!40000 ALTER TABLE `entregan` DISABLE KEYS */;
INSERT INTO `entregan` VALUES ('1997-09-03 00:00:00',546,1270,5008,'DDDD800101'),('1998-01-03 00:00:00',421,1090,5010,'BBBB800101'),('1998-01-08 00:00:00',132,1290,5009,'FFFF800101'),('1998-01-09 00:00:00',13,1430,5007,'DDDD800101'),('1998-02-04 00:00:00',180,1170,5017,'BBBB800101'),('1998-02-07 00:00:00',651,1140,5005,'GGGG800101'),('1998-02-21 00:00:00',202,1030,5003,'DDDD800101'),('1998-02-23 00:00:00',2,1070,5007,'HHHH800101'),('1998-03-12 00:00:00',167,1120,5007,'EEEE800101'),('1998-04-07 00:00:00',603,1420,5002,'CCCC800101'),('1998-04-09 00:00:00',139,1030,5016,'DDDD800101'),('1998-05-08 00:00:00',690,1250,5010,'BBBB800101'),('1998-06-05 00:00:00',116,1400,5010,'AAAA800101'),('1998-06-06 00:00:00',612,1090,5010,'BBBB800101'),('1998-06-12 00:00:00',558,1330,5017,'BBBB800101'),('1998-07-08 00:00:00',165,1000,5000,'AAAA800101'),('1998-09-12 00:00:00',94,1190,5019,'DDDD800101'),('1998-11-06 00:00:00',674,1340,5016,'CCCC800101'),('1998-12-10 00:00:00',554,1330,5013,'BBBB800101'),('1999-01-07 00:00:00',336,1290,5006,'FFFF800101'),('1999-01-12 00:00:00',86,1080,5008,'AAAA800101'),('1999-02-04 00:00:00',8,1020,5017,'CCCC800101'),('1999-02-10 00:00:00',11,1340,5016,'CCCC800101'),('1999-03-04 00:00:00',458,1150,5015,'HHHH800101'),('1999-03-07 00:00:00',623,1050,5014,'FFFF800101'),('1999-03-08 00:00:00',115,1230,5012,'HHHH800101'),('1999-03-10 00:00:00',506,1270,5007,'DDDD800101'),('1999-05-06 00:00:00',673,1130,5006,'FFFF800101'),('1999-05-09 00:00:00',272,1350,5015,'DDDD800101'),('1999-05-10 00:00:00',460,1260,5006,'CCCC800101'),('1999-06-04 00:00:00',90,1050,5014,'FFFF800101'),('1999-06-05 00:00:00',330,1350,5015,'DDDD800101'),('1999-06-09 00:00:00',244,1160,5019,'AAAA800101'),('1999-08-02 00:00:00',261,1350,5015,'DDDD800101'),('1999-08-08 00:00:00',254,1000,5019,'AAAA800101'),('1999-08-09 00:00:00',631,1260,5009,'CCCC800101'),('1999-09-02 00:00:00',576,1430,5003,'DDDD800101'),('1999-11-05 00:00:00',43,1210,5001,'FFFF800101'),('1999-11-12 00:00:00',53,1170,5018,'BBBB800101'),('1999-12-03 00:00:00',503,1070,5012,'HHHH800101'),('1999-12-11 00:00:00',263,1040,5004,'EEEE800101'),('2000-01-02 00:00:00',692,1060,5013,'GGGG800101'),('2000-02-03 00:00:00',331,1280,5007,'EEEE800101'),('2000-02-04 00:00:00',356,1190,5016,'DDDD800101'),('2000-02-05 00:00:00',601,1410,5001,'BBBB800101'),('2000-02-09 00:00:00',292,1110,5008,'DDDD800101'),('2000-02-12 00:00:00',44,1370,5017,'FFFF800101'),('2000-03-05 00:00:00',177,1200,5000,'EEEE800101'),('2000-03-07 00:00:00',413,1320,5018,'AAAA800101'),('2000-04-01 00:00:00',516,1070,5012,'HHHH800101'),('2000-04-06 00:00:00',7,1000,5019,'AAAA800101'),('2000-04-08 00:00:00',575,1370,5013,'FFFF800101'),('2000-05-03 00:00:00',528,1010,5001,'BBBB800101'),('2000-05-04 00:00:00',324,1060,5006,'GGGG800101'),('2000-05-06 00:00:00',585,1200,5015,'EEEE800101'),('2000-06-01 00:00:00',162,1160,5016,'AAAA800101'),('2000-06-10 00:00:00',546,1040,5015,'EEEE800101'),('2000-07-10 00:00:00',47,1060,5013,'GGGG800101'),('2000-08-01 00:00:00',73,1090,5009,'BBBB800101'),('2000-08-02 00:00:00',278,1420,5008,'CCCC800101'),('2000-08-03 00:00:00',463,1310,5019,'HHHH800101'),('2000-08-06 00:00:00',466,1100,5009,'CCCC800101'),('2000-08-11 00:00:00',93,1330,5017,'BBBB800101'),('2000-08-12 00:00:00',366,1240,5011,'AAAA800101'),('2000-10-14 00:00:00',503,1050,5005,'FFFF800101'),('2000-11-05 00:00:00',295,1030,5016,'DDDD800101'),('2000-11-07 00:00:00',364,1360,5016,'EEEE800101'),('2000-11-10 00:00:00',667,1010,5018,'BBBB800101'),('2001-02-01 00:00:00',147,1380,5012,'GGGG800101'),('2001-02-08 00:00:00',279,1290,5006,'FFFF800101'),('2001-02-12 00:00:00',444,1420,5008,'CCCC800101'),('2001-03-03 00:00:00',334,1180,5017,'CCCC800101'),('2001-04-03 00:00:00',215,1120,5012,'EEEE800101'),('2001-05-04 00:00:00',478,1020,5017,'CCCC800101'),('2001-06-01 00:00:00',216,1180,5017,'CCCC800101'),('2001-07-06 00:00:00',37,1360,5014,'EEEE800101'),('2001-07-07 00:00:00',692,1120,5007,'EEEE800101'),('2001-07-12 00:00:00',219,1140,5014,'GGGG800101'),('2001-07-29 00:00:00',582,1020,5002,'CCCC800101'),('2001-08-06 00:00:00',517,1170,5018,'BBBB800101'),('2001-08-10 00:00:00',453,1150,5004,'HHHH800101'),('2001-09-02 00:00:00',583,1140,5005,'GGGG800101'),('2001-09-06 00:00:00',479,1210,5014,'FFFF800101'),('2001-09-10 00:00:00',699,1100,5010,'CCCC800101'),('2001-11-03 00:00:00',70,1210,5014,'FFFF800101'),('2001-11-08 00:00:00',697,1390,5011,'HHHH800101'),('2002-01-06 00:00:00',308,1390,5011,'HHHH800101'),('2002-02-08 00:00:00',665,1160,5019,'AAAA800101'),('2002-03-03 00:00:00',302,1380,5018,'GGGG800101'),('2002-03-12 00:00:00',382,1400,5000,'AAAA800101'),('2002-03-29 00:00:00',523,1010,5018,'BBBB800101'),('2002-04-04 00:00:00',63,1130,5013,'FFFF800101'),('2002-04-07 00:00:00',265,1360,5014,'EEEE800101'),('2002-04-12 00:00:00',72,1310,5011,'HHHH800101'),('2002-05-03 00:00:00',467,1410,5009,'BBBB800101'),('2002-05-07 00:00:00',523,1100,5009,'CCCC800101'),('2002-06-05 00:00:00',423,1370,5013,'FFFF800101'),('2002-06-10 00:00:00',521,1300,5005,'GGGG800101'),('2002-06-14 00:00:00',407,1180,5018,'CCCC800101'),('2002-07-04 00:00:00',658,1220,5013,'GGGG800101'),('2002-07-06 00:00:00',562,1130,5006,'FFFF800101'),('2002-07-08 00:00:00',71,1250,5005,'BBBB800101'),('2002-07-12 00:00:00',540,1040,5015,'EEEE800101'),('2002-07-29 00:00:00',107,1280,5008,'EEEE800101'),('2002-10-02 00:00:00',199,1310,5019,'HHHH800101'),('2002-11-05 00:00:00',461,1410,5009,'BBBB800101'),('2002-11-07 00:00:00',699,1080,5011,'AAAA800101'),('2002-12-02 00:00:00',324,1340,5014,'CCCC800101'),('2002-12-07 00:00:00',448,1280,5007,'EEEE800101'),('2002-12-09 00:00:00',312,1230,5012,'HHHH800101'),('2003-01-06 00:00:00',530,1230,5003,'HHHH800101'),('2003-01-08 00:00:00',119,1300,5010,'GGGG800101'),('2003-01-12 00:00:00',152,1240,5004,'AAAA800101'),('2003-02-01 00:00:00',24,1220,5002,'GGGG800101'),('2003-02-02 00:00:00',457,1300,5005,'GGGG800101'),('2003-02-10 00:00:00',2,1260,5009,'CCCC800101'),('2003-03-07 00:00:00',622,1190,5016,'DDDD800101'),('2003-06-01 00:00:00',429,1080,5011,'AAAA800101'),('2003-06-28 00:00:00',368,1110,5011,'DDDD800101'),('2003-08-05 00:00:00',549,1240,5011,'AAAA800101'),('2003-09-01 00:00:00',270,1150,5004,'HHHH800101');
/*!40000 ALTER TABLE `entregan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiales`
--

DROP TABLE IF EXISTS `materiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiales` (
  `Clave` int NOT NULL,
  `Descripcion` varchar(100) DEFAULT NULL,
  `Precio` int DEFAULT NULL,
  PRIMARY KEY (`Clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiales`
--

LOCK TABLES `materiales` WRITE;
/*!40000 ALTER TABLE `materiales` DISABLE KEYS */;
INSERT INTO `materiales` VALUES (1000,'Varilla 3/16',100),(1010,'Varilla 4/32',115),(1020,'Varilla 3/17',130),(1030,'Varilla 4/33',145),(1040,'Varilla 3/18',160),(1050,'Varilla 4/34',175),(1060,'Varilla 3/19',190),(1070,'Varilla 4/35',205),(1080,'Ladrillos rojos',50),(1090,'Ladrillos grises',35),(1100,'Block',30),(1110,'Megablock',40),(1120,'Sillar rosa',100),(1130,'Sillar gris',110),(1140,'Cantera blanca',200),(1150,'Cantera gris',1210),(1160,'Cantera rosa',1420),(1170,'Cantera amarilla',230),(1180,'Recubrimiento P1001',200),(1190,'Recubrimiento P1010',220),(1200,'Recubrimiento P1019',240),(1210,'Recubrimiento P1028',250),(1220,'Recubrimiento P1037',280),(1230,'Cemento ',300),(1240,'Arena',200),(1250,'Grava',100),(1260,'Gravilla',90),(1270,'Tezontle',80),(1280,'Tepetate',34),(1290,'Tubería 3.5',200),(1300,'Tubería 4.3',210),(1310,'Tubería 3.6',220),(1320,'Tubería 4.4',230),(1330,'Tubería 3.7',240),(1340,'Tubería 4.5',250),(1350,'Tubería 3.8',260),(1360,'Pintura C1010',125),(1370,'Pintura B1020',125),(1380,'Pintura C1011',725),(1390,'Pintura B1021',125),(1400,'Pintura C1011',125),(1410,'Pintura B1021',125),(1420,'Pintura C1012',125),(1430,'Pintura B1022',125);
/*!40000 ALTER TABLE `materiales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `RFC` varchar(15) NOT NULL,
  `RazonSocial` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RFC`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES ('AAAA800101','La fragua'),('BBBB800101','Oviedo'),('CCCC800101','La Ferre'),('DDDD800101','Cecoferre'),('EEEE800101','Alvin'),('FFFF800101','Comex'),('GGGG800101','Tabiquera del centro'),('HHHH800101','Tubasa');
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyectos` (
  `Numero` int NOT NULL,
  `Denominacion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Numero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectos`
--

LOCK TABLES `proyectos` WRITE;
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
INSERT INTO `proyectos` VALUES (5000,'Vamos Mexico'),(5001,'Aztecón'),(5002,'CIT Campeche'),(5003,'Mexico sin ti no estamos completos'),(5004,'Educando en Coahuila'),(5005,'Infonavit Durango'),(5006,'Reconstrucción del templo de Guadalupe'),(5007,'Construcción de plaza Magnolias'),(5008,'Televisa en acción'),(5009,'Disco Atlantic'),(5010,'Construcción de Hospital Infantil'),(5011,'Remodelación de aulas del IPP'),(5012,'Restauración de instalaciones del CEA'),(5013,'Reparación de la plaza Sonora'),(5014,'Remodelación de Soriana'),(5015,'CIT Yucatan'),(5016,'Ampliación de la carretera a la huasteca'),(5017,'Reparación de la carretera del sol'),(5018,'Tu cambio por la educacion'),(5019,'Queretaro limpio');
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-15  9:40:44
-- Queries

SELECT Clave, Descripcion, Precio
FROM Materiales
WHERE Descripcion LIKE '%Tub%';

SELECT Clave, Descripcion, Precio
FROM Materiales
WHERE Precio > 300;

SELECT m.Clave AS 'Clave del material', p.RazonSocial AS 'Razón Social del Proveedor'
FROM Materiales AS m
JOIN Entregan AS e ON m.Clave = e.Clave
JOIN Proveedores AS p ON e.RFC = p.RFC
WHERE m.Descripcion LIKE '%Ladrillos%';

SELECT m.Descripcion AS 'Descripción del Material', p.RazonSocial AS 'Razón Social del Proveedor', pr.Denominacion AS 'Denominación del Proyecto', e.Fecha, e.Cantidad
FROM Materiales AS m
JOIN Entregan AS e ON m.Clave = e.Clave
JOIN Proveedores AS p ON e.RFC = p.RFC
JOIN Proyectos AS pr ON e.Numero = pr.Numero
WHERE m.Descripcion LIKE '%Pintura%' AND YEAR(e.Fecha) = 1998;