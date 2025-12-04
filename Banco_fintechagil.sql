-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para fintech_agil
DROP DATABASE IF EXISTS `fintech_agil`;
CREATE DATABASE IF NOT EXISTS `fintech_agil` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin */;
USE `fintech_agil`;

-- Copiando estrutura para tabela fintech_agil.cadastro
DROP TABLE IF EXISTS `cadastro`;
CREATE TABLE IF NOT EXISTS `cadastro` (
  `id_cadastro` int(11) NOT NULL AUTO_INCREMENT,
  `nome_completo` varchar(255) NOT NULL DEFAULT '',
  `dt_nasc` date NOT NULL,
  `cpf` varchar(11) NOT NULL DEFAULT '',
  `telefone` varchar(11) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `endereco` varchar(255) NOT NULL DEFAULT '',
  `senha` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_cadastro`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Copiando dados para a tabela fintech_agil.cadastro: ~1 rows (aproximadamente)
DELETE FROM `cadastro`;
INSERT INTO `cadastro` (`id_cadastro`, `nome_completo`, `dt_nasc`, `cpf`, `telefone`, `email`, `endereco`, `senha`) VALUES
	(1, '0000000000000', '2016-03-09', '00000000000', '18988262708', 'kenidaregina9@gmail.com', 'Rua Quintino Bocaiúva', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92');

-- Copiando estrutura para tabela fintech_agil.fale_conosco
DROP TABLE IF EXISTS `fale_conosco`;
CREATE TABLE IF NOT EXISTS `fale_conosco` (
  `id_fale` int(11) NOT NULL AUTO_INCREMENT,
  `nome_completo` varchar(50) NOT NULL DEFAULT '',
  `telefone` varchar(11) DEFAULT NULL,
  `email` varchar(255) NOT NULL DEFAULT '',
  `assunto` varchar(200) NOT NULL,
  `mensagem` text NOT NULL,
  `dt_ehr` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id_fale`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Copiando dados para a tabela fintech_agil.fale_conosco: ~2 rows (aproximadamente)
DELETE FROM `fale_conosco`;
INSERT INTO `fale_conosco` (`id_fale`, `nome_completo`, `telefone`, `email`, `assunto`, `mensagem`, `dt_ehr`, `status`) VALUES
	(1, 'Kemilly Regina Riedo Calado', '18988262708', 'kenidaregina9@gmail.com', 'MA;LVKNDVLKDNSLDKNSKSDNÇSNSÇN ÇSDNÇSDPVNSÇFNSNSS´NSF', '3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333', '2025-12-02 14:09:42', 'Aguardando leitura'),
	(2, 'Kemilly Regina Riedo Calado', '18988262708', 'kenidaregina9@gmail.com', 'MA;LVKNDVLKDNSLDKNSKSDNÇSNSÇN ÇSDNÇSDPVNSÇFNSNSS´NSF', '666666666666666666666666666666666', '2025-12-02 16:37:07', 'Aguardando leitura');

-- Copiando estrutura para tabela fintech_agil.login
DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `id_login` int(11) NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(255) NOT NULL,
  `senha` varchar(50) NOT NULL,
  PRIMARY KEY (`id_login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Copiando dados para a tabela fintech_agil.login: ~0 rows (aproximadamente)
DELETE FROM `login`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
