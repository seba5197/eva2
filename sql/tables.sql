CREATE TABLE Usuarios (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nombre CHAR(255), correo CHAR(255) );

CREATE TABLE Mensajes(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,mensaje CHAR(255), Comentario CHAR(255), Fecha DATETIME, idusuario1 INT, idusuario2 INT );

CREATE TABLE Eventos(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, Evento CHAR(255), idusuario INT, Fecha DATE);