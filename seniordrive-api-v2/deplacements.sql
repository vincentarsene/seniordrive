-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Mer 26 Juillet 2017 à 06:44
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `db684293167`
--

-- --------------------------------------------------------

--
-- Structure de la table `deplacements`
--

CREATE TABLE `deplacements` (
  `id` int(20) NOT NULL,
  `version` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `depldate` varchar(30) NOT NULL,
  `deplheuredebut` varchar(30) NOT NULL,
  `deplheurefin` varchar(30) NOT NULL,
  `depllieudepart` varchar(255) NOT NULL,
  `depllieudestination` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `deplacements`
--

INSERT INTO `deplacements` (`id`, `version`, `nom`, `prenom`, `email`, `telephone`, `depldate`, `deplheuredebut`, `deplheurefin`, `depllieudepart`, `depllieudestination`) VALUES
(1, 1, 'ARSENE', 'Vincent', 'vincentarsene@hotmail.com', '0606742065', '02/04/2018', '9H00', '18H00', 'Granville', 'Paris'),
(2, 1, 'mario', 'nintendo', 'mario@nintendo.co.jp', '0081123450', '03/03/2017', '00H00', '23H00', 'Japon', 'Monde :)'),
(3, 1, 'Link', 'Zelda', 'link@nintendo.co.jp', '008148756', '01/01/1986', '9H00', '18H00', 'Japon', 'Paris'),
(4, 1, 'Solid', 'Snake', 'sniper1@konami.com', '0081546465', '01/08/1987', '14h00', '19h00', 'Tokyo', 'Berlin'),
(5, 1, 'PAC', 'Man', 'pacman-fisrt@namco.co.jp', '0081754654', '01/03/1980', '00H00', '22H00', 'Tokyo, Japon', 'World of game'),
(6, 1, 'Lara', 'Croft', 'lara@eidos.co.uk', '00441234', '01/01/1996', '07H00', '24H00', 'London', 'Granivlle'),
(7, 1, 'Sonic', 'the Hedgehog', 'sonic@sega.com', '0081965522', '01/07/1990', '10H00', '14H00', 'Japon', 'Rennes'),
(8, 1, 'Nico', 'Bellic', 'nico@rockstar.com', '001564654', '01/09/2008', '9H00', '17H00', 'Grand Theft Auto IV', 'Game world'),
(9, 1, 'Threepwood', 'Guybrush', 'secretofmonkey@lucasarts.com', '001573333', '1/07/1990', '9H00', '17H00', 'Paris', 'Paris');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `deplacements`
--
ALTER TABLE `deplacements`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ID` (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `deplacements`
--
ALTER TABLE `deplacements`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
