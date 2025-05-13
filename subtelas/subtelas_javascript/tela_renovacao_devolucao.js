document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.getElementById('close-modal');

  function gerarFormulario(livro, cliente, imagem, emprestimo, devolucao) {
    const dataEmprestimo = new Date(emprestimo);
    const dataDevolucao = new Date(devolucao);
    const diferencaDias = Math.floor((dataDevolucao - dataEmprestimo) / (1000 * 60 * 60 * 24));
  
    const classeAtraso = diferencaDias > 7 ? 'atrasado' : '';
  
    return `
      <img src="${imagem}" title="Livro" class="hmlivro" />
      <h3 style="margin-top: 0;">RENOVAÇÃO OU DEVOLUÇÃO</h3>
      <form action="/processar-dados" method="post">
  
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
          <button type="submit" class="btn" id='renovar'>RENOVAR</button>
          <button type="submit" class="btn">DEVOLVIDO</button>
        </div>
      </form>
    `;
  }
  
  

  const livros = [
    {
      selector: '.detalhes-livro',
      nome: 'Para Todos Os Garotos Que Já Amei',
      cliente: 'Helena Lopes',
      imagem: 'subtelas_img/paratodososgarotosquejaamei.jpg',
      emprestimo: '2025-02-25',
      devolucao: '2025-03-02'
      
    },
    {
      selector: '.detalhes-livro2',
      nome: 'O Cortiço',
      cliente: 'Ruan Melo',
      imagem: 'subtelas_img/ocortico.jpg',
      emprestimo: '2025-03-11',
      devolucao: '2025-03-18'
    },
    {
      selector: '.detalhes-livro3',
      nome: 'O Pequeno Príncipe',
      cliente: 'Matheus Dela',
      imagem: 'subtelas_img/opequenoprincipe.jpg',
      emprestimo: '2025-03-19',
      devolucao: '2025-03-26'
    },
    {
      selector: '.detalhes-livro4',
      nome: 'Matemática Básica',
      cliente: 'Mateus Rodrigues',
      imagem: 'subtelas_img/olivrodamatematica.jpg',
      emprestimo: '2025-04-04',
      devolucao: '2025-04-18'
    }
  ];


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
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});


// ANIMAÇÃO DO BOTÃO DE CADASTRAR //
document.getElementById('renovar').addEventListener('click', function (e) {
  e.preventDefault(); // Impede o envio do formulário até validar

  const renovar = document.querySelector('renovar');
  const inputs = form.querySelectorAll('input');

  let todosPreenchidos = true;

  inputs.forEach(input => {
      if (!input.value.trim()) {
          todosPreenchidos = false;
      }
  });

  if (todosPreenchidos) {
      Swal.fire({
          title: 'Sucesso!',
          text: 'Funcionário cadastrado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#ffbcfc'
      }) .then((result) => {
          if (result.isConfirmed) {
              // Enviar o formulário após confirmação
              form.submit(); // Aqui o formulário será enviado
          }
          });

  } else {
      Swal.fire({
          title: 'Erro!',
          text: 'Por favor, preencha todos os campos antes de cadastrar.',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#ffbcfc'
      });
  }
});

