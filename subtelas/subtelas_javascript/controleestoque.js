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

  // Conteúdos HTML para cada livro (usados no modal de detalhes)
  // Para Todos os Garotos Que Já Amei
  const conteudoLivro = `
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

  // O Cortiço
  const conteudoLivro2 = `
    <img src="img/ocortico.jpg" title="Livro" class="hmlivro" />
    <h3 style="margin-top: 0;">O Cortiço</h3>
    <p>Pobreza, corrupção, injustiça, traição são elementos integram O cortiço, principal obra do Naturalismo brasileiro. Nela, Aluísio Azevedo denuncia as mazelas sociais enfrentadas pelos moradores de um
    cortiço no Rio de Janeiro no século XIX. É um romance que convida a analisar por meio da observação crítica do cotidiano das personagens a animalização do ser humano, questão que se mostra, mais do que nunca, atual.</p><br><br><br><br><br><br>
    <ul>
      <li><strong>Autor:</strong> Aluísio Azevedo</li>
      <li><strong>Gêneros:</strong> Naturalismo</li>
      <li><strong>Editora:</strong> Editoras variadas</li>
      <li><strong>Lançamento:</strong> 1890</li>
    </ul>
  `;

  // O Pequeno Príncipe
  const conteudoLivro3 = `
    <img src="img/opequenoprincipe.jpg" title="Livro" class="hmlivro" />
    <h3>O Pequeno Príncipe</h3>
    <p>Nesta história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe,
    que o leva a uma aventura filosófica e poética através de planetas que encerram a solidão humana.<br><br><br>
    Um livro para todos os públicos, O pequeno príncipe é uma obra atemporal, com metáforas pertinentes e aprendizados sobre afeto, sonhos, esperança e tudo aquilo que é invisível aos olhos.</p><br><br><br><br><br>
    <ul>
      <li><strong>Autor:</strong> Antoine de Saint-Exupéry</li>
      <li><strong>Gênero:</strong> Fábula, Literatura Infantil</li>
      <li><strong>Editora:</strong> Gallimard</li>
      <li><strong>Lançamento:</strong> abril de 1943</li>
    </ul>
  `;

  // O Livro da Matemática
  const conteudoLivro4 = `
    <img src="img/olivrodamatematica.jpg" title="Livro" class="hmlivro" />
    <h3>O Livro da Matemática</h3>
    <p>O livro da matemática está repleto de explicações concisas, sem jargões, que descomplicam teorias complexas e citações que facilitam a visualização e memorização dos conceitos
    além de ilustrações que complementam e brincam com nossa compreensão dos números.</p><br><br><br><br><br><br><br><br><br><br>
    <ul>
      <li><strong>Autor:</strong> Vários</li>
      <li><strong>Editora:</strong> Globo Livros</li>
      <li><strong>Gênero:</strong> Didático</li>
      <li><strong>Lançamento:</strong> 19 outubro 2020</li>
    </ul>
  `;

  // Função para abrir o modal com conteúdo passado
  function abrirModal(conteudo) {
    modalBody.innerHTML = conteudo;
    modal.style.display = 'block';
  }

  // Eventos para abrir modal com detalhes do livro 1
  document.querySelectorAll('.detalhes-livro').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      abrirModal(conteudoLivro);
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

  // Fechar modal principal ao clicar no botão X
  closeModal.onclick = function () {
    modal.style.display = 'none';
  };

  // Fechar modal de adicionar ao clicar fora do modal
  window.addEventListener("click", function (event) {
    const modalAdicionar = document.getElementById("modal-adicionar");
    if (event.target === modalAdicionar) {
      modalAdicionar.style.display = "none";
      document.getElementById("form-adicionar").reset(); // limpa o formulário
    }
  });

  // Filtro de busca na tabela de livros
  document.getElementById('search-input').addEventListener('keyup', function () {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#livros-table tbody tr');
    rows.forEach(row => {
      const livro = row.cells[1].textContent.toLowerCase();
      row.style.display = livro.includes(searchValue) ? '' : 'none'; // mostra ou esconde linhas
    });
  });

  // Função para gerar um ID aleatório de livro com prefixo #
  function gerarIdLivro() {
    const numero = Math.floor(1000 + Math.random() * 9000);
    return `#${numero}`;
  }

  // Abrir modal de adicionar livro e preencher ID automaticamente
  if (botaoAdicionar && modalAdicionar && livroIdInput) {
    botaoAdicionar.addEventListener("click", () => {
      modalAdicionar.style.display = "block";
      livroIdInput.value = gerarIdLivro();
    });
  }

  // Fechar modal de adicionar e resetar formulário
  if (closeAdicionar && modalAdicionar && formAdicionar) {
    closeAdicionar.addEventListener("click", () => {
      modalAdicionar.style.display = "none";
      formAdicionar.reset();
    });
  }

  // Submeter novo livro e adicionar na tabela
  if (formAdicionar) {
    formAdicionar.addEventListener("submit", (e) => {
      e.preventDefault();

      const tabela = document.getElementById("livros-table").getElementsByTagName("tbody")[0];
      const novaLinha = tabela.insertRow();

      // Inserindo dados na nova linha da tabela
      novaLinha.innerHTML = `
        <td>${document.getElementById("livro-id").value}</td>
        <td><a href="#">${document.getElementById("livro-nome").value}</a></td>
        <td>${document.getElementById("livro-genero").value}</td>
        <td>${document.getElementById("livro-autor").value}</td>
        <td>${document.getElementById("livro-quantidade").value}</td>
        <td>${document.getElementById("livro-prateleira").value}</td>
        <td>${
          (() => {
            const data = document.getElementById("livro-data").value;
            const [ano, mes, dia] = data.split("-");
            return `${dia}/${mes}/${ano}`;
          })()
        }</td>
        <td>${document.getElementById("livro-status").value}</td>
      `;

      // Fecha o modal e reseta o formulário
      modalAdicionar.style.display = "none";
      formAdicionar.reset();
    });
  }

  // Define a data mínima para o input de data como hoje
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const dia = String(hoje.getDate()).padStart(2, '0');
  const dataHoje = `${ano}-${mes}-${dia}`;
  document.getElementById("livro-data").setAttribute("min", dataHoje);
});

// Validação do formulário de adicionar livro usando SweetAlert2
document.getElementById('form-adicionar').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita envio tradicional

  const form = e.target;
  const inputs = form.querySelectorAll('input[required]');
  let todosPreenchidos = true;

  // Verifica se todos os campos obrigatórios estão preenchidos
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
      form.reset();   // limpa formulário após confirmação
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

// Cancelar cadastro com confirmação SweetAlert2
document.getElementById('botao-cancelar').addEventListener('click', () => {
  Swal.fire({
    title: 'Cancelado!',
    text: 'Cadastro cancelado.',
    icon: 'warning',
    confirmButtonText: 'OK',
    confirmButtonColor: '#ff9800'
  }).then((result) => {
    if (result.isConfirmed) {
      // Reseta o formulário
      document.getElementById('form-adicionar').reset();

      // Fecha o modal de adicionar
      document.getElementById('modal-adicionar').style.display = 'none';
    }
  });
});

// Elementos para modal de alteração de status do livro
const botaoMudar = document.getElementById("botao-mudar");
const modalStatus = document.getElementById("modal-status");
const formStatus = document.getElementById("form-status");
const closeStatus = document.getElementById("close-status");
const cancelarStatus = document.getElementById("cancelar-status");

let linhaSelecionada = null;

// Abrir modal para mudar status do livro após inserir ID
botaoMudar.addEventListener("click", () => {
  const id = prompt("Digite o ID do livro para mudar o status:");

  if (!id) return;

  const linhas = document.querySelectorAll("#livros-table tbody tr");
  let encontrado = false;

  linhas.forEach((linha) => {
    const idCelula = linha.cells[0].textContent.trim();
    if (idCelula === id) {
      encontrado = true;
      linhaSelecionada = linha;
      modalStatus.style.display = "flex"; // mostrar modal
    }
  });

  if (!encontrado) {
    alert("Livro com ID " + id + " não encontrado.");
  }
});

// Submeter alteração de status
formStatus.addEventListener("submit", (e) => {
  e.preventDefault();

  const novoStatus = formStatus.querySelector("input[name='novo-status']:checked");
  if (novoStatus && linhaSelecionada) {
    // Atualiza o status na tabela
    linhaSelecionada.cells[7].textContent = novoStatus.value;
  }

  // Fecha modal e limpa formulário e variável
  modalStatus.style.display = "none";
  formStatus.reset();
  linhaSelecionada = null;
});

// Fechar modal de status ao clicar no X
closeStatus.addEventListener("click", () => {
  modalStatus.style.display = "none";
  formStatus.reset();
  linhaSelecionada = null;
});

// Cancelar alteração de status
cancelarStatus.addEventListener("click", () => {
  modalStatus.style.display = "none";
  formStatus.reset();
  linhaSelecionada = null;
});

// Fechar modal de status ao clicar fora
window.addEventListener("click", (e) => {
  if (e.target === modalStatus) {
    modalStatus.style.display = "none";
    formStatus.reset();
    linhaSelecionada = null;
  }
});

// Validação do formulário de alteração de status com SweetAlert2
document.getElementById('form-status').addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio tradicional do formulário

  const form = e.target; // Referência ao formulário submetido
  const inputs = form.querySelectorAll('input[required]'); // Seleciona todos os campos obrigatórios
  let todosPreenchidos = true;

  // Verifica se todos os campos obrigatórios estão preenchidos
  inputs.forEach(input => {
    if (!input.value.trim()) {
      todosPreenchidos = false;
    }
  });

  if (todosPreenchidos) {
    // Se todos os campos estiverem preenchidos, exibe mensagem de sucesso
    Swal.fire({
      title: 'Sucesso!',
      text: 'Status alterado com sucesso!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#4CAF50'
    }).then(() => {
      form.reset();   // Limpa os campos do formulário após confirmação
    });
  } else {
    // Se houver campos obrigatórios não preenchidos, exibe mensagem de erro
    Swal.fire({
      title: 'Erro!',
      text: 'Por favor, preencha todos os campos obrigatórios.',
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: '#f44336'
    });
  }
});

// Evento para o botão "Cancelar" do formulário de status
document.getElementById('cancelar-status').addEventListener('click', () => {
  // Mostra alerta de cancelamento
  Swal.fire({
    title: 'Cancelado!',
    text: 'Mudança de status cancelado.',
    icon: 'warning',
    confirmButtonText: 'OK',
    confirmButtonColor: '#ff9800'
  }).then((result) => {
    if (result.isConfirmed) {
      // Se o usuário confirmar, limpa o formulário
      document.getElementById('form-status').reset();

      // E esconde o modal de status
      document.getElementById('modal-status').style.display = 'none';
    }
  });
});
