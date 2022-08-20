-- fixação 21.3
DROP SCHEMA IF EXISTS normalization;
	CREATE DATABASE normalization;
    USE normalization;
    
    CREATE TABLE funcionarios (
		funcionario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(50),
        sobrenome VARCHAR(50),
        contato VARCHAR(100),
        telefone VARCHAR(50),
        data_cadastro DATETIME
    ) engine=InnoDB;
    
    CREATE TABLE setor (
		setor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        setor VARCHAR(50)
    ) engine=InnoDB;
    
    CREATE TABLE setor_funcionario (
		setor_id INTEGER,
        funcionario_id INTEGER,
        FOREIGN KEY(setor_id) REFERENCES setor (setor_id),
        FOREIGN KEY(funcionario_id) REFERENCES funcionarios (funcionario_id)
    ) engine=InnoDB;
    
    INSERT INTO funcionarios(funcionario_id, nome, sobrenome, contato, telefone, data_cadastro)
		VALUES (12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
		(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
        (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
        (15, 'Fernanda', 'Mendes',	'fernandamendes@yahoo.com',	'(33)99200-1556', '2020-05-05 11:45:40');
        
	INSERT INTO setor(setor) VALUES
		('Administração'), ('Operacional'), ('Estratégico'), ('Marketing'), ('Vendas');
	
    INSERT INTO setor_funcionario(setor_id, funcionario_id) VALUES
    (1, 12), (2, 13), (3, 14), (4, 15), (5, 12), (5, 14);
