SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
----
SELECT * FROM sakila.customer
WHERE store_id = 2
AND active IS TRUE
ORDER BY first_name;
----
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 18.00
ORDER BY replacement_cost, title DESC LIMIT 100;
----
SELECT COUNT(*) FROM sakila.customer
WHERE store_id = 1
AND active IS TRUE;
----
SELECT * FROM sakila.customer
WHERE store_id = 1
AND active IS FALSE;
----
SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title LIMIT 50;
----
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';
----
SELECT * FROM sakila.film
WHERE description LIKE '%china';
----
SELECT * FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';
----
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';
----
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';
----
SELECT * FROM sakila.film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
----
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';
----
SELECT * FROM sakila.payment
WHERE payment_id IN (269, 239, 126, 399, 142);
----
SELECT * FROM sakila.address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');
----
SELECT * FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;
----
SELECT * FROM sakila.customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY first_name;
----
SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01';
----
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date LIKE '2005-05-25%';
----
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';
----
SELECT DATE(rental_date), YEAR(rental_date),
MONTH(rental_date), DAY(rental_date),
HOUR(rental_date), MINUTE(rental_date), SECOND(rental_date)
FROM sakila.rental
WHERE rental_id = 10330;
----
SELECT * FROM sakila.rental
WHERE return_date LIKE '2005-07-28%'
AND HOUR(return_date) >= 22;