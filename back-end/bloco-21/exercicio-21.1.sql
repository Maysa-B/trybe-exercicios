-- 1
SELECT MAX(salary) FROM hr.employees;
-- 2
SELECT MAX(salary) - MIN(salary) FROM hr.employees;
-- 3
SELECT job_id, AVG(salary) AS average FROM hr.employees
GROUP BY job_id
ORDER BY average DESC;
-- 4
SELECT SUM(salary) AS total FROM hr.employees;
-- 5
SELECT 
ROUND(MAX(salary), 2) AS 'MAX',
ROUND(MIN(salary), 2) AS 'MIN',
ROUND(SUM(salary), 2) AS 'SUM',
ROUND(AVG(salary), 2) AS 'AVG'
FROM hr.employees;
-- 6
SELECT COUNT(*) FROM hr.employees
WHERE job_id = 'IT_PROG';
-- 7
SELECT job_id, SUM(salary) AS average FROM hr.employees
GROUP BY job_id
ORDER BY average DESC;
-- 8
SELECT job_id, SUM(salary) AS average FROM hr.employees
WHERE job_id = 'IT_PROG'
ORDER BY average DESC;
-- 9
SELECT job_id, AVG(salary) AS average FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY average DESC;
-- 10
SELECT AVG(salary) AS MEDIA, COUNT(*) AS FUNCIONARIOS FROM hr.employees
GROUP BY department_id
HAVING FUNCIONARIOS > 10;
-- 11
SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';
-- 12
SELECT * FROM hr.employees
WHERE CHAR_LENGTH(first_name) >= 8;
-- 13
SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;
-- 14
SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;
-- 15
SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;
-- 16
SELECT UCASE(first_name) FROM hr.employees;
-- 17
SELECT last_name, hire_date FROM hr.employees
WHERE MONTH(hire_date) = 7
AND YEAR(hire_date) = 1987;
-- 18
SELECT 
first_name, last_name, 
DATEDIFF(now(), hire_date)
FROM hr.employees;