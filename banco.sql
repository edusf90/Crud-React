INSERT INTO tasks (title, description)
VALUES ('Tom B. Erichsen', 'Skagen 21');

SELECT * FROM `to-do-list`.tasks;

DELETE FROM `to-do-list`.tasks;

UPDATE `to-do-list`tasks SET description="a" WHERE deleted=0;