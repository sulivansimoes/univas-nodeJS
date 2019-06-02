--#####################################################
--## SCRITP UTILIZADO PARA CRIAÇÃO DO BANCO DE DADOS ##
--#####################################################
--## CRIAÇÃO DO BANCO DE DADOS                       ##
--#####################################################
create database petshop;


--#####################################################
--## CRIAÇÃO TABELA CLIENTE                          ##
--#####################################################
create table cliente(
	id int auto_increment primary key,
    nome varchar(40) not null,
	cpf varchar(11) not null,
	email varchar(60)not null,
    nascimento date not null,
    telefone varchar(10) not null,
    endereco varchar(100) not null  
);


--#####################################################
--## CRIAÇÃO TABELA PET                              ##
--#####################################################
create table pet (

	id int auto_increment primary key,
    nome varchar(30) not null,
    id_dono int not null,
    raca varchar(30) not null,
    sexo char(1) not null,
    nascimento date not null,
    tamanho int not null -- cada tamaho é um número, Exemplo 1= pequeno, 2=medio
);


--#####################################################
--## CRIAÇÃO TABELA AGENDA                           ##
--#####################################################
create table agenda (

	id int auto_increment primary key,
    id_pet int not null,
    data_agenda date not null,
    servico int not null, -- Cada servico é um numero. Exemplo 1= banho, 2= tosa
    horario_agenda time not null,
    valor float not null
);