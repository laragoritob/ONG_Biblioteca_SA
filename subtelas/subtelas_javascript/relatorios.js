function preencherNomeFuncionario() {
  const idFuncionario = document.getElementById('id_funcionario').value;
  
  // Simulação: você deve substituir essa lógica por uma busca real no banco ou API
  const funcionarios = {
    "1": "João Silva",
    "2": "Maria Oliveira",
    "3": "Carlos Souza"
  };

  const nomeFuncionario = funcionarios[idFuncionario] || "";
  document.getElementById('nome_funcionario').value = nomeFuncionario;
}

// Lógica para selecionar arquivos
let arquivosSelecionados = [];

document.getElementById("seletor_arquivo").addEventListener("change", function () {
  const arquivos = this.files;
  if (arquivos.length > 0) {
    // Limpa a lista de arquivos antigos
    document.getElementById("lista-arquivos").innerHTML = "";

    // Exibir o quadrado onde os arquivos selecionados serão listados
    document.getElementById("arquivo-box").style.display = "block";

    // Para cada arquivo selecionado, adiciona à lista
    for (let i = 0; i < arquivos.length; i++) {
      const nomeArquivo = arquivos[i].name;

      // Verificar se o arquivo já foi anexado
      if (!arquivosSelecionados.includes(nomeArquivo)) {
        arquivosSelecionados.push(nomeArquivo);

        const li = document.createElement("li");
        li.textContent = nomeArquivo;
        document.getElementById("lista-arquivos").appendChild(li);
      } else {
        alert(`O arquivo "${nomeArquivo}" já foi anexado.`);
      }
    }
  }
});