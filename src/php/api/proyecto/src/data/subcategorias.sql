CREATE TABLE subcategorias(
   id        INTEGER  NOT NULL PRIMARY KEY 
  ,nombre    VARCHAR(18) NOT NULL
  ,categoria INTEGER  NOT NULL
);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (1,'Portatiles',1);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (2,'PC',1);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (3,'Memorias USB',2);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (4,'Disco duro externo',2);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (5,'Placas base',3);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (6,'Procesador',3);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (7,'Discos Duros',3);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (8,'Tarjetas gráficas',3);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (9,'RAM',3);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (10,'Monitores',4);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (11,'Proyectores',4);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (12,'TV',4);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (13,'Impresoras',4);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (14,'Micrófonos',4);
INSERT INTO subcategorias(id,nombre,categoria) VALUES (15,'Altavoces',4);
