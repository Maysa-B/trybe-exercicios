-- strings
SELECT UCASE('trybe');
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
SELECT CHAR_LENGTH('Uma frase qualquer');
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
-- condicionais
SELECT film_id, title, rating,
IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM sakila.film;
SELECT title, rating,
CASE
	WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
END AS 'público-alvo'
FROM sakila.film;
-- DIV e MOD
SELECT IF(15 MOD 2 = 0, 'Par', 'Impar') AS 'Par ou ímpar';
SELECT 220 DIV 12;
SELECT 220 MOD 12;
-- arredondamento
SELECT ROUND(15 + (RAND() * 5));
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494);
SELECT CEIL(85.234);
-- datas
SELECT DATEDIFF('2030-01-20', '2022-08-11');
SELECT TIMEDIFF( '10:25:45', '11:00:00');
-- funções de agregação
SELECT AVG(length) AS 'Média de Duração' FROM sakila.film;
SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film;
SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film;
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film;
SELECT COUNT(*) AS 'Filmes registrados' FROM sakila.film;
-- group by
SELECT active, COUNT(*) FROM sakila.customer
GROUP BY active;
SELECT store_id, active, COUNT(*) FROM sakila.customer
GROUP BY store_id, active;
SELECT rating, AVG(rental_duration) AS 'media' FROM sakila.film
GROUP BY rating
ORDER BY media DESC;
SELECT district, COUNT(*) AS 'quantidade' FROM sakila.address
GROUP BY district
ORDER BY quantidade DESC;
-- having
SELECT rating, AVG(length) AS media
FROM sakila.film
GROUP BY rating
HAVING media BETWEEN 115.0 AND 121.50
ORDER BY media DESC;
SELECT rating, SUM(replacement_cost) AS total
FROM sakila.film
GROUP BY rating
HAVING total > 3950.50
ORDER BY total ASC;