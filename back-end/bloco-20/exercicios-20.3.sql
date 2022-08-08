SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'GR%';
----
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2 ORDER BY fornecedor;
----
SELECT peca, Preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE fornecedor LIKE '%n%';
----
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA%' ORDER BY name DESC;
----
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';
----
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE preco BETWEEN 15 AND 40 ORDER BY preco ASC;
----
SELECT COUNT(*) FROM PecasFornecedores.Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';

-- bônus
SELECT * FROM Scientists.Scientists
WHERE name LIKE '%e%';
----
SELECT * FROM Scientists.Projects
WHERE code LIKE 'A%';
----
SELECT code, name FROM Scientists.Projects
WHERE code LIKE '%3%' ORDER BY name;
----
SELECT scientist FROM Scientists.AssignedTo
WHERE project IN ('AeH3', 'Ast3', 'Che1');
----
SELECT * FROM Scientists.Projects
WHERE hours > 500;
----
SELECT * FROM Scientists.Projects
WHERE hours BETWEEN 250 AND 800;
----
SELECT name, code FROM Scientists.Projects
WHERE code NOT LIKE 'A%';
----
SELECT name FROM Scientists.Projects
WHERE code LIKE '%h%';