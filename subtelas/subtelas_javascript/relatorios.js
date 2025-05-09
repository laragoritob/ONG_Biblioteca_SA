const funcionarios = {
    "1": "Ana Beatriz Silva",
    "2": "Carlos Eduardo Souza",
    "3": "João Pereira",
    "4": "Fernanda Lima"
    // Adicionar mais
  };

  document.getElementById("id_funcionario").addEventListener("blur", function () {
    const id = this.value.trim();
    const nomeInput = document.getElementById("nome_funcionario");

    if (id === "") {
      nomeInput.value = "";
      return;
    }

    if (funcionarios[id]) {
      nomeInput.value = funcionarios[id];
    } else {
      nomeInput.value = "Funcionário não encontrado";
    }
  });

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