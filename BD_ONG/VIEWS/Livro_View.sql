create view Livro_View as
select titulo, genero, nome_autor, quantidade from livro
WHERE quantidade > 10;