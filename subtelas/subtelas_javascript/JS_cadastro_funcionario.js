// ANIMAÇÃO DO BOTÃO DE CADASTRAR //
document.getElementById('btnCadastrar').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o envio do formulário até validar

    const form = document.querySelector('#form_pessoal');
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


// LIMITE DO CALENDÁRIO //
    document.addEventListener('DOMContentLoaded', function () {
        const inputData = document.getElementById('dataNascimento');
        const hoje = new Date();
        const dia = String(hoje.getDate()).padStart(2, '0');
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const ano = hoje.getFullYear();

        inputData.max = `${ano}-${mes}-${dia}`;
    });


// LIMITAR O NÚMERO DE DÍGITOS DO CPF E PERMITIR APENAS NÚMEROS //
    function formatCPF(input) {
        let value = input.value.replace(/\D/g, ''); // Remove tudo que não for dígito
        value = value.slice(0, 11); // Limita a 11 dígitos
    
        // Aplica a máscara: 123.456.789-00
        if (value.length > 9) {
            input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        } else if (value.length > 6) {
            input.value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
        } else if (value.length > 3) {
            input.value = value.replace(/(\d{3})(\d{1,3})/, "$1.$2");
        } else {
            input.value = value;
        }
    }


// LIMITAR O NÚMERO DE DÍGITOS DO RG E PERMITIR APENAS NÚMEROS //
    function formatRG(input) {
        let value = input.value.replace(/\D/g, ''); // Remove tudo que não for dígito
        value = value.slice(0, 10); // Limita a 11 dígitos
    
        // Aplica a máscara: 123.456.789-00
        if (value.length > 9) {
            input.value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        } else if (value.length > 6) {
            input.value = value.replace(/(\d{2})(\d{3})(\d{1,3})/, "$1.$2.$3");
        } else if (value.length > 3) {
            input.value = value.replace(/(\d{2})(\d{1,3})/, "$1.$2");
        } else {
            input.value = value;
        }
    }


// LIMITAR O NÚMERO DE DÍGITOS DO TELEFONE E PERMITIR APENAS NÚMEROS //
    function formatTelefone(input) {
        let value = input.value.replace(/\D/g, ''); // Remove tudo que não for dígito
        value = value.slice(0, 11); // Limita a 11 dígitos

        if (value.length <= 10) {
            // Telefone fixo: (xx) xxxx-xxxx
            if (value.length > 6) {
                input.value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (value.length > 2) {
                input.value = value.replace(/(\d{2})(\d{0,4})/, '($1) $2');
            } else {
                input.value = value;
            }
        } else {
            // Celular: (xx) xxxxx-xxxx
            input.value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        }
    }


// LIMITAR O NÚMERO DE DÍGITOS DO CEP E PERMITIR APENAS NÚMEROS //
    function formatCEP(input) {
        let value = input.value.replace(/\D/g, ''); // Remove tudo que não for dígito
        value = value.slice(0, 9); // Limita a 9 dígitos
    
        // Aplica a máscara: 123.456.789-00
        if (value.length > 5) {
            input.value = value.replace(/(\d{5})(\d{0,3})/, "$1-$2");
        } else {
            input.value = value;
        }
    }


// BUSCAR PELO CEP //
    function buscarCEP(cep) {
        cep = cep.replace(/\D/g, '');
        if (cep.length !== 8) {
            Swal.fire("CEP inválido", "Digite os 8 dígitos do CEP corretamente.", "warning");
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => {
                if (!res.ok) throw new Error("Erro ao buscar o CEP");
                return res.json();
            })
            .then(data => {
                if (data.erro) {
                    Swal.fire("CEP não encontrado", "Verifique o número do CEP informado.", "error");
                    return;
                }

                document.querySelector('input[name="estado"]').value = data.uf || '';
                document.querySelector('input[name="cidade"]').value = data.localidade || '';
                document.querySelector('input[name="bairro"]').value = data.bairro || '';
                document.querySelector('input[name="rua"]').value = data.logradouro || '';
            })
            .catch(error => {
                Swal.fire("Erro", "Não foi possível buscar o CEP. Tente novamente.", "error");
                console.error("Erro ao buscar o CEP:", error);
            });
    }


// BOTÃO PARA MOSTRAR SENHA //
    document.getElementById('mostrarSenha').addEventListener('change', function () {
        const senhaInput = document.getElementById('senhaInput');
        senhaInput.type = this.checked ? 'text' : 'password';
    });
  