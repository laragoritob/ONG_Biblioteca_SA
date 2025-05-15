const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

// Ficha do Dalton
const fichacrianca = `
<img src="subtelas_img/dalton.jpg" title="Dalton M." class="foto-crianca" />
<h3 style="margin-top: 0;">Dalton M.</h3>
<p><strong>Data de Nascimento:</strong> 01/01/2015</p>
<p><strong>Responsável:</strong> João M.</p>
<p><strong>Telefone:</strong>(47)9 9261-7721.</p>
<p><strong>Estado:</strong>Santa Catarina.</p>
<p><strong>Cidade:</strong>Joinville.</p>
<p><strong>Bairro:</strong>Costa e Silva.</p>
<p><strong>Rua:</strong>Affonso Zastrow.</p>
<p><strong>Numero:</strong>12</p>
`;

// Ficha do Gustavo
const fichacrianca2 = `
<img src="subtelas_img/gustavo.jpg" title="Gustavo T." class="foto-crianca" />
<h3 style="margin-top: 0;">Gustavo T.</h3>
<p><strong>Data de Nascimento:</strong> 16/09/2017</p>
<p><strong>Responsável:</strong> Mirian Back Tobler</p>
<p><strong>Telefone:</strong>(47)9 8888-9999.</p>
<p><strong>Estado:</strong> Santa Catarina.</p>
<p><strong>Cidade:</strong> Florianópolis.</p>
<p><strong>Bairro:</strong> Centro.</p>
<p><strong>Rua:</strong> Rua dos Açores.</p>
<p><strong>Número:</strong> 45</p>
`;

// Ficha da Helena
const fichacrianca3 = `
<img src="subtelas_img/helena.jpg" title="Helena L." class="foto-crianca" />
<h3 style="margin-top: 0;">Helena L.</h3>
<p><strong>Data de Nascimento:</strong> 29/06/2019</p>
<p><strong>Responsável:</strong> Mariana Lopes</p>
<p><strong>Telefone:</strong>(47)9 7456-2389.</p>
<p><strong>Estado:</strong> Santa Catarina.</p>
<p><strong>Cidade:</strong> Blumenau.</p>
<p><strong>Bairro:</strong> Itoupava Central.</p>
<p><strong>Rua:</strong> Rua Hermann Weege.</p>
<p><strong>Número:</strong> 107</p>
`;

// Ficha da Emanuela
const fichacrianca4 = `
<img src="subtelas_img/emanuela.jpg" title="Emanuela W." class="foto-crianca" />
<h3 style="margin-top: 0;">Emanuela W.</h3>
<p><strong>Data de Nascimento:</strong> 07/11/2020</p>
<p><strong>Responsável:</strong> João W.</p>
<p><strong>Telefone:</strong>(47)9 6666-3322.</p>
<p><strong>Estado:</strong> Santa Catarina.</p>
<p><strong>Cidade:</strong> Itajaí.</p>
<p><strong>Bairro:</strong> São João.</p>
<p><strong>Rua:</strong> Rua São Paulo.</p>
<p><strong>Número:</strong> 36</p>
`;

// Ficha do João
const fichacrianca5 = `
<img src="subtelas_img/joao.jpg" title="João A." class="foto-crianca" />
<h3 style="margin-top: 0;">João A.</h3>
<p><strong>Data de Nascimento:</strong> 28/02/2018</p>
<p><strong>Responsável:</strong> Luana Atanazio</p>
<p><strong>Telefone:</strong>(47)9 9988-7766.</p>
<p><strong>Estado:</strong> Santa Catarina.</p>
<p><strong>Cidade:</strong> Jaraguá do Sul.</p>
<p><strong>Bairro:</strong> Centro.</p>
<p><strong>Rua:</strong> Rua Getúlio Vargas.</p>
<p><strong>Número:</strong> 124</p>
`;

// Ficha do Matheus
const fichacrianca6 = `
<img src="subtelas_img/matheus.jpg" title="Matheus D." class="foto-crianca" />
<h3 style="margin-top: 0;">Matheus D.</h3>
<p><strong>Data de Nascimento:</strong> 19/04/2016</p>
<p><strong>Responsável:</strong> Carlos D.</p>
<p><strong>Telefone:</strong>(47)9 1111-4433.</p>
<p><strong>Estado:</strong> Santa Catarina.</p>
<p><strong>Cidade:</strong> São José.</p>
<p><strong>Bairro:</strong> Barreiros.</p>
<p><strong>Rua:</strong> Rua João Pessoa.</p>
<p><strong>Número:</strong> 78</p>
`;

