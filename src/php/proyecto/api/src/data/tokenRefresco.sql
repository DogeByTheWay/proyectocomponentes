CREATE TABLE tokenRefresco(
   id        INTEGER  NOT NULL PRIMARY KEY 
  ,idUsuario INTEGER  NOT NULL
  ,token     VARCHAR(75) NOT NULL
  ,expiraEn  INTEGER  NOT NULL
  ,activo    BOOLEAN  NOT NULL
);
INSERT INTO tokenRefresco(id,idUsuario,token,expiraEn,activo) VALUES (1,1,'asdfasdfasdfasdfasdfasdfasdfsa23345asfasdfasdfasfasfdasdfasfdasfdasfasfdasf',121212122,true);
