CREATE DATABASE cine;
USE cine;
CREATE TABLE peliculas(
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  duracion SMALLINT NOT NULL,
  clasificacion ENUM('APT', '+14', '+18') NOT NULL,
  alanzamiento CHAR(4) NOT NULL
)ENGINE=INNODB;

INSERT INTO peliculas(titulo, duracion, clasificacion, alanzamiento) VALUES
('El Padrino', 175, '+18', '1972'),
('El Padrino II', 202, '+18', '1974'),
('El Padrino III', 162, '+18', '1990');

SELECT * FROM peliculas;