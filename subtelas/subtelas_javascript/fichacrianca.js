const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

// Ficha do Dalton
const fichacrianca = `
<div class="ficha-crianca">
  <img src="subtelas_img/dalton.jpg" title="Dalton M." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Dalton M.</h3>
    <p><em>Dalton é um menino extremamente curioso e sempre interessado em entender como as coisas funcionam. 
    Gosta de montar quebra-cabeças, assistir vídeos educativos e tem grande facilidade com números. 
    Seus professores destacam sua atenção e dedicação nas tarefas. 
    Ele também adora andar de bicicleta e brincar ao ar livre com os amigos do bairro.
    Tem um ótimo relacionamento com todos ao seu redor.</em></p>
    <p><strong>Data de Nascimento:</strong> 01/01/2015</p>
    <p><strong>Responsável:</strong> João M.</p>
    <p><strong>Telefone:</strong> (47)9 9261-7721</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Joinville</p>
    <p><strong>Bairro:</strong> Costa e Silva</p>
    <p><strong>Rua:</strong> Affonso Zastrow</p>
    <p><strong>Número:</strong> 12</p>
  </div>
</div>
`;


// Ficha do Gustavo
const fichacrianca2 = `
<div class="ficha-crianca">
  <img src="subtelas_img/gustavo.jpg" title="Gustavo T." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Gustavo T.</h3>
    <p><em>Gustavo é um menino alegre e muito comunicativo, adora contar histórias e fazer amigos por onde passa. 
    Seu passatempo favorito é desenhar e colorir, além de construir castelos de areia quando está na praia. 
    É bastante criativo e sempre tem uma nova ideia para compartilhar. 
    Gosta de passar tempo com a mãe, com quem lê livros antes de dormir.
    É gentil e carismático, sempre disposto a ajudar os colegas.</em></p>
    <p><strong>Data de Nascimento:</strong> 16/09/2017</p>
    <p><strong>Responsável:</strong> Mirian Back Tobler</p>
    <p><strong>Telefone:</strong> (47)9 8888-9999</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Florianópolis</p>
    <p><strong>Bairro:</strong> Centro</p>
    <p><strong>Rua:</strong> Rua dos Açores</p>
    <p><strong>Número:</strong> 45</p>
  </div>
</div>
`;


// Ficha da Helena
const fichacrianca3 = `
<div class="ficha-crianca">
  <img src="subtelas_img/helena.jpg" title="Helena L." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Helena L.</h3>
    <p><em>Helena é uma menina doce e encantadora, sempre com um sorriso no rosto. 
    Ela ama brincar com seus brinquedos de animais e sonha em ser veterinária quando crescer. 
    Adora músicas infantis e já decora letras com facilidade. 
    Gosta de estar com a família e se diverte em passeios ao ar livre.
    É muito carinhosa e conquista todos com seu jeitinho meigo.</em></p>
    <p><strong>Data de Nascimento:</strong> 29/06/2019</p>
    <p><strong>Responsável:</strong> Mariana Lopes</p>
    <p><strong>Telefone:</strong> (47)9 7456-2389</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Blumenau</p>
    <p><strong>Bairro:</strong> Itoupava Central</p>
    <p><strong>Rua:</strong> Rua Hermann Weege</p>
    <p><strong>Número:</strong> 107</p>
  </div>
</div>
`;


// Ficha da Emanuela
const fichacrianca4 = `
<div class="ficha-crianca">
  <img src="subtelas_img/emanuela.jpg" title="Emanuela W." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Emanuela W.</h3>
    <p><em>Emanuela é uma garotinha cheia de energia e muito criativa. 
    Gosta de brincar de casinha, cuidar das bonecas e imitar adultos com muito humor. 
    Ela adora vestir fantasias e encenar pequenas histórias para os familiares. 
    Seu laço com o pai é muito forte, com quem divide momentos de brincadeira e carinho. 
    Tem um espírito alegre e contagia a todos com sua presença.</em></p>
    <p><strong>Data de Nascimento:</strong> 07/11/2020</p>
    <p><strong>Responsável:</strong> João W.</p>
    <p><strong>Telefone:</strong> (47)9 6666-3322</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Itajaí</p>
    <p><strong>Bairro:</strong> São João</p>
    <p><strong>Rua:</strong> Rua São Paulo</p>
    <p><strong>Número:</strong> 36</p>
  </div>
</div>
`;


// Ficha do João
const fichacrianca5 = `
<div class="ficha-crianca">
  <img src="subtelas_img/joao.jpg" title="João A." class="foto-crianca" />
  <div class="info-crianca">
    <h3>João A.</h3>
    <p><em>João é uma criança muito observadora e com uma mente criativa. 
    Ele adora construir e montar coisas com blocos, além de ser fascinado por novos desafios. 
    Sempre buscando aprender algo novo, ele é extremamente dedicado nas atividades escolares. 
    João gosta de explorar a natureza, observando plantas e insetos em seu caminho. 
    É também muito afetuoso com os pais e ama passar tempo com eles, especialmente em viagens familiares.</em></p>
    <p><strong>Data de Nascimento:</strong> 28/02/2018</p>
    <p><strong>Responsável:</strong> Luana Atanazio</p>
    <p><strong>Telefone:</strong> (47)9 9988-7766</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Joinville</p>
    <p><strong>Bairro:</strong> Costa e Silva</p>
    <p><strong>Rua:</strong> Affonso Zastrow</p>
    <p><strong>Número:</strong> 12</p>
  </div>
</div>
`;

// Ficha do Matheus
const fichacrianca6 = `
<div class="ficha-crianca">
  <img src="subtelas_img/matheus.jpeg" title="Matheus D." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Matheus D.</h3>
    <p><em>Matheus é uma criança tranquila e muito observadora, com grande interesse por ciências naturais. 
    Ele adora assistir documentários sobre animais e explorar o mundo ao seu redor. 
    Sempre em busca de novos conhecimentos, é muito aplicado nas atividades escolares. 
    Tem uma imaginação fértil e cria histórias divertidas com seus brinquedos. 
    Matheus é um amigo leal e sempre disposto a ajudar seus colegas em momentos de necessidade.</em></p>
    <p><strong>Data de Nascimento:</strong> 19/04/2016</p>
    <p><strong>Responsável:</strong> Carlos D.</p>
    <p><strong>Telefone:</strong> (47)9 1111-4433</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> São José</p>
    <p><strong>Bairro:</strong> Barreiros</p>
    <p><strong>Rua:</strong> Rua João Pessoa</p>
    <p><strong>Número:</strong> 78</p>
  </div>
</div>
`;


// Ficha do Ian
const fichacrianca7 = `
<div class="ficha-crianca">
  <img src="subtelas_img/ian.jpg" title="Ian L." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Ian L.</h3>
    <p><em>Ian é um garoto muito curioso, com uma mente rápida e cheia de ideias criativas. 
    Ele adora explorar seu ambiente e descobrir novas coisas a cada dia. 
    Gosta de brincar com seus brinquedos educativos e tem uma forte atração por tecnologia. 
    Ian sempre busca aprender de forma divertida e está sempre envolvido em projetos com seus amigos. 
    Sua energia contagiante e entusiasmo fazem dele uma criança encantadora e cheia de vida.</em></p>
    <p><strong>Data de Nascimento:</strong> 10/08/2020</p>
    <p><strong>Responsável:</strong> Júlia L.</p>
    <p><strong>Telefone:</strong> (47)9 3333-2233</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Lages</p>
    <p><strong>Bairro:</strong> Santa Mônica</p>
    <p><strong>Rua:</strong> Rua Anhangüera</p>
    <p><strong>Número:</strong> 56</p>
  </div>
</div>
`;


// Ficha da Tatiane
const fichacrianca8 = `
<div class="ficha-crianca">
  <img src="subtelas_img/tatiane.jpg" title="Tatiane V." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Tatiane V.</h3>
    <p><em>Tatiane é uma menina muito sociável e adora interagir com outras crianças. 
    Ela tem uma personalidade vibrante e gosta de se expressar através da arte. 
    Gosta de pintar, desenhar e criar suas próprias histórias. 
    Tatiane tem um grande amor pelos animais e sempre encontra formas de cuidar deles. 
    Ela é muito atenciosa com os mais velhos e está sempre disposta a ajudar quando necessário.</em></p>
    <p><strong>Data de Nascimento:</strong> 31/12/2020</p>
    <p><strong>Responsável:</strong> Renata V.</p>
    <p><strong>Telefone:</strong> (47)9 4444-5566</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> Blumenau</p>
    <p><strong>Bairro:</strong> Velha Central</p>
    <p><strong>Rua:</strong> Rua São Pedro</p>
    <p><strong>Número:</strong> 10</p>
  </div>
</div>
`;


// Ficha do Matheus
const fichacrianca9 = `
<div class="ficha-crianca">
  <img src="subtelas_img/matheush.jpg" title="Matheus H." class="foto-crianca" />
  <div class="info-crianca">
    <h3>Matheus H.</h3>
    <p><em>Matheus é um menino muito tranquilo, sempre sorridente e com uma curiosidade natural. 
    Ele adora fazer novas amizades e é muito sociável com todos. 
    Além disso, Matheus tem um grande interesse por futebol e está sempre praticando o esporte com seus amigos. 
    Tem uma energia única e sempre se destaca por sua disposição em aprender coisas novas. 
    Matheus é muito atencioso e tem um carinho imenso pelos seus familiares.</em></p>
    <p><strong>Data de Nascimento:</strong> 19/04/2016</p>
    <p><strong>Responsável:</strong> Juliano H.</p>
    <p><strong>Telefone:</strong> (47)9 1111-4433</p>
    <p><strong>Estado:</strong> Santa Catarina</p>
    <p><strong>Cidade:</strong> São José</p>
    <p><strong>Bairro:</strong> Barreiros</p>
    <p><strong>Rua:</strong> Rua João Pessoa</p>
    <p><strong>Número:</strong> 78</p>
  </div>
</div>
`;


// Função genérica para abrir o modal com o conteúdo do livro
function abrirModal(fichacrianca) {
  modalBody.innerHTML = fichacrianca;
  modal.style.display = 'block';

    // Adiciona o botão Editar
    const botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar';
    botaoEditar.classList.add('editar-ficha');
  
    // Adiciona evento ao botão
    botaoEditar.addEventListener('click', () => {
      habilitarEdicao(modalBody);
    });
  
    modalBody.appendChild(botaoEditar);
    modal.style.display = 'block';
}

function habilitarEdicao(container) {
  const paragrafos = container.querySelectorAll('.info-crianca p');
  const titulo = container.querySelector('.info-crianca h3');

  // Transformar <h3> em input
  const inputNome = document.createElement('input');
  inputNome.type = 'text';
  inputNome.value = titulo.textContent;
  titulo.replaceWith(inputNome);

  // Transformar <p> em inputs ou textareas
  paragrafos.forEach(p => {
    const strong = p.querySelector('strong');
    const texto = p.textContent.replace(strong?.textContent || '', '').trim();

    const input = document.createElement('input');
    input.type = 'text';
    input.value = texto;

    if (strong) {
      const label = document.createElement('label');
      label.textContent = strong.textContent;
      p.innerHTML = ''; // Limpa o conteúdo
      p.appendChild(label);
      p.appendChild(input);
    } else {
      // Descrição com <em>
      const textarea = document.createElement('textarea');
      textarea.value = p.textContent.trim();
      p.innerHTML = '';
      p.appendChild(textarea);
    }
  });

  // Substituir botão "Editar" por "Salvar"
  const botaoEditar = container.querySelector('.editar-ficha');
  botaoEditar.textContent = 'Salvar';
  botaoEditar.removeEventListener('click', habilitarEdicao); // Remove antigo

  botaoEditar.addEventListener('click', () => {
    salvarEdicao(container, inputNome, paragrafos);
  });
}

function salvarEdicao(container, inputNome, paragrafos) {
  // Substituir inputNome por <h3>
  const h3 = document.createElement('h3');
  h3.textContent = inputNome.value;
  inputNome.replaceWith(h3);

  // Substituir inputs e textareas por <p> e <strong>
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

  // Trocar botão de volta para "Editar"
  const botaoSalvar = container.querySelector('.editar-ficha');
  botaoSalvar.textContent = 'Editar';
  botaoSalvar.addEventListener('click', () => {
    habilitarEdicao(container);
  });
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

document.querySelectorAll('.fichacrianca9').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      abrirModal(fichacrianca9);
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
    margin-right: 0px;
    object-fit: contain; /* Mantém a imagem inteira dentro do espaço, sem cortar */
}


  .info-crianca {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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

  @media screen and (max-width: 768px) {
    .ficha-crianca {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .info-crianca {
      align-items: center;
    }

.btn {
  background: #ffbcfc;
  color: rgb(0, 0, 0);
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  min-width: 200px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;
  margin-left: 95px;
}

.btn.glow {
  box-shadow: 0px 0px 15px #884b85;
}

.btn:hover {
  background: #e07ddb;
  transform: translateY(-2px);
  box-shadow: 0 0 20px #884b85;
}

.botao {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  gap: 10px; 

  }
`;

// Adiciona o estilo ao documento
document.head.appendChild(style);