CREATE TABLE usuarios(
   id       INTEGER  NOT NULL PRIMARY KEY 
  ,nombre   VARCHAR(17) NOT NULL
  ,password VARCHAR(4) NOT NULL
);
INSERT INTO usuarios(id,nombre,password) VALUES (1,'mario@gmail.com','root');
INSERT INTO usuarios(id,nombre,password) VALUES (2,'wendy@gmail.com','root');
INSERT INTO usuarios(id,nombre,password) VALUES (3,'esteban@gmail.com','root');
INSERT INTO usuarios(id,nombre,password) VALUES (4,'pablo@gmail.com','root');
