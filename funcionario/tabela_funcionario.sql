create table funcionario (
	id_funcionario int not null,
    nome varchar (50) not null,
    cpf varchar(15) not null,
    sexo char (2) not null,
    nome_responsavel varchar(50),
    nacionalidade varchar(20) not null,
    escolaridade varchar(40),
    telefone varchar(20) not null,
    rg varchar(15) not null,
    data_nascimento date not null,
    data_efetivacao date not null,
    cep varchar(20) not null,
    uf char(2) not null,
    cidade varchar(30) not null,
    bairro varchar(30) not null,
    rua varchar(40) not null,
    num_residencia int not null,
    usuario varchar(20) not null,
    senha varchar(20) not null,
    cargo varchar(20) not null,
    
    constraint pk_funcionario primary key (id_funcionario)
);
    