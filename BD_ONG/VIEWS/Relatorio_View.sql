create view Relatorio_View as
select Nome, Data_Relatorio, Tipo_Arquivo from Relatorio
WHERE Data_Relatorio between '2025-01-01' and '2025-12-31';