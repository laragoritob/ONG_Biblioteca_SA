create view Cliente_View as 
select nome, CPF, Data_Nascimento, UF from Cliente
WHERE UF like 'RJ';