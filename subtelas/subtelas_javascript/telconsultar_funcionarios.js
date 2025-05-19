document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');
  
    const livros = [
      {
        selector: '.detalhes-funcionarios',
        codigo: '0001',
        nome: 'Silvio Luis de Sousa',
        cargo: 'Gerente',
        datanascimento: '21/03/1965',
        dataefetivacao:'08/07/2024',
        imagem: 'subtelas_img/eterno_silvio.webp',
      },
      {
        selector: '.detalhes-funcionarios2',
        codigo: '0002',
        nome: 'Maria da Graça Xuxa Meneghel',
        cargo: 'Gerente',
        datanascimento: '27/03/1963',
        dataefetivacao:'12/12/2024',
        imagem: 'subtelas_img/xuxa_nova.jpg',
      },
      {
        selector: '.detalhes-funcionarios3',
        codigo: '0003',
        nome: 'Ruan de Mello Vieira',
        cargo: 'Bibliotecário',
        datanascimento: '03/07/2007',
        dataefetivacao:'09/06/2025',
        imagem: 'subtelas_img/paratodososgarotosquejaamei.jpg',
      },
      {
        selector: '.detalhes-funcionarios4',
        codigo: '0004',
        nome: 'Marcos Paulo Fernandes',
        cargo: 'Repositor',
        datanascimento: '31/08/2008',
        dataefetivacao:'16/06/2025',
        imagem: 'subtelas_img/marcos_pdiddy.jpg',
      },
      {
        selector: '.detalhes-funcionarios5',
        codigo: '0005',
        nome: 'Gerard Arthur Way',
        cargo: 'Recreador',
        datanascimento: '09/04/1977',
        dataefetivacao:'05/02/2025',
        imagem: 'subtelas_img/gerard_way.jpg',
      },
      {
        selector: '.detalhes-funcionarios6',
        codigo: '0006',
        nome: 'Kim Sunoo',
        cargo: 'Repositor',
        datanascimento: '24/06/2003',
        dataefetivacao:'08/10/2024',
        imagem: 'subtelas_img/sunoo.jpg',
      },
      {
        selector: '.detalhes-funcionarios7',
        codigo: '0007',
        nome: 'Dwayne Douglas Johnson',
        cargo: 'Recreador',
        datanascimento: '02/05/1972',
        dataefetivacao:'29/09/2024',
        imagem: 'subtelas_img/Dwayne_Johnson.jpg',
      },
      {
        selector: '.detalhes-funcionarios8',
        codigo: '0008',
        nome: 'Rodrigo Pantera',
        cargo: 'Recreador',
        datanascimento: '25/01/2007',
        dataefetivacao:'11/03/2025',
        imagem: 'subtelas_img/paratodososgarotosquejaamei.jpg',
      },
      {
        selector: '.detalhes-funcionarios9',
        codigo: '0009',
        nome: 'Taylor Lautner',
        cargo: 'Bibliotecário',
        datanascimento: '19/12/1980',
        dataefetivacao:'17/08/2024',
        imagem: 'subtelas_img/taylor_lautner.jpg',
      },
      {
        selector: '.detalhes-funcionarios10',
        codigo: '0010',
        nome: 'James Hetfield',
        cargo: 'Gestor',
        datanascimento: '03/08/1963',
        dataefetivacao:'21/08/2024',
        imagem: 'subtelas_img/james_hetfield.webp',
      }
    ];

   const funcionarios = livros.map
    .forEach(funcionario => {
        const elemento = document.querySelector(funcionario.selector);
        if (elemento) {
          elemento.addEventListener('click', function (e) {
            e.preventDefault();
            modalBody.innerHTML = `
              <img src="${funcionario.imagem}" title="funcionário" class="hmfuncionario" />
              <h3 style="margin-top: 0;">Ficha do Funcionário</h3>
              <form>
                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" value="${funcionario.nome}" readonly>
      
                <label for="cargo">Cargo:</label>
                <input type="text" id="cargo" name="cargo" value="${funcionario.cargo}" readonly>
      
                <label for="nascimento">Data de Nascimento:</label>
                <input type="text" id="nascimento" name="nascimento" value="${funcionario.datanascimento}" readonly>
      
                <label for="efetivacao">Data de Efetivação:</label>
                <input type="text" id="efetivacao" name="efetivacao" value="${funcionario.dataefetivacao}" readonly>
              </form>
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
    })