document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.getElementById('close-modal');

  const livros = [
    {
      selector: '.detalhes-livro',
      codigo: '0001',
      nome: 'Para Todos Os Garotos Que Já Amei',
      cliente: 'Helena Lopes',
      imagem: 'subtelas_img/paratodososgarotosquejaamei.jpg',
      emprestimo: '2025-02-25',
      devolucao: '2025-04-27',
      renovacoes: 0,
      ultimaRenovacao: null  
    },
    {
      selector: '.detalhes-livro2',
      codigo: '0002',
      nome: 'O Cortiço',
      cliente: 'Ruan Melo',
      imagem: 'subtelas_img/ocortico.jpg',
      emprestimo: '2025-05-11',
      devolucao: '2025-05-18',
      renovacoes: 0,
      ultimaRenovacao: null
    },
    {
      selector: '.detalhes-livro3',
      codigo: '0003',
      nome: 'O Pequeno Príncipe',
      cliente: 'Matheus Dela',
      imagem: 'subtelas_img/opequenoprincipe.jpg',
      emprestimo: '2025-03-19',
      devolucao: '2025-04-02',
      renovacoes: 0,
      ultimaRenovacao: null
    },
    {
      selector: '.detalhes-livro4',
      codigo: '0004',
      nome: 'Matemática Básica',
      cliente: 'Mateus Rodrigues',
      imagem: 'subtelas_img/olivrodamatematica.jpg',
      emprestimo: '2025-05-24',
      devolucao: '2025-05-31',
      renovacoes: 0,
      ultimaRenovacao: null
    }
  ];

  function marcarAtraso(row) {
    const dataTexto = row.cells[4].textContent.trim();
    const [dia, mes, ano] = dataTexto.split('/');
    const data = new Date(`${ano}-${mes}-${dia}`);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    data.setHours(0, 0, 0, 0);

    if (data < hoje) {
      row.cells[4].classList.add('atrasado');
    } else {
      row.cells[4].classList.remove('atrasado');
    }
  }

  function reposicionarLivroNaTabela(linha, posicao) {
    const tbody = document.querySelector('#livros-table tbody');
    if (posicao === 'topo') {
      tbody.prepend(linha);
    } else if (posicao === 'fim') {
      tbody.append(linha);
    }
    marcarAtraso(linha);
  }

  function gerarFormulario(livro, cliente, imagem, emprestimo, devolucao) {
    const dataEmprestimo = new Date(emprestimo);
    const dataDevolucao = new Date(devolucao);
    const diferencaDias = Math.floor((dataDevolucao - dataEmprestimo) / (1000 * 60 * 60 * 24));
    const classeAtraso = diferencaDias > 7 ? 'atrasado' : '';

    return `
      <img src="${imagem}" title="Livro" class="hmlivro" />
      <h3 style="margin-top: 0;">RENOVAÇÃO OU DEVOLUÇÃO</h3>
      <form>
        <label for="cliente">Nome do cliente:</label>
        <input type="text" id="cliente" name="cliente" value="${cliente}" readonly>

        <label for="livro">Nome do livro:</label>
        <input type="text" id="livro" name="livro" value="${livro}" readonly>

        <div class="linha-dupla">
          <div class="input-group">
            <p>Empréstimo:</p>
            <input type="date" name="data" value="${emprestimo}" readonly>
          </div>
          <div class="input-group">
            <p>Devolução:</p>
            <input type="date" name="devolucao" value="${devolucao}" readonly class="${classeAtraso}">
          </div>
        </div>

        <div class="botao">
          <button type="submit" class="btn renovar">RENOVAR</button>
          <button type="submit" class="btn">DEVOLVIDO</button>
        </div>
      </form>
    `;
  }

  livros.forEach(({ selector, nome, cliente, imagem, emprestimo, devolucao }) => {
    document.querySelectorAll(selector).forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        modalBody.innerHTML = gerarFormulario(nome, cliente, imagem, emprestimo, devolucao);
        modal.style.display = 'block';
      });
    });
  });

  closeModal.onclick = () => modal.style.display = 'none';
  window.onclick = event => {
    if (event.target === modal) modal.style.display = 'none';
  };

  // RENOVAR
  document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('renovar')) {
      e.preventDefault();
      const form = e.target.closest('form');
      const nomeLivro = form.querySelector('input[name="livro"]').value;
      const devolucaoInput = form.querySelector('input[name="devolucao"]');
      const dataDevolucao = new Date(devolucaoInput.value);
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      dataDevolucao.setHours(0, 0, 0, 0);

      const livro = livros.find(l => l.nome === nomeLivro);
      if (!livro) return;

      if (livro.renovacoes >= 3) {
        Swal.fire('Limite de renovações atingido.', '', 'error');
        return;
      }

      if (livro.ultimaRenovacao) {
        const ultima = new Date(livro.ultimaRenovacao);
        const diff = Math.floor((hoje - ultima) / (1000 * 60 * 60 * 24));
        if (diff < 5) {
          Swal.fire('Espere 5 dias após a última renovação para renovar novamente.', '', 'info');
          return;
        }
      }

      if (dataDevolucao >= hoje) {
        const novaData = new Date(dataDevolucao);
        novaData.setDate(novaData.getDate() + 7);
        const novaDataFormatada = novaData.toISOString().split('T')[0];

        Swal.fire({
          title: 'Renovação feita com sucesso!',
          text: `Nova data de devolução: ${novaDataFormatada}`,
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#ffbcfc'
        }).then(() => {
          devolucaoInput.value = novaDataFormatada;
          livro.ultimaRenovacao = novaDataFormatada;
          livro.devolucao = novaDataFormatada;
          livro.renovacoes += 1;

          const linha = [...document.querySelectorAll('#livros-table tbody tr')]
            .find(tr => tr.cells[1].textContent.trim() === nomeLivro);

          if (linha) {
            const data = new Date(novaDataFormatada);
            linha.cells[4].textContent = data.toLocaleDateString('pt-BR');
            reposicionarLivroNaTabela(linha, 'topo');
          }

          modal.style.display = 'none';
        });

      } else {
        Swal.fire('LIVRO EM ATRASO!', 'Sem sucesso na renovação.', 'error');
      }
    }
  });

  // DEVOLVIDO
  document.addEventListener('click', function (e) {
    if (e.target && e.target.textContent.trim() === 'DEVOLVIDO') {
      e.preventDefault();
      const form = e.target.closest('form');
      const devolucaoInput = form.querySelector('input[name="devolucao"]');
      const dataDevolucao = new Date(devolucaoInput.value);
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      dataDevolucao.setHours(0, 0, 0, 0);

      const nomeLivro = form.querySelector('input[name="livro"]').value;
      const linha = [...document.querySelectorAll('#livros-table tbody tr')]
        .find(tr => tr.cells[1].textContent.trim() === nomeLivro);

      if (dataDevolucao < hoje) {
        Swal.fire({
          title: 'DEVOLUÇÃO REGISTRADA!',
          text: 'Devolução registrada com atraso.',
          icon: 'warning',
          confirmButtonText: 'OK',
          confirmButtonColor: '#ffbcfc'
        }).then(() => {
          if (linha) {
            linha.cells[4].textContent = dataDevolucao.toLocaleDateString('pt-BR');
            reposicionarLivroNaTabela(linha, 'fim');
          }
          modal.style.display = 'none';
        });
      } else {
        Swal.fire({
          title: 'DEVOLUÇÃO REGISTRADA!',
          text: 'Devolução registrada com sucesso.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#ffbcfc'
        }).then(() => {
          if (linha) {
            linha.cells[4].textContent = dataDevolucao.toLocaleDateString('pt-BR');
            reposicionarLivroNaTabela(linha, 'topo');
          }
          modal.style.display = 'none';
        });
      }
    }
  });
});

// Filtro de busca na tabela
document.getElementById('search-input').addEventListener('keyup', function () {
  const searchValue = this.value.toLowerCase();
  const rows = document.querySelectorAll('#livros-table tbody tr');
  rows.forEach(row => {
    const livro = row.cells[1].textContent.toLowerCase();
    row.style.display = livro.includes(searchValue) ? '' : 'none';
  });
});