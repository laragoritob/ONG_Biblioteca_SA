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
    document.getElementById("lista-arquivos").innerHTML = "";
    document.getElementById("arquivo-box").style.display = "block";
    document.getElementById("nome-arquivo").textContent = "Arquivos selecionados:"; // <- esta linha foi adicionada

    for (let i = 0; i < arquivos.length; i++) {
      const nomeArquivo = arquivos[i].name;

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
