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

        // Se quiser enviar o formulário após confirmação:
        // form.submit();
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


// BOTÃO PARA MOSTRAR SENHA //
    document.getElementById('mostrarSenha').addEventListener('change', function () {
        const senhaInput = document.getElementById('senhaInput');
        senhaInput.type = this.checked ? 'text' : 'password';
    });
  