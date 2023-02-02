CREATE TABLE carritos(
   id        INTEGER  NOT NULL PRIMARY KEY 
  ,idUsuario INTEGER  NOT NULL
  ,estado    VARCHAR(6) NOT NULL
  ,activo    BOOLEAN  NOT NULL
);
INSERT INTO carritos(id,idUsuario,estado,activo) VALUES (1,1,'pagado',true);
