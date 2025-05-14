create table Emprestimo (
	Cod_Emprestimo int not null,
	Cod_Cliente int not null,
    Cod_Livro int not null,
    Data_Emprestimo date not null,
    Data_Devolucao date not null,
    
    constraint PK_Emprestimo primary key (Cod_Emprestimo),
    constraint FK_Cliente_Emprestimo foreign key (Cod_Cliente) references Cliente(Cod_Cliente),
    constraint FK_Livro_Emprestimo foreign key (Cod_Livro) references Livro(Cod_Livro)
);
    