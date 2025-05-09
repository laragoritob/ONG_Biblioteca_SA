document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form_login');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const usuario = formData.get('usuario');
    const senha = formData.get('senha');

    if (usuario === 'gerente' && senha === 'gerente') {
      window.location.href = 'gerente.html';
    } else if (usuario === 'bibliotecario' && senha === 'bibliotecario') {
      window.location.href = 'bibliotecario.html';
    } else if (usuario === 'recreador' && senha === 'recreador') {
      window.location.href = 'recreador.html';
    } else if (usuario === 'repositor' && senha === 'repositor') {
      window.location.href = 'repositor.html';
    } else if (usuario === 'gestor' && senha === 'gestor') {
      window.location.href = 'gestor.html';
    } else {
      alert('Usuário ou senha inválidos!');
    }
  });
});
