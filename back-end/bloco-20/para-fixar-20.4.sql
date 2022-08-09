INSERT INTO sakila.staff (first_name, last_name, address_id, 
email, store_id, username, `password`)
VALUES (
'Maysa', 'Salvalaio', 1, 'maybsalvalaio@gmail.com', 1, 'May', 'senha123');
--
INSERT INTO sakila.staff (first_name, last_name, address_id, 
email, store_id, username, `password`)
VALUES 
('Fulano', 'Silva', 5, 'fulano@gmail.com', 2, 'Fulano', 'senhaFulano'),
('Beltrano', 'Souza', 2, 'ciclano@gmail.com', 1, 'Ciclano', 'senhaCiclano');
--
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
WHERE customer_id IN (1, 2, 3, 4, 5);
--
INSERT INTO sakila.category (`name`) VALUES
('Romance'),
('Romantic Comedy'),
('Psicologic Horror');
--
INSERT INTO sakila.store (manager_staff_id, address_id) 
VALUES (3, 8);
--
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';
--
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';
--
UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13')
AND replacement_cost > 20;
--
UPDATE sakila.film
SET rental_rate = (
CASE
WHEN `length` BETWEEN 1 AND 100 THEN 10
WHEN `length` > 100 THEN 20
END);
--
DELETE FROM sakila.film_actor -- tabela linkada
WHERE actor_id = 12;
DELETE FROM sakila.actor -- dado a ser excluído
WHERE first_name = 'karl';
--
SELECT * FROM sakila.actor WHERE first_name = 'MATTHEW'; -- ID: 8, 103, 181

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';
--
DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';
--
TRUNCATE film_actor;
TRUNCATE film_category;
--