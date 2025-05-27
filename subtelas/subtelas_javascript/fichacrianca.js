// ========== MODAL E ELEMENTOS ==========
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

// Ficha do Gustavo
const fichacrianca = `
<div class="ficha-crianca">
  <img src="subtelas_img/gustavo.jpg" title="Gustavo T." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Gustavo T.</h3>
    <p> </p>
    <p><strong>Data de Nascimento:</strong> 16/09/2017</p>
    <p><strong>Responsável:</strong> Mirian Back Tobler</p>
    <p><strong>Telefone:</strong> (47)9 8888-9999</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Florianópolis</p>
    <p><strong>Bairro:</strong> Centro</p>
    <p><strong>Rua:</strong> Rua dos Açores</p>
    <p><strong>Número:</strong> 45</p>
    <h4><em>Gustavo é um menino alegre e muito comunicativo, adora contar histórias e fazer amigos por onde passa.
    Seu passatempo favorito é desenhar e colorir, além de construir castelos de areia quando está na praia.
    É bastante criativo e sempre tem uma nova ideia para compartilhar.
    Gosta de passar tempo com a mãe, com quem lê livros antes de dormir.
    É gentil e carismático, sempre disposto a ajudar os colegas.</em></h4>
   
  </div>
</div>
`;

// Ficha da Helena
const fichacrianca2 = `
<div class="ficha-crianca">
  <img src="subtelas_img/helena.jpg" title="Helena L." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Helena L.</h3>
    <p> </p>
    <p><strong>Data de Nascimento:</strong> 29/06/2019</p>
    <p><strong>Responsável:</strong> Mariana Lopes</p>
    <p><strong>Telefone:</strong> (47)9 7456-2389</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Blumenau</p>
    <p><strong>Bairro:</strong> Itoupava Central</p>
    <p><strong>Rua:</strong> Rua Hermann Weege</p>
    <p><strong>Número:</strong> 107</p>
    <h4><em>Helena é uma menina doce e encantadora, sempre com um sorriso no rosto.
    Ela ama brincar com seus brinquedos de animais e sonha em ser veterinária quando crescer.
    Adora músicas infantis e já decora letras com facilidade.
    Gosta de estar com a família e se diverte em passeios ao ar livre.
    É muito carinhosa e conquista todos com seu jeitinho meigo.</em></h4>
   
  </div>
</div>
`;

// Ficha da Emanuela
const fichacrianca3 = `
<div class="ficha-crianca">
  <img src="subtelas_img/emanuela.WEBP" title="Emanuela W." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Emanuela W.</h3>
    <p> </p>
    <p><strong>Data de Nascimento:</strong> 07/11/2020</p>
    <p><strong>Responsável:</strong> João W.</p>
    <p><strong>Telefone:</strong> (47)9 6666-3322</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Itajaí</p>
    <p><strong>Bairro:</strong> São João</p>
    <p><strong>Rua:</strong> Rua São Paulo</p>
    <p><strong>Número:</strong> 36</p>
    <h4><em>Emanuela é uma garotinha cheia de energia e muito criativa.
    Gosta de brincar de casinha, cuidar das bonecas e imitar adultos com muito humor.
    Ela adora vestir fantasias e encenar pequenas histórias para os familiares.
    Seu laço com o pai é muito forte, com quem divide momentos de brincadeira e carinho.
    Tem um espírito alegre e contagia a todos com sua presença.</em></h4>
   
  </div>
</div>
`;

// Ficha do João
const fichacrianca4 = `
<div class="ficha-crianca">
  <img src="subtelas_img/joao.jpg" title="João A." class="foto-crianca" />
  <div class="info-crianca">
    <h3>João A.</h3>
    <p> </p>
    <p><strong>Data de Nascimento:</strong> 28/02/2018</p>
    <p><strong>Responsável:</strong> Luana Atanazio</p>
    <p><strong>Telefone:</strong> (47)9 9988-7766</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Joinville</p>
    <p><strong>Bairro:</strong> Costa e Silva</p>
    <p><strong>Rua:</strong> Affonso Zastrow</p>
    <p><strong>Número:</strong> 12</p>
    <h4><em>João é uma criança muito observadora e com uma mente criativa.
    Ele adora construir e montar coisas com blocos, além de ser fascinado por novos desafios.
    Sempre buscando aprender algo novo, ele é extremamente dedicado nas atividades escolares.
    João gosta de explorar a natureza, observando plantas e insetos em seu caminho.
    É também muito afetuoso com os pais e ama passar tempo com eles, especialmente em viagens familiares.</em></h4>
   
  </div>
</div>
`;

// Ficha do Matheus
const fichacrianca5 = `
<div class="ficha-crianca">
  <img src="subtelas_img/matheus.jpeg" title="Matheus D." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Matheus D.</h3>
    <p> </p>
    <p><strong>Data de Nascimento:</strong> 19/04/2016</p>
    <p><strong>Responsável:</strong> Carlos D.</p>
    <p><strong>Telefone:</strong> (47)9 1111-4433</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> São José</p>
    <p><strong>Bairro:</strong> Barreiros</p>
    <p><strong>Rua:</strong> Rua João Pessoa</p>
    <p><strong>Número:</strong> 78</p>
    <h4><em>Matheus é uma criança tranquila e muito observadora, com grande interesse por ciências naturais.
    Ele adora assistir documentários sobre animais e explorar o mundo ao seu redor.
    Sempre em busca de novos conhecimentos, é muito aplicado nas atividades escolares.
    Tem uma imaginação fértil e cria histórias divertidas com seus brinquedos.
    Matheus é um amigo leal e sempre disposto a ajudar seus colegas em momentos de necessidade.</em></h4>
   
  </div>
</div>
`;

// Ficha do Ian
const fichacrianca6 = `
<div class="ficha-crianca">
  <img src="subtelas_img/ian.jpg" title="Ian L." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Ian L.</h3>
    <p> </p>
    <p><strong>Data de Nascimento:</strong> 10/08/2020</p>
    <p><strong>Responsável:</strong> Júlia L.</p>
    <p><strong>Telefone:</strong> (47)9 3333-2233</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Lages</p>
    <p><strong>Bairro:</strong> Santa Mônica</p>
    <p><strong>Rua:</strong> Rua Anhangüera</p>
    <p><strong>Número:</strong> 56</p>
    <h4><em>Ian é um garoto muito curioso, com uma mente rápida e cheia de ideias criativas.
    Ele adora explorar seu ambiente e descobrir novas coisas a cada dia.
    Gosta de brincar com seus brinquedos educativos e tem uma forte atração por tecnologia.
    Ian sempre busca aprender de forma divertida e está sempre envolvido em projetos com seus amigos.
    Sua energia contagiante e entusiasmo fazem dele uma criança encantadora e cheia de vida.</em></h4>
   
  </div>
</div>
`;

// Ficha da Tatiane
const fichacrianca7 = `
<div class="ficha-crianca">
  <img src="subtelas_img/tatiane.jpg" title="Tatiane V." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Tatiane V.</h3>
    <p> </p>
    <p><strong>Data de Nascimento:</strong> 31/12/2020</p>
    <p><strong>Responsável:</strong> Renata V.</p>
    <p><strong>Telefone:</strong> (47)9 4444-5566</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Blumenau</p>
    <p><strong>Bairro:</strong> Velha Central</p>
    <p><strong>Rua:</strong> Rua São Pedro</p>
    <p><strong>Número:</strong> 10</p>
    <h4><em>Tatiane é uma menina muito sociável e adora interagir com outras crianças.
    Ela tem uma personalidade vibrante e gosta de se expressar através da arte.
    Gosta de pintar, desenhar e criar suas próprias histórias.
    Tatiane tem um grande amor pelos animais e sempre encontra formas de cuidar deles.
    Ela é muito atenciosa com os mais velhos e está sempre disposta a ajudar quando necessário.</em></h4>
   
  </div>
</div>
`;

// Ficha do Matheus
const fichacrianca8 = `
<div class="ficha-crianca">
  <img src="subtelas_img/matheush.jpg" title="Matheus H." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Matheus H.</h3>
    <p> </p>
    <p><strong>Data de Nascimento:</strong> 19/04/2016</p>
    <p><strong>Responsável:</strong> Juliano H.</p>
    <p><strong>Telefone:</strong> (47)9 1111-4433</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> São José</p>
    <p><strong>Bairro:</strong> Barreiros</p>
    <p><strong>Rua:</strong> Rua João Pessoa</p>
    <p><strong>Número:</strong> 78</p>
    <h4><em>Matheus é um menino muito tranquilo, sempre sorridente e com uma curiosidade natural.
    Ele adora fazer novas amizades e é muito sociável com todos.
    Além disso, Matheus tem um grande interesse por futebol e está sempre praticando o esporte com seus amigos.
    Tem uma energia única e sempre se destaca por sua disposição em aprender coisas novas.
    Matheus é muito atencioso e tem um carinho imenso pelos seus familiares.</em></h4>
   
  </div>
</div>
`;

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

// ========== BOTÕES DO MODAL ==========
const botaoContainer = document.createElement('div');
botaoContainer.classList.add('botao-container');

const botaoEditar = document.createElement('button');
botaoEditar.textContent = 'Editar';
botaoEditar.classList.add('editar-ficha');
botaoContainer.appendChild(botaoEditar);

const botaoDesativar = document.createElement('button');
botaoDesativar.textContent = 'Desativar';
botaoDesativar.classList.add('desativar-ficha');
botaoContainer.appendChild(botaoDesativar);

// ========== FUNÇÕES ==========
function abrirModal(fichaHtml) {
  modalBody.innerHTML = fichaHtml;
  modalBody.appendChild(botaoContainer);
  modal.style.display = 'block';

  botaoEditar.textContent = 'Editar';
  botaoEditar.onclick = () => habilitarEdicao(modalBody.querySelector('.ficha-crianca'));
}

function desativarFicha() {
  const nome = modalBody.querySelector('h3')?.textContent.trim();
  if (!nome) return;

  const rows = document.querySelectorAll('#Fichas-table tbody tr');
  rows.forEach(row => {
    const nomeC = row.cells[1].textContent.trim();
    if (nomeC === nome) {
      row.classList.add('ficha-desativada');
    }
  });

  modal.style.display = 'none';
}

function habilitarEdicao(container) {
  const paragrafos = container.querySelectorAll('.info-crianca p');
  const titulo = container.querySelector('.info-crianca h3');

  const inputNome = document.createElement('input');
  inputNome.type = 'text';
  inputNome.value = titulo.textContent;
  titulo.replaceWith(inputNome);

  paragrafos.forEach(p => {
    const strong = p.querySelector('strong');
    const texto = p.textContent.replace(strong?.textContent || '', '').trim();

    const input = document.createElement('input');
    input.type = 'text';
    input.value = texto;

    if (strong) {
      const label = document.createElement('label');
      label.textContent = strong.textContent;
      p.innerHTML = '';
      p.appendChild(label);
      p.appendChild(input);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = p.textContent.trim();
      p.innerHTML = '';
      p.appendChild(textarea);
    }
  });

  botaoEditar.textContent = 'Salvar';
  botaoEditar.onclick = () => salvarEdicao(container, inputNome, paragrafos);
}

function salvarEdicao(container, inputNome, paragrafos) {
  const h3 = document.createElement('h3');
  h3.textContent = inputNome.value;
  inputNome.replaceWith(h3);

  paragrafos.forEach(p => {
    const label = p.querySelector('label');
    const input = p.querySelector('input');
    const textarea = p.querySelector('textarea');

    if (label && input) {
      const strong = document.createElement('strong');
      strong.textContent = label.textContent;
      p.innerHTML = '';
      p.appendChild(strong);
      p.innerHTML += ' ' + input.value;
    } else if (textarea) {
      p.innerHTML = `<em>${textarea.value}</em>`;
    }
  });

  botaoEditar.textContent = 'Editar';
  botaoEditar.onclick = () => habilitarEdicao(container);
}

// ========== EVENTOS ==========
botaoDesativar.addEventListener('click', desativarFicha);

closeModal.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

document.getElementById('search-input').addEventListener('keyup', function () {
  const searchValue = this.value.toLowerCase();
  const rows = document.querySelectorAll('#Fichas-table tbody tr');
  rows.forEach(row => {
    const nome = row.cells[1].textContent.toLowerCase();
    row.style.display = nome.includes(searchValue) ? '' : 'none';
  });
});


// ========== ESTILO ==========
const style = document.createElement('style');
style.innerHTML = `
#modal-body {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}

.ficha-crianca {
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  justify-content: flex-start;
}

.foto-crianca {
  width: 400px;
  height: 400px;
  margin-right: 20px;
  object-fit: contain;
}

.info-crianca {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 40px;
  justify-content: start;
}

.info-crianca h4 {
  grid-column: 1 / -1;
  margin-top: 20px;
}

.info-crianca h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.info-crianca p {
  margin: 5px 0;
}

.info-crianca p strong {
  font-weight: bold;
}

.botao-container {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: center;
  width: 100%;
}

.botao-container button {
  display: flex;
  justify-content: center; /* centraliza horizontalmente */
  align-items: center;     /* centraliza verticalmente */
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  transition: background-color 0.3s;
}


@media screen and (max-width: 768px) {
  .ficha-crianca {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .info-crianca {
    align-items: center;
  }

}
`;
document.head.appendChild(style);
