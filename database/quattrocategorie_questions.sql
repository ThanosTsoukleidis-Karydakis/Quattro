-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: quattrocategorie
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `answer_a` varchar(125) NOT NULL,
  `answer_b` varchar(125) NOT NULL,
  `answer_c` varchar(125) NOT NULL,
  `answer_d` varchar(125) NOT NULL,
  `correct_answer` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'Which of the following languages is not written using the Latin Alphabet?','Romanian','Polish','Serbian','Czech','c','Art&Literature'),(2,'When did Montenegro gain its independence?','2004','2005','2006','2007','c','History'),(3,'Which of the following countries was NOT previously in the Soviet Union?','Belarus','Armenia','Romania','Moldova','c','Geography'),(4,'Which actor stars in the Martin Scorsese film called Taxi Driver?','Leonardo DiCaprio','Antony Hopkins','Robert Redford','Robert De Niro','d','Cinema'),(5,'Which chemical element has the symbol Au?','Gold','Oxygen','Lithium','Calcium','a','Science'),(6,'Who of the following was NOT a Republican President of the USA?','Richard Nixon','Dwight Eisenhower','Jimmy Carter','Gerald Ford','c','Politics'),(7,'Which one of the following albums belongs to \'U2\'?','Unknown Pleasures','Antics','The Joshua Tree','Morrison Hotel','c','Music'),(8,'Which of the following states did NOT secede from the Union during the American Civil War?','Pennsylvania','South Carolina','Tennessee','Alabama','a','History'),(9,'Which of the following Agatha Christie novels do NOT feature her famous detective Hercule Poirot?','Evil Under The Sun','Death on the Nile','Murder on the Orient Express','The Body in the Library','d','Art&Literature'),(10,'Which actor has NOT played the role of James Bond up until 2023?','Sean Connery','Daniel Craig','Tom Cruise','Pierce Brosnan','c','Cinema'),(11,'What is the capital city of Syria?','Baghdad','Tehran','Cairo','Damascus','d','Geography'),(12,'What was the nationality of Christopher Columbus?','Spanish','Italian','Portuguese','French','b','History'),(13,'Who is the owner of Facebook (as of 2023)? ','Elon Musk','Mark Zuckerberg','Jeff Bezos','Larry Page','b','Technology'),(14,'Which of the following programming languages was created by Bjarne Stroustrup?','Python','C++','Prolog','JavaScript','b','Technology'),(15,'For what discovery did Albert Einstein earn the Nobel Prize in Physics?','Photoelectric Effect','Theory of Relativity','Uncertainty Principle','Second Law of Thermodynamics','a','Science'),(16,'Who was the first King of Greece?','George I','Constantine I','Paul','Otto','d','History'),(17,'Where does the band Mogwai hail from?','England','Scotland','Ireland','USA','b','Music'),(18,'For which film did Leonardo Di Caprio earn his first Academy Award for Best Actor?','Shutter Island','The Wolf of Wall Street','The Revenant','Inception','c','Cinema'),(19,'A highly popular Italian music competition, named after the city in which it takes place annually, is called \'Festival di...\'?','Roma','Milano','Palermo','Sanremo','d','Music'),(20,'Who is the author of the novel called \'The Trial\'?','Franz Kafka','Albert Camus','Ernest Hemingway','T.S. Eliot','a','Art&Literature'),(21,'Steve Reich is a very important figure in which classical music genre?','Neoclassical','Minimalism','Impressionism','Baroque','b','Music'),(22,'Who was the President of the USA when the 9/11 attacks took place?','George W. Bush','Bill Clinton','George H. W. Bush','Barack Obama','a','Politics'),(23,'Which of the following countries was reunited in 1990 by the merge of its North part and its South part? ','Lebanon','Iraq','Yemen','Sudan','c','History'),(24,'Which is the ruling party in Syria under Bashar al-Assad as of now (2024)?','Ennahda','Freedom and Justice Party','Arab Socialist Ba\'ath Party','Fatah','c','Politics'),(25,'Who was the Vice President of the United States from 2021 to 2024?','Alexandria Ocasio-Cortez','Kamala Harris','Elizabeth Warren','Amy Klobuchar','b','Politics'),(26,'What is the biggest planet in our solar system?','Mars','Uranus','Neptune','Jupiter','d','Science'),(27,'What is the rarest blood type in humans?','AB+','0-','AB-','0+','c','Science'),(28,'In which continent is Suriname located?','Asia','Africa','Oceania','South America','d','Geography'),(29,'How many countries are there in the European Union (as of 2023)?','15','20','27','35','c','Geography'),(30,'\'OS\' computer abbreviation usually means ?','Order of Significance','Open Software','Optical Sensor','Operating System','d','Technology'),(31,'What is a GPU?','Grouped Processing Unit','Graphical Performance Utility','Graphics Processing Unit','Graphical Portable Unit','c','Technology'),(32,'Who was the director of the film \'Persona\'?','Ingmar Bergman','Jim Jarmusch','Martin Scorcese','David Lynch','a','Cinema'),(33,'Which of the following painters was part of the movement of Impressionism?','Pablo Picasso','Rembrandt','Hieronymus Bosch','Claude Monet','d','Art&Literature'),(36,'Who starred in Yorgos Lanthimos\' film \'Poor Things\'? ','Rachel Weisz','Emma Stone','Olivia Colman','Scarlett Johansson','b','Cinema'),(37,'Which one of the following is a JavaScript library?','React','Flask','Django','Tornado','a','Technology'),(38,'Who is credited with the creation of the World Wide Web?','Edsger Wybe Dijkstra','Leslie Lamport','Donald Knuth','Tim Berners-Lee','d','Technology'),(39,'Which Alfred Hitchcock thriller is notorious for its shocking \"shower scene\"?','Rebecca','Vertigo','Psycho','The Birds','c','Cinema'),(40,'What year did World War II end?','1943','1945','1947','1948','b','History'),(41,'Which music legend won the Nobel Prize for literature in 2016?','Leonard Cohen','David Bowie','Bob Dylan','Patti Smith','c','Art&Literature'),(42,'Who is the guitarist of the band \'Radiohead\'?','Pete Townshend','Bernard Sumner','Johnny Marr','Jonny Greenwood','d','Music'),(43,'Who defeated Republican Barry Goldwater  in the 1964 United States elections in a landslide?','Lyndon Johnson','Jimmy Carter','John Kennedy','Harry Truman','a','Politics'),(44,'What year did the South African elections that officially ended Apartheid take place?','1984','1990','1994','1997','c','Politics'),(45,'What male sea creature gives birth to its young?','Seahorse','Crab','Shrimp','Octopus','a','Science'),(47,'Which composer died after he hit his foot with his conducting stick?','Marin Marais','Jean-Baptiste Lully','Monsieur de Sainte-Colombe','Claudio Monteverdi','b','Music'),(48,'Where was Martin Luther King, Jr. born?','Alabama','Louisiana','Arkansas','Georgia','d','History'),(49,'What was the name of the battle in the Pacific fought between the U.S. Navy and the Imperial Japanese Navy in June 1942?','Battle of Midway','Battle of Okinawa','Battle of Leyte Gulf','Battle of Guadalcanal','a','History'),(50,'Who was the first American to win a Noble Peace Prize?','Benjamin Franklin','Alexander Graham Bell','Theodore Roosevelt ','Thomas Jefferson','c','History'),(51,'First used all the way back in the 1800s, and coming from the Dutch term \"free booter,\" what is the common political term for a delaying tactic?','Red herring','Filibuster','Spin doctoring','Gerrymandering','b','Politics'),(52,'Peter Kropotkin is a philosopher of what ideology?','Anarchism','Socialism','Liberalism','Conservatism','a','Politics'),(53,'Which social system, common in Medieval Europe, is simply defined as a system in which people worked and fought for nobles who gave them protection and land in return?','Monarchism','Liberalism','Feudalism','Plutocracy','c','Politics'),(54,'Which country has the abbreviation \'CH\'?','Czech Republic','Chile','Chad','Switzerland','d','Geography'),(55,'What is the smallest country in the world?','San Marino','Monaco','Nauru','Vatican City','d','Geography'),(56,'In what ocean is the Bermuda Triangle located?','Atlantic Ocean','Pacific Ocean','Indian Ocean','Southern Ocean','a','Geography'),(57,' In which of Edgar Allan Poe\'s works does the protagonist succumb to the influence of alcohol and confess a heinous crime under the pressure of guilt?','The Man of the Crowd','The Tell-Tale Heart','The Fall of the House of Usher','The Pit and the Pendulum','b','Art&Literature'),(58,'\"Dog doo good god!\" is a sentence that reads the same backwards and forwards. This is an example of what literary device?','Alliteration','Hyperbole','Oxymoron','Palindrome','d','Art&Literature'),(59,'Which of the following books is written by Thomas Hobbes?','The Republic','The Prince','Utopia','Leviathan','d','Politics'),(60,'Looking to stimulate a stagnant Soviet economy in the \'80s, Mikhail Gorbachev introduced what political movement that\'s just Russian for \'reconstruction\' or \'restructuring\'?','Glasnost','Perestroika','Bolshevik','Pravda','b','Politics'),(61,'Which singer is known as the \'Godfather of Goth\'?','Ian Curtis','Ian McCulloch','Robert Smith','Peter Murphy','d','Music'),(62,'Which band\'s signature song is \'Light My Fire\'?','Pink Floyd','The Doors','The Who','Roxy Music','b','Music'),(63,'What was the 1991 album released by Nirvana called?','Nevermind','Low','Strange Days','The Bends','a','Music');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-24 13:49:03
