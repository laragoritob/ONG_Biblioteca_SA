document.addEventListener("DOMContentLoaded", function () {
  // Referências aos elementos do modal
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.getElementById('close-modal');

  // Elementos do formulário de adição
  const botaoAdicionar = document.getElementById('botao-adicionar');
  const modalAdicionar = document.getElementById('modal-adicionar');
  const closeAdicionar = document.getElementById('close-adicionar');
  const formAdicionar = document.getElementById('form-adicionar');
  const livroIdInput = document.getElementById('livro-id');

// Conteúdo dos livros
//Para todos os garotos que ja amei
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

//O cortiço//

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

//O Pequeno Príncipe//

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

//O Livro da Matemática//

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

  // Função genérica para abrir modal
  function abrirModal(conteudo) {
    modalBody.innerHTML = conteudo;
    modal.style.display = 'block';
  }

  // Listeners para botões de detalhes
  document.querySelectorAll('.detalhes-livro').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      abrirModal(conteudoLivro);
    });
  });

  document.querySelectorAll('.detalhes-livro2').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      abrirModal(conteudoLivro2);
    });
  });

  document.querySelectorAll('.detalhes-livro3').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      abrirModal(conteudoLivro3);
    });
  });

  document.querySelectorAll('.detalhes-livro4').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      abrirModal(conteudoLivro4);
    });
  });

  // Fechar modal com botão X
  closeModal.onclick = function () {
    modal.style.display = 'none';
  };

  // Fechar modal ao clicar fora dele
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  // Filtro de busca na tabela
  document.getElementById('search-input').addEventListener('keyup', function () {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#livros-table tbody tr');
    rows.forEach(row => {
      const livro = row.cells[1].textContent.toLowerCase();
      row.style.display = livro.includes(searchValue) ? '' : 'none';
    });
  });

// Gera um ID de livro com prefixo #
function gerarIdLivro() {
  const numero = Math.floor(1000 + Math.random() * 9000);
  return `#${numero}`;
}

// Abrir modal de adição com verificação
if (botaoAdicionar && modalAdicionar && livroIdInput) {
  botaoAdicionar.addEventListener("click", () => {
    modalAdicionar.style.display = "block";
    livroIdInput.value = gerarIdLivro();
  });
}

// Fechar modal de adição
if (closeAdicionar && modalAdicionar && formAdicionar) {
  closeAdicionar.addEventListener("click", () => {
    modalAdicionar.style.display = "none";
    formAdicionar.reset();
  });
}

// Submeter novo livro
if (formAdicionar) {
  formAdicionar.addEventListener("submit", (e) => {
    e.preventDefault();

    const tabela = document.getElementById("livros-table").getElementsByTagName("tbody")[0];
    const novaLinha = tabela.insertRow();

    novaLinha.innerHTML = `
      <td>${document.getElementById("livro-id").value}</td>
      <td><a href="#">${document.getElementById("livro-nome").value}</a></td>
      <td>${document.getElementById("livro-genero").value}</td>
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

    modalAdicionar.style.display = "none";
    formAdicionar.reset();
  });
}

  // Define a data mínima do input como hoje
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const dia = String(hoje.getDate()).padStart(2, '0');
  const dataHoje = `${ano}-${mes}-${dia}`;
  document.getElementById("livro-data").setAttribute("min", dataHoje);
});
