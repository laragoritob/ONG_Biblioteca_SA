document.addEventListener("DOMContentLoaded", function () {
  // Referências aos elementos do modal principal
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.getElementById('close-modal');

  // Elementos do modal e formulário de adição de livro
  const botaoAdicionar = document.getElementById('botao-adicionar');
  const modalAdicionar = document.getElementById('modal-adicionar');
  const closeAdicionar = document.getElementById('close-adicionar');
  const formAdicionar = document.getElementById('form-adicionar');
  const livroIdInput = document.getElementById('livro-id');

  // Conteúdos HTML para os livros
  const conteudoLivro1 = `
    <img src="img/paratodososgarotosquejaamei.jpg" title="Livro" class="hmlivro" />
    <h3 style="margin-top: 0;">Para Todos Os Garotos Que Já Amei</h3>
    <p>Lara Jean guarda suas cartas de amor em uma caixa azul-petróleo que ganhou da mãe. Não são cartas que ela recebeu de alguém, mas que ela mesma escreveu. Uma para cada garoto que amou — cinco ao todo. São cartas sinceras, sem joguinhos nem fingimentos, repletas de coisas que Lara Jean não diria a ninguém, confissões de seus sentimentos mais profundos.</p>
    <p>Até que um dia essas cartas secretas são misteriosamente enviadas aos destinatários, e de uma hora para outra a vida amorosa de Lara Jean sai do papel e se transforma em algo que ela não pode mais controlar.</p><br><br><br>
    <ul>
      <li><strong>Autora:</strong> Jenny Han</li>
      <li><strong>Gêneros:</strong> Ficção juvenil, Romance de amor</li>
      <li><strong>Editora:</strong> Simon & Schuster</li>
      <li><strong>Lançamento:</strong> 15 de abril de 2014</li>
    </ul>
  `;

  const conteudoLivro2 = `
    <img src="img/ocortico.jpg" title="Livro" class="hmlivro" />
    <h3 style="margin-top: 0;">O Cortiço</h3>
    <p>Pobreza, corrupção, injustiça, traição são elementos que integram O cortiço, principal obra do Naturalismo brasileiro. Nela, Aluísio Azevedo denuncia as mazelas sociais enfrentadas pelos moradores de um cortiço no Rio de Janeiro no século XIX. É um romance que convida a analisar por meio da observação crítica do cotidiano das personagens a animalização do ser humano, questão que se mostra, mais do que nunca, atual.</p><br><br><br><br><br><br>
    <ul>
      <li><strong>Autor:</strong> Aluísio Azevedo</li>
      <li><strong>Gêneros:</strong> Naturalismo</li>
      <li><strong>Editora:</strong> Editoras variadas</li>
      <li><strong>Lançamento:</strong> 1890</li>
    </ul>
  `;

  const conteudoLivro3 = `
    <img src="img/opequenoprincipe.jpg" title="Livro" class="hmlivro" />
    <h3>O Pequeno Príncipe</h3>
    <p>Nesta história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma aventura filosófica e poética através de planetas que encerram a solidão humana.<br><br><br>
    Um livro para todos os públicos, O pequeno príncipe é uma obra atemporal, com metáforas pertinentes e aprendizados sobre afeto, sonhos, esperança e tudo aquilo que é invisível aos olhos.</p><br><br><br><br><br>
    <ul>
      <li><strong>Autor:</strong> Antoine de Saint-Exupéry</li>
      <li><strong>Gênero:</strong> Fábula, Literatura Infantil</li>
      <li><strong>Editora:</strong> Gallimard</li>
      <li><strong>Lançamento:</strong> abril de 1943</li>
    </ul>
  `;

  const conteudoLivro4 = `
    <img src="img/olivrodamatematica.jpg" title="Livro" class="hmlivro" />
    <h3>O Livro da Matemática</h3>
    <p>O livro da matemática está repleto de explicações concisas, sem jargões, que descomplicam teorias complexas e citações que facilitam a visualização e memorização dos conceitos, além de ilustrações que complementam e brincam com nossa compreensão dos números.</p><br><br><br><br><br><br><br><br><br><br>
    <ul>
      <li><strong>Autor:</strong> Vários</li>
      <li><strong>Editora:</strong> Globo Livros</li>
      <li><strong>Gênero:</strong> Didático</li>
      <li><strong>Lançamento:</strong> 19 outubro 2020</li>
    </ul>
  `;

  // Função para abrir o modal com o conteúdo do livro
  function abrirModal(conteudo) {
    modalBody.innerHTML = conteudo;
    modal.style.display = 'block';
  }

  // Eventos para abrir modal com detalhes do livro 1
  document.querySelectorAll('.detalhes-livro').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      abrirModal(conteudoLivro1);
    });
  });

  // Eventos para abrir modal com detalhes do livro 2
  document.querySelectorAll('.detalhes-livro2').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      abrirModal(conteudoLivro2);
    });
  });

  // Eventos para abrir modal com detalhes do livro 3
  document.querySelectorAll('.detalhes-livro3').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      abrirModal(conteudoLivro3);
    });
  });

  // Eventos para abrir modal com detalhes do livro 4
  document.querySelectorAll('.detalhes-livro4').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      abrirModal(conteudoLivro4);
    });
  });

  // Fechar modal principal ao clicar no X
  closeModal.onclick = function () {
    modal.style.display = 'none';
  };

  // Fechar modal principal ao clicar fora da área do conteúdo
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Função para gerar ID aleatório de livro
  function gerarIdLivro() {
    const numero = Math.floor(1000 + Math.random() * 9000);
    return `#${numero}`;
  }

  // Abrir modal de adicionar livro e preencher o ID automaticamente
  if (botaoAdicionar && modalAdicionar && livroIdInput) {
    botaoAdicionar.addEventListener("click", () => {
      modalAdicionar.style.display = "block";
      livroIdInput.value = gerarIdLivro();
    });
  }

  // Fechar modal de adicionar livro ao clicar no X
  if (closeAdicionar && modalAdicionar && formAdicionar) {
    closeAdicionar.addEventListener("click", () => {
      modalAdicionar.style.display = "none";
      formAdicionar.reset();
    });
  }

  // Fechar modal de adicionar ao clicar fora do modal
  window.addEventListener("click", function (event) {
    if (event.target === modalAdicionar) {
      modalAdicionar.style.display = "none";
      formAdicionar.reset();
    }
  });

  // Filtrar livros na tabela conforme busca
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('keyup', function () {
      const searchValue = this.value.toLowerCase();
      const rows = document.querySelectorAll('#livros-table tbody tr');
      rows.forEach(row => {
        const livro = row.cells[1].textContent.toLowerCase();
        row.style.display = livro.includes(searchValue) ? '' : 'none';
      });
    });
  }

  // Adicionar novo livro na tabela ao enviar o formulário
  if (formAdicionar) {
    formAdicionar.addEventListener("submit", (e) => {
      e.preventDefault();

      const tabela = document.querySelector("#livros-table tbody");
      const novaLinha = tabela.insertRow();

      // Formata data de yyyy-mm-dd para dd/mm/yyyy
      const dataInput = document.getElementById("livro-data").value;
      const [ano, mes, dia] = dataInput.split("-");
      const dataFormatada = `${dia}/${mes}/${ano}`;

      novaLinha.innerHTML = `
        <td>${document.getElementById("livro-id").value}</td>
        <td><a href="#">${document.getElementById("livro-nome").value}</a></td>
        <td>${document.getElementById("livro-genero").value}</td>
        <td>${document.getElementById("livro-autor").value}</td>
        <td>${document.getElementById("livro-quantidade").value}</td>
        <td>${document.getElementById("livro-prateleira").value}</td>
        <td>${dataFormatada}</td>
        <td>${document.getElementById("livro-status").value}</td>
      `;

      modalAdicionar.style.display = "none";
      formAdicionar.reset();
    });
  }

  // Define data mínima para o input data como a data atual
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const mesAtual = String(hoje.getMonth() + 1).padStart(2, '0');
  const diaAtual = String(hoje.getDate()).padStart(2, '0');
  const dataHoje = `${anoAtual}-${mesAtual}-${diaAtual}`;
  const inputData = document.getElementById("livro-data");
  if (inputData) {
    inputData.setAttribute("min", dataHoje);
  }
});

// Validação do formulário de adicionar livro usando SweetAlert2
document.getElementById('form-adicionar').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const inputs = form.querySelectorAll('input[required]');
  let todosPreenchidos = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      todosPreenchidos = false;
    }
  });

  if (todosPreenchidos) {
    Swal.fire({
      title: 'Sucesso!',
      text: 'Livro cadastrado com sucesso!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#4CAF50'
    }).then(() => {
      form.reset();
    });
  } else {
    Swal.fire({
      title: 'Erro!',
      text: 'Por favor, preencha todos os campos obrigatórios.',
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: '#f44336'
    });
  }
});

document.getElementById('botao-cancelar').addEventListener('click', () => {
  Swal.fire({
    title: 'Cancelado!',
    text: 'Cadastro cancelado.',
    icon: 'warning',
    confirmButtonText: 'OK',
    confirmButtonColor: '#ff9800'
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById('form-adicionar').reset();
      document.getElementById('modal-adicionar').style.display = 'none';
    }
  });
});

// Cancelar cadastro com confirmação SweetAlert2
document.getElementById('cancelar-status').addEventListener('click', () => {
  Swal.fire({
    title: 'Cancelado!',
    text: 'Cadastro cancelado.',
    icon: 'warning',
    confirmButtonText: 'OK',
    confirmButtonColor: '#ff9800'
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById('form-status').reset();
      document.getElementById('modal-status').style.display = 'none';
    }
  });
});


// Modal para alterar status do livro

let livroSelecionado = null;

document.addEventListener("DOMContentLoaded", function () {
  const botaoMudar = document.getElementById('botao-mudar');
  const modalStatus = document.getElementById('modal-status');
  
  document.addEventListener("DOMContentLoaded", function () {
    const botaoMudar = document.getElementById('botao-mudar');
    const modalStatus = document.getElementById('modal-status');
    const closeStatus = document.getElementById('close-status');
    const cancelarStatus = document.getElementById('cancelar-status');
    const formStatus = document.getElementById('form-status');
  
    let livroSelecionado = null;
  
 // Abertura do modal após confirmação do ID
 botaoMudar.addEventListener("click", () => {
  Swal.fire({
    title: 'Digite o ID do livro',
    input: 'text',
    inputLabel: 'ID do livro (ex: #0001)',
    inputPlaceholder: 'Insira o ID aqui',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#4CAF50',
    cancelButtonColor: '#f44336',
    inputValidator: (value) => {
      if (!value.trim()) return 'Você precisa digitar um ID!';
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const idDigitado = result.value.trim();
      const linhas = document.querySelectorAll("#livros-table tbody tr");

      livroSelecionado = null;

      linhas.forEach((linha) => {
        const idCelula = linha.querySelector("td").textContent.trim();
        console.log("Comparando:", idCelula, idDigitado); // DEBUG

        if (idCelula === idDigitado) {
          livroSelecionado = linha;
        }
      });

      if (!livroSelecionado) {
        Swal.fire({
          icon: 'error',
          title: 'Livro não encontrado',
          text: `Nenhum livro com ID ${idDigitado} foi encontrado.`,
        });
      } else {
        modalStatus.style.display = "block";
      }
    }
  });
});

closeStatus.addEventListener("click", () => {
  modalStatus.style.display = "none";
});

cancelarStatus.addEventListener("click", () => {
  modalStatus.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modalStatus) {
    modalStatus.style.display = "none";
  }
});
});
});