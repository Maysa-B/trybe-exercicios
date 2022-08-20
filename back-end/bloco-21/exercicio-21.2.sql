SELECT * FROM pixar.box_office;
SELECT * FROM pixar.theater;
SELECT * FROM pixar.movies;

-- exercício 1
SELECT 
movies.title, box.domestic_sales, box.international_sales
FROM pixar.box_office box
INNER JOIN pixar.movies movies
ON movies.id = box.movie_id;

-- exercício 2
SELECT 
movies.title, box.domestic_sales, box.international_sales
FROM pixar.box_office box
INNER JOIN pixar.movies movies
ON movies.id = box.movie_id
WHERE box.domestic_sales < box.international_sales;

-- exercício 3
SELECT 
movies.title, box.rating
FROM pixar.box_office box
INNER JOIN pixar.movies movies
ON movies.id = box.movie_id
ORDER BY rating DESC;

-- exercício 4
SELECT
theater.id, theater.name, theater.location, movies.title, movies.director
FROM pixar.theater theater
LEFT JOIN pixar.movies movies
ON movies.theater_id = theater.id
ORDER BY theater.name;

-- exercício 5
SELECT
theater.id, theater.name, theater.location, movies.title, movies.director
FROM pixar.theater theater
RIGHT JOIN pixar.movies movies
ON movies.theater_id = theater.id
ORDER BY theater.name;

-- exercício 6
SELECT 
movies.title, movies.director, movies.year,
movies.length_minutes, theater.name, box.rating
FROM pixar.box_office box
INNER JOIN pixar.movies movies ON movies.id = box.movie_id
INNER JOIN pixar.theater theater ON theater.id = movies.theater_id
WHERE box.rating > 8;
