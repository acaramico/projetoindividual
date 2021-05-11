create database projetoindividual;
use projetoindividual;

create table Planos(
	idPlanos int primary key auto_increment,
    tipoPlano varchar(45)
    );
    
create table Endereco(
	idEndereco int primary key auto_increment,
    CEP char(9),
    Logradouro varchar(45),
    Bairro varchar(45),
    Cidade varchar(45),
    Estado char(2),
    Numero int
    ) auto_increment = 100;
    
create table Cliente(
	idCliente int primary key auto_increment,
    nomeCliente varchar(45),
    Email varchar(45),
    Celular char(14),
    CPF char(14),
    dataNasc date,
    senhaCliente varchar(45),
    fkPlanos int,
    FkEndereco int,
    foreign key (fkPlanos) references Planos(idPlanos),
    foreign key (fkEndereco) references Endereco(idEndereco)
    );