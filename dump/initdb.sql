USE dev;

CREATE TABLE IF NOT EXISTS users( 
  id int(11) NOT NULL AUTO_INCREMENT, 
  mail varchar(30) NOT NULL, 
  login varchar(8) NOT NULL, 
  password varchar(10) NOT NULL, 
  PRIMARY KEY (id)
  );