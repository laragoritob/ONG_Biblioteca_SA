// Pega o botão RENOVAR
const btnRenovar = document.querySelector('.btn'); // Pode ser qualquer classe de botão "RENOVAR"

// Função que exibe a tela de renovação ou devolução
function abrirModal(conteudo) {
  const modal = document.getElementById('modal1');
  const modalBody = document.getElementById('modal-body1');
  modalBody.innerHTML = conteudo;
  modal.style.display = 'block'; // Mostra o modal
}

// Conteúdo do formulário de renovação
const conteudoLivro = `
  <img src="img/paratodososgarotosquejaamei.jpg" title="Livro" class="hmlivro" />
  <h3 style="margin-top: 0;"> RENOVAÇÃO OU DEVOLUÇÃO </h3>
  <form action="/processar-dados" method="post">

    <label for="nome">Nome do cliente :</label>
    <input type="text" id="nome" name="nome" required>

    <label for="livro">Nome do livro:</label>
    <input type="text" id="livro" name="livro" required>

    <div class="linha-dupla">
      <div class="input-group">
        <p>Emprestimo:</p>
        <input type="date" name="data" required>
      </div>

      <div class="input-group">
        <p>Devolução:</p>
        <input type="date" name="devolucao" required>
      </div>
    </div>
    
    <div class="botao">
      <button type="submit" class="btn"> RENOVAR </button>
      <button type="submit" class="btn"> DEVOLVIDO </button>
    </div>

  </form>
`;

// Evento para quando o botão "RENOVAR" for clicado
document.querySelectorAll('.detalhes-livro').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    abrirModal(conteudoLivro); // Abre o modal com o conteúdo específico do livro
  });
});

// Fechar o modal ao clicar no "X"
document.getElementById('close-modal1').onclick = function () {
  document.getElementById('modal1').style.display = 'none'; // Fecha o modal
};

// Fechar o modal ao clicar fora do modal
window.onclick = function (event) {
  if (event.target === document.getElementById('modal1')) {
    document.getElementById('modal1').style.display = 'none'; // Fecha o modal
  }
};


    