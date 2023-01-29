CREATE TABLE token(
   idUsuario BIT  NOT NULL PRIMARY KEY
  ,token     VARCHAR(94) NOT NULL
  ,expiraEn  INTEGER  NOT NULL
);
INSERT INTO token(idUsuario,token,expiraEn) VALUES (1,'asasdfasdfasdfasdfadsfasdfasfdasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsdfasdfasasdfasdfasdfadf',121212122);
