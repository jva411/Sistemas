/* Criar um banco de dados */
create database nodeteste;

/* Acessar o banco */
use nodeteste;

/* Criar uma tabela no banco */
create table usuarios(
    nome VARCHAR(40),
    email VARCHAR(50),
    idade TINYINT
);

/* Insere dados na tabela */
insert into usuarios(nome, email, idade) values(
    "João Victor",
    "j.victoralves411@gmail.com",
    19
);
insert into usuarios(nome, email, idade) values(
    "Carlos",
    "carlos@gmail.com",
    17
);

/* Procura dados na tabela */
select * from usuarios;

/* where adiciona uma condição */
select * from usuarios where idade < 18;

/* Remover da tabela */
delete from usuarios where nome = "Carlos";

/* Atualiza a tabela */
update usuarios set nome = "João Victor Alves de Oliveira", idade = 22 where email = "j.victoralves411@gmail.com";
