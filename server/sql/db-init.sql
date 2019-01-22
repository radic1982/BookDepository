use bookdepo;

INSERT INTO `bookdepo`.`category` (`name`) VALUES ('kultura');
INSERT INTO `bookdepo`.`category` (`name`) VALUES ('zivot');
INSERT INTO `bookdepo`.`category` (`name`) VALUES ('sport');

INSERT INTO `bookdepo`.`language` (`name`) VALUES ('srpski');
INSERT INTO `bookdepo`.`language` (`name`) VALUES ('english');
INSERT INTO `bookdepo`.`language` (`name`) VALUES ('italiano');


INSERT INTO `bookdepo`.`ebook` (`title`, `author`, `publication_Year`, `language_id ` `category_id`) VALUES 
				('Price za malu decu', 'Ranko Rankic', '1997', '1', '1');
INSERT INTO `bookdepo`.`ebook` (`title`, `author`, `publication_Year`, `language_id ` `category_id`) VALUES 
				('Ghost stories', 'John Wayne', '1955', '2', '2');
INSERT INTO `bookdepo`.`ebook` (`title`, `author`, `publication_Year`, `language_id ` `category_id`) VALUES 	
				('Il Duce trafficante', 'Marcello Bandini', '2003', '3', '2');
INSERT INTO `bookdepo`.`ebook` (`title`, `author`, `publication_Year`, `language_id ` `category_id`) VALUES 
				('Pametne izjave fudbalera', 'Slobodan Sarenac', '2012', '1', '3');
INSERT INTO `bookdepo`.`ebook` (`title`, `author`, `publication_Year`, `language_id ` `category_id`) VALUES 
				('Oro ja njivu', 'Nikola Pejakovic', '1989', '1', '1');

-- insert users
-- password is 12345 (bcrypt encoded) 
insert into security_user (username, password, first_name, last_name, role) values 
	('admin', '$2a$04$4pqDFh9SxLAg/uSH59JCB.LwIS6QoAjM9qcE7H9e2drFuWhvTnDFi', 'Admin', 'Admin', 'ADMINISTRATOR');
-- password is abcdef (bcrypt encoded)
insert into security_user (username, password, first_name, last_name, role) values 
	('petar', '$2a$04$Yr3QD6lbcemnrRNLbUMLBez2oEK15pdacIgfkvymQ9oMhqsEE56EK', 'Petar', 'Petrovic', 'SUBSCRIBER');
