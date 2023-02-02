-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)

--

-- Host: 127.0.0.1    Database: QuoteGame

-- ------------------------------------------------------

-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */

;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */

;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */

;

/*!50503 SET NAMES utf8 */

;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */

;

/*!40103 SET TIME_ZONE='+00:00' */

;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */

;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */

;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */

;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */

;

--

-- Table structure for table `tvshow`

--

DROP TABLE IF EXISTS `tvshow`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `tvshow` (
        `id` int NOT NULL AUTO_INCREMENT,
        `title` varchar(45) NOT NULL,
        `quote` tinytext NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 51 DEFAULT CHARSET = utf8mb3;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `tvshow`

--

LOCK TABLES `tvshow` WRITE;

/*!40000 ALTER TABLE `tvshow` DISABLE KEYS */

;

INSERT INTO `tvshow`
VALUES (
        1,
        'The Mandalorian',
        'This is the way'
    ), (
        2,
        'Game Of Thrones',
        'Winter is coming'
    ), (
        3,
        'The Last of Us',
        'Use them to protect Tess'
    ), (
        4,
        'Friends',
        'How you doin\'?'
    ), (5, 'Stargate SG1', 'Indeed.'), (6, 'The Simpsons', 'D\'oh!'), (
        7,
        'Sounth Park',
        'Oh my God! They killed Kenny!'
    ), (
        8,
        'Saturday Night Live',
        'Live, from New York, it\'s Saturday night!'
    ), (
        9,
        'The Office',
        'I changed all my passwords to \'Incorrect.\' So whenever I forget, it will tell me \'Your password is incorrect.\''
    ), (
        10,
        'The Office',
        'Before I do anything, I ask myself, \'Would an idiot do that?\' And, if the answer is yes, I do not do that thing.'
    ), (
        11,
        'Sherlock',
        'I always hear \'punch me in the face\' when you\'re speaking, but it\'s usually subtext.'
    ), (
        12,
        'Game Of Thrones',
        'Never forget what are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.'
    ), (
        13,
        'Game Of Thrones',
        'A mind needs books like a sword needs a whetstone.'
    ), (
        14,
        'Friends',
        'We were on a break!'
    ), (
        15,
        'Friends',
        'I wish I could, but I don’t want to.'
    ), (
        16,
        'The Honeymooners',
        'Bang, zoom, to the moon, Alice!'
    ), (
        17,
        'Californication',
        'Hate the game, not the playa.'
    ), (
        18,
        'The Big Bang Theory',
        'Interesting. You’re afraid of insects and women. Ladybugs must render you catatonic.'
    ), (
        19,
        'The Big Bang Theory',
        'Bazinga!'
    ), (
        20,
        'How I Met Your Mother',
        'It\'s going to be legendary!'
    ), (
        21,
        'How I Met Your Mother',
        'Challenge accepted !'
    ), (
        22,
        'Brooklyn Nine Nine',
        'Cool, cool, cool, cool, cool. No doubt, no doubt, no doubt.'
    ), (
        23,
        'How I Met Your Mother',
        'Nobody asked you Patrice !'
    ), (
        24,
        'Malcolm in the Middle',
        'Is Malcolm A Robot?'
    ), (
        25,
        'Malcolm in the Middle',
        'Live, live, die!, Live, live, die!'
    ), (
        26,
        'Kaamelott',
        'Moi, je m’en fous, si on me force à y retourner, je retiens ma respiration jusqu’à ce qu’on arrête de me forcer à y retourner.'
    ), (
        27,
        'Kaamelott',
        'Oh vous, toujours vous, mais allez chier dans une fiole, on verra après.'
    ), (
        28,
        'Kaamelott',
        'Faut pas respirer la compote, ça fait tousser.'
    ), (
        29,
        'Kaamelott',
        'Arthour ! On est fort... en pomme !'
    ), (
        30,
        'The Office',
        'That\'s what she said'
    ), (
        31,
        'The Wire',
        'You come at the king, you best not miss.'
    ), (
        32,
        'The Witcher',
        'If I have to choose between one evil and another, then I prefer not to choose at all.'
    ), (
        33,
        'The Fresh Prince of Bel-Air',
        'I totaled your Mastercard!'
    ), (
        34,
        'Community',
        'Our first assignment is a documentary. They’re like a movie, but with ugly people.'
    ), (
        35,
        'The walking dead',
        'It’s human nature to come together.'
    ), (
        36,
        'The walking dead',
        'I Wear A Leather Jacket, I Have Lucille, And My Nut Sack Is Made Of Steel.'
    ), (
        37,
        'X-Files',
        'The truth is out there, but so are lies.'
    ), (
        38,
        'The Boyz',
        'A stranger is just a friend you ain’t met yet.'
    ), (
        39,
        'The Boyz',
        'I\'m Stronger. I\'m Smarter. I\'m Better. I Am Better!'
    ), (
        40,
        'The Peaky Blinders',
        'By order of the Peaky Blinders.'
    ), (
        41,
        'Vikings',
        'We fight. That is how we win, and that is how we die.'
    ), (
        42,
        'Vikings',
        'Warriors don’t show their heart until the axe reveals it.'
    ), (
        43,
        'League of Legends - Arcane',
        'There’s a monster inside all of us.'
    ), (
        44,
        'Stranger Things',
        'Friends don\'t lie.'
    ), (
        45,
        'One Piece',
        'If you don’t take risks, you can’t create a future!'
    ), (
        46,
        'Naruto',
        'If you don’t like your destiny, don’t accept it.'
    ), (
        47,
        'Naruto',
        'People become stronger because they have memories they can’t forget.'
    ), (
        48,
        'Stargate SG1',
        'General Hammond, request permission to beat the crap outta this man.'
    ), (
        49,
        'Dexter',
        'Life is so fleeting, so fragile. Every breath, the potential to be our last.'
    ), (
        50,
        'Dexter',
        'Surprise, motherf*cker.'
    );

/*!40000 ALTER TABLE `tvshow` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `user`

--

DROP TABLE IF EXISTS `user`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `user` (
        `id` int NOT NULL AUTO_INCREMENT,
        `username` varchar(32) DEFAULT NULL,
        `score` int DEFAULT NULL,
        PRIMARY KEY (`id`),
        UNIQUE KEY `username_UNIQUE` (`username`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 13 DEFAULT CHARSET = utf8mb3;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `user`

--

LOCK TABLES `user` WRITE;

/*!40000 ALTER TABLE `user` DISABLE KEYS */

;

INSERT INTO `user`
VALUES (9, 'Alex', 0), (10, 'Michel', 3), (11, 'Jean', 4), (12, 'Jean Michel', 2);

/*!40000 ALTER TABLE `user` ENABLE KEYS */

;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */

;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */

;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */

;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */

;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */

;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */

;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */

;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */

;

-- Dump completed on 2023-02-02 22:01:32