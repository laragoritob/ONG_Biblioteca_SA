const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.getElementById('close-modal');

  const funcionario = [
    {
      selector: '.detalhes-funcionarios',
      codigo: '0001',
      cpf:'153.204.489-17',
      escolaridade:'Ensino Superior Completo',
      estado:'São Paulo',
      civil:' Casado',
      cidade:'Campinas',
      bairro:'Taquaral',
      rua:'Rua José Villare',
      numero:'145',
      sexo:'Masculino',
      telefone:'(19) 99745-2210',
      nome: 'Silvio Luis de Sousa',
      cargo: 'Gerente',
      nascimento: '21/03/1965',
      dataefetivacao: '08/07/2024',
      imagem: 'subtelas_img/eterno_silvio.webp',
    },
    {
      selector: '.detalhes-funcionarios2',
      codigo: '0002',
      cpf:'230.871.112-04',
      escolaridade:'Ensino Médio Completo',
      estado:'Rio de Janeiro',
      civil:'Divorciada',
      cidade:'Niterói',
      bairro:' Icaraí',
      rua:' Rua Álvares de Azevedo',
      numero:'88',
      sexo:'Feminino',
      telefone:'(21) 98711-3390',
      nome: 'Maria da Graça Xuxa Meneghel',
      cargo: 'Gerente',
      datanascimento: '27/03/1963',
      dataefetivacao: '12/12/2024',
      imagem: 'subtelas_img/xuxa_nova.jpg',
    },
    {
      selector: '.detalhes-funcionarios3',
      codigo: '0003',
      cpf:'401.562.870-39',
      escolaridade:'Ensino Médio Incompleto',
      estado:'Santa Catarina',
      civil:'Solteiro',
      cidade:'Joinville',
      bairro:'América',
      rua:'Rua Expedicionário Holz',
      numero:'201',
      sexo:'Masculino',
      telefone:'(47) 99821-0543',
      nome: 'Ruan de Mello Vieira',
      cargo: 'Bibliotecário',
      datanascimento: '03/07/2007',
      dataefetivacao: '09/06/2025',
      imagem: 'subtelas_img/paratodososgarotosquejaamei.jpg',
    },
    {
      selector: '.detalhes-funcionarios4',
      codigo: '0004',
      cpf:'Ensino Fundamental Completo',
      escolaridade:'Ensino Fundamental Completo',
      estado:'Bahia',
      civil:' Solteiro',
      cidade:'Salvador',
      bairro:'Itapuã',
      rua:'Rua Genipabu',
      numero:'76',
      sexo:'Masculino',
      telefone:'(71) 98144-6732',
      nome: 'Marcos Paulo Fernandes',
      cargo: 'Repositor',
      datanascimento: '31/08/2008',
      dataefetivacao: '16/06/2025',
      imagem: 'subtelas_img/marcos_pdiddy.jpg',
    },
    {
      selector: '.detalhes-funcionarios5',
      codigo: '0005',
      cpf:'082.119.794-22',
      escolaridade:'Ensino Superior Completo',
      estado:'Minas Gerais',
      civil:'Casado',
      cidade:'Belo Horizonte',
      bairro:'Savassi',
      rua:'Rua Pernambuco',
      numero:'309',
      sexo:'Masculino',
      telefone:'(31) 99700-7855',
      nome: 'Gerard Arthur Way',
      cargo: 'Recreador',
      datanascimento: '09/04/1977',
      dataefetivacao: '05/02/2025',
      imagem: 'subtelas_img/gerard_way.webp',
    },
    {
      selector: '.detalhes-funcionarios6',
      codigo: '0006',
      cpf:'104.163.459-56',
      escolaridade:'Ensino Superior Completo',
      estado:'Paraná',
      civil:'Solteiro',
      cidade:'Magé',
      bairro:'Santa Candida',
      rua:'Albino Kolbach',
      numero:'196',
      sexo:'Masculino',
      telefone:'(21) 98861-4670',
      nome: 'Kim Sunoo',
      cargo: 'Repositor',
      datanascimento: '24/06/2003',
      dataefetivacao: '08/10/2024',
      imagem: 'subtelas_img/sunoo.jpg',
    },
    {
      selector: '.detalhes-funcionarios7',
      codigo: '0007',
      cpf:'123.456.789-10',
      escolaridade:' Ensino Superior Completo ',
      estado:'Rio de Janeiro',
      civil:' Casado',
      cidade:'Curitiba',
      bairro:'Costa e Silva',
      rua:'Bernardo Welter',
      numero:'51',
      sexo:'Masculino',
      telefone:'21) 98861-4670',
      nome: 'Dwayne Douglas Johnson',
      cargo: 'Recreador',
      datanascimento: '02/05/1972',
      dataefetivacao: '29/09/2024',
      imagem: 'subtelas_img/Dwayne_Johnson.jpg',
    },
    {
      selector: '.detalhes-funcionarios8',
      codigo: '0008',
      cpf:'093.861.509-93',
      escolaridade:' Ensino Médio Incompleto',
      estado:'Pernambuco',
      civil:'Solteiro',
      cidade:' Recife',
      bairro:'Boa Vista',
      rua:'Rua do Sossego',
      numero:'132',
      sexo:'Masculino',
      telefone:'(81) 98422-1108',
      nome: 'Rodrigo Pantera',
      cargo: 'Recreador',
      datanascimento: '25/01/2007',
      dataefetivacao: '11/03/2025',
      imagem: 'subtelas_img/paratodososgarotosquejaamei.jpg',
    },
    {
      selector: '.detalhes-funcionarios9',
      codigo: '0009',
      cpf:'188.612.345-77',
      escolaridade:'Ensino Superior Completo',
      estado:'Rio Grande do Sul',
      civil:'Solteiro',
      cidade:'Porto Alegre',
      bairro:'Moinhos de Vento',
      rua:'Rua Padre Chagas',
      numero:'441',
      sexo:'Masculino',
      telefone:'(51) 99874-6632',
      nome: 'Taylor Lautner',
      cargo: 'Bibliotecário',
      datanascimento: '19/12/1980',
      dataefetivacao: '17/08/2024',
      imagem: 'subtelas_img/taylor_lautner.jpg',
    },
    {
      selector: '.detalhes-funcionarios10',
      codigo: '0010',
      cpf:'321.997.008-63',
      escolaridade:'Ensino Superior Completo',
      estado:' São Paulo',
      civil:'Masculino',
      cidade:'Santo André',
      bairro:'Jardim',
      rua:'Rua das Palmeiras',
      numero:'321',
      sexo:'Masculino',
      telefone:'(11) 98671-9932',
      nome: 'James Hetfield',
      cargo: 'Gestor',
      datanascimento: '03/08/1963',
      dataefetivacao: '21/08/2024',
      imagem: 'subtelas_img/james_hetfield.jpg',
    }
  ];

  funcionario.forEach(funcionario => {
    const elemento = document.querySelector(funcionario.selector);
    if (elemento) {
      elemento.addEventListener('click', function (e) {
        e.preventDefault();
        modalBody.innerHTML = `
  <img src="${funcionario.imagem}" title="funcionário" class="hmfuncionario" />
  <h3 style="margin-top: 0;">Ficha de ${funcionario.nome}</h3>

  <p><strong>Nome:</strong> ${funcionario.nome}</p>
  <p><strong>CPF:</strong> ${funcionario.cpf}</p>

  <p><strong>Estado Civil:</strong> ${funcionario.civil}</p>
  <p><strong>Escolaridade:</strong> ${funcionario.escolaridade}</p>

  <p><strong>Cargo:</strong> ${funcionario.cargo}</p>
  <p><strong>Data de Nascimento:</strong> ${funcionario.nascimento}</p>

  <p><strong>Estado:</strong> ${funcionario.estado}</p>

  <p><strong>Cidade:</strong> ${funcionario.cidade}</p>
  <p><strong>Bairro:</strong> ${funcionario.bairro}</p>

  <p><strong>Rua:</strong> ${funcionario.rua}</p>
  <p><strong>Número:</strong> ${funcionario.numero}</p>

  <p><strong>Estado Civil:</strong> ${funcionario.civil}</p>
  <p><strong>Escolaridade:</strong> ${funcionario.escolaridade}</p>
`;

   modal.style.display = 'block';
      });
      
    }
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });

function gerarFormulario(funcionario, cpf, sexo, civil, escolaridade, cargo, 
  estado, cidade, nascimento, bairro, telefone, numero, rua, imagem, editar, desativar) {

  return `
    <img src="${imagem}" title="funcionario" class="hmfuncionario" />
    <h3 style="margin-top: 0;">Ficha de ${funcionario.nome}</h3>
    <form>
      <label for="funcionario">Nome:</label>
      <input type="text" id="nome" name="funcionario" value="${funcionario}" readonly>

      <label for="cpf">CPF:</label>
      <input type="number" id="cpf" name="funcionario" value="${cpf}" readonly>

      <label for="sexo">Sexo:</label>
      <input type="text" id="sexo" name="funcionario" value="${sexo}" readonly>

      <label for="estado civil">Estado Civil:</label>
      <input type="text" id="civil" name="funcionario" value="${civil}" readonly>

      <label for="escolariade">Escolariade:</label>
      <input type="text" id="escolaridade" name="escolaridade" value="${escolaridade}" readonly>

      <label for="cargo">Cargo:</label>
      <input type="text" id="cargo" name="cargo" value="${cargo}" readonly>

      <label for="cliente">Data de Nascimento:</label>
      <input type="date" id="data" name="data" value="${nascimento}" readonly>

      <label for="estado">Estado:</label>
      <input type="text" id="estado" name="estado" value="${estado}" readonly>

      <label for="cidade">Cidade:</label>
      <input type="text" id="cidade" name="cidade" value="${cidade}" readonly>

      <label for="bairro">Bairro:</label>
      <input type="text" id="bairro" name="bairro" value="${bairro}" readonly>

      <label for="rua">Rua:</label>
      <input type="text" id="rua" name="rua" value="${rua}" readonly>

      <label for="numero">Numero:</label>
      <input type="number" id="numero" name="numero" value="${numero}" readonly>

      <label for="tefone">Telefone:</label>
      <input type="number" id="tefone" name="tefone" value="${telefone}" readonly>

      <div class="linha-dupla">
        <div class="input-group">
          <p>Editar:</p>
          <input type="date" name="text" value="${editar}" readonly>
        </div>

        <div class="input-group">
          <p>Desativar:</p>
          <input type="text" name="devolucao" value="${desativar}" readonly">
        </div>
      </div>

      <div class="botao">
        <button type="submit" class="btn editar">EDITAR</button>
        <button type="submit" class="btn">DESATIVAR</button>
      </div>
    </form>
  `;
}


// CAMPO DE BUSCA
document.getElementById('search-input').addEventListener('keyup', function () {
  const searchValue = this.value.toLowerCase();
  const rows = document.querySelectorAll('#funcionarios-table tbody tr');
  rows.forEach(row => {
    const funcionario = row.cells[1].textContent.toLowerCase();
    row.style.display = funcionario.includes(searchValue) ? '' : 'none';
  });
});