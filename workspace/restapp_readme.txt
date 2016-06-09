maven:
pom.xml
======
jersey-container-servlet
jersey-metainf-services

jackson-core
jackson-annotations
jackson-databind
jackson-jaxrs-json-provider

mysql-connector-java



Database:
======

emp_db.employee;


CREATE TABLE emp_db.employee (
  ID int(11) NOT NULL AUTO_INCREMENT,
  FIRST_NAME varchar(45) DEFAULT NULL,
  LAST_NAME varchar(45) DEFAULT NULL,
  EMAIL varchar(50) DEFAULT NULL,
  ADDRESS1 varchar(50) DEFAULT NULL,
  ADDRESS2 varchar(50) DEFAULT NULL,
  CITY varchar(45) DEFAULT NULL,
  ZIP int(11) DEFAULT NULL,
  PHONE varchar(10) DEFAULT NULL,
  STATE varchar(50) DEFAULT NULL,
  PRIMARY KEY (ID)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8;


INSERT INTO emp_db.employee (FIRST_NAME, LAST_NAME, EMAIL, ADDRESS1, ADDRESS2, CITY, ZIP, PHONE, STATE) VALUES 
('PENELOPE','GUINESS','PENELOPE.GUINESS@abc.com','28 MySQL Boulevard','','Palo Alto',94301,'2830338429', 'California'),
('NICK','WAHLBERG','NICK.WAHLBERG@abc.com','23 Workhaven Lane','','Richmond',23294,'8386352866', 'Virginia'),
('ED','CHASE','ED.CHASE@abc.com','1411 Lillydale Drive','','Seattle',98101,'4484771904', 'Washington'),
('JENNIFER','DAVIS','JENNIFER.DAVIS@abc.com','1913 Hanoi Way','','Chicago',60007,'7058140035', 'Illinois'),
('JOHNNY','LOLLOBRIGIDA','JOHNNY.LOLLOBRIGIDA@abc.com','1121 Loja Avenue','','Dallas',75001,'1065564866', 'Texas'),
('BETTE','NICHOLSON','BETTE.NICHOLSON@abc.com','692 Joliet Street','','Salt Lake City',84044,'8604526264', 'Utah'),
('GRACE','MOSTEL','GRACE.MOSTEL@abc.com','53 Idfu Parkway','','Columbus',43002,'7165712203', 'Ohio'),
('MATTHEW','JOHANSSON','MATTHEW.JOHANSSON@abc.com','478 Joliet Way','','Denver',80012,'6572822859', 'Colorado'),
('JOE','SWANK','JOE.SWANK@abc.com','613 Korolev Drive','','Phoenix',85003,'3806575226', 'Arizona'),
('CHRISTIAN','GABLE','CHRISTIAN.GABLE@abc.com','1531 Sal Drive','','Miami',33109,'6488569361', 'Florida');