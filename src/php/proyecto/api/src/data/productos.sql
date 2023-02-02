CREATE TABLE productos(
   id         INTEGER  NOT NULL PRIMARY KEY 
  ,idCarrito  INTEGER  NOT NULL
  ,idArticulo INTEGER  NOT NULL
  ,unidades   INTEGER  NOT NULL
);
INSERT INTO productos(id,idCarrito,idArticulo,unidades) VALUES (1,1,2,2);