// Ficha do Ian
const fichacrianca7 = `
<img src="subtelas_img/ian.jpg" title="Ian L." class="foto-crianca" />
<h3 style="margin-top: 0;">Ian L.</h3>
<p><strong>Data de Nascimento:</strong> 10/08/2020</p>
<p><strong>Responsável:</strong> Júlia L.</p>
<p><strong>Telefone:</strong>(47)9 3333-2233.</p>
<p><strong>Estado:</strong> Santa Catarina.</p>
<p><strong>Cidade:</strong> Lages.</p>
<p><strong>Bairro:</strong> Santa Mônica.</p>
<p><strong>Rua:</strong> Rua Anhangüera.</p>
<p><strong>Número:</strong> 56</p>
`;

// Ficha da Tatiane
const fichacrianca8 = `
<img src="subtelas_img/tatiane.jpg" title="Tatiane V." class="foto-crianca" />
<h3 style="margin-top: 0;">Tatiane V.</h3>
<p><strong>Data de Nascimento:</strong> 31/12/2020</p>
<p><strong>Responsável:</strong> Renata V.</p>
<p><strong>Telefone:</strong>(47)9 4444-5566.</p>
<p><strong>Estado:</strong> Santa Catarina.</p>
<p><strong>Cidade:</strong> Blumenau.</p>
<p><strong>Bairro:</strong> Velha Central.</p>
<p><strong>Rua:</strong> Rua São Pedro.</p>
<p><strong>Número:</strong> 10</p>
`;

// Função genérica para abrir o modal com o conteúdo do livro
function abrirModal(fichacrianca) {
  modalBody.innerHTML = fichacrianca;
  modal.style.display = 'block';
}

// Corrigir a referência de classe para as classes corretas (não com acento)
document.querySelectorAll('.fichacrianca').forEach(link => {
link.addEventListener('click', function (e) {
    e.preventDefault();
    abrirModal(fichacrianca);
});
});

document.querySelectorAll('.fichacrianca2').forEach(link => {
link.addEventListener('click', function (e) {
      e.preventDefault();
      abrirModal(fichacrianca2);
});
});

document.querySelectorAll('.fichacrianca3').forEach(link => {
link.addEventListener('click', function (e) {
      e.preventDefault();
      abrirModal(fichacrianca3);
});
});

document.querySelectorAll('.fichacrianca4').forEach(link => {
link.addEventListener('click', function (e) {
      e.preventDefault();
      abrirModal(fichacrianca4);
});
});

document.querySelectorAll('.fichacrianca5').forEach(link => {
link.addEventListener('click', function (e) {
    e.preventDefault();
    abrirModal(fichacrianca5);
});
});

document.querySelectorAll('.fichacrianca6').forEach(link => {
link.addEventListener('click', function (e) {
    e.preventDefault();
    abrirModal(fichacrianca6);
});
});

document.querySelectorAll('.fichacrianca7').forEach(link => {
link.addEventListener('click', function (e) {
    e.preventDefault();
    abrirModal(fichacrianca7);
});
});

document.querySelectorAll('.fichacrianca8').forEach(link => {
link.addEventListener('click', function (e) {
    e.preventDefault();
    abrirModal(fichacrianca8);
});
});

// Fecha o modal ao clicar no X
closeModal.onclick = function () {
  modal.style.display = 'none';
};

// Fecha o modal ao clicar fora dele
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Filtro de busca na tabela
document.getElementById('search-input').addEventListener('keyup', function () {
  const searchValue = this.value.toLowerCase();
  const rows = document.querySelectorAll('#Fichas-table tbody tr');
  rows.forEach(row => {
    const livro = row.cells[1].textContent.toLowerCase();
    row.style.display = livro.includes(searchValue) ? '' : 'none';
  });
});

// Cria uma tag <style> no documento
const style = document.createElement('style');
style.innerHTML = `
  #modal-body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    width: 300px;
  }
  .foto-crianca {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  #modal-body h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }
  #modal-body p {
    margin: 5px 0;
  }
  #modal-body p strong {
    font-weight: bold;
  }
`;

// Adiciona o estilo ao documento
document.head.appendChild(style);