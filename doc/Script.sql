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
    Numero int,
    fkCliente int,
    foreign key (fkCliente) references Cliente(idCliente)
    ) auto_increment = 100;
    
create table Cliente(
	idCliente int primary key auto_increment,
    nomeCliente varchar(45),
    Email varchar(45),
    Celular char(14),
    CPF char(14),
    dataNasc date,
    senhaCliente varchar(45),
    CEP char(9) default null,
    Logradouro varchar(45),
    Bairro varchar(45),
    Cidade varchar(45),
    Estado char(2),
    Numero int,
    fkPlanos int,
    foreign key (fkPlanos) references Planos(idPlanos)
    );
    select * from cliente;
    select * from endereco;
	select * from planos;
    
    insert into Planos values(null,'Mensal'),(null,'Bimestral');
    
    create table Premios(
		idAno int primary key auto_increment,
        Nomeaçoes int,
        Ganhos int
        ) auto_increment = 2013;
        
        insert into Premios values(null,2,1),(null,7,5),(null,17,10),(null,31,14),
        (null,58,31),(null,112,89),(null,130,101),(null,107,76),(null,77,42);
        
        select * from premios;
    
    
   
    

