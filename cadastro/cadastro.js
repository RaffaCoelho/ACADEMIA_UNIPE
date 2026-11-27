// Funções compartilhadas do site da Academia UNIPE
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mainMenu = document.getElementById('mainMenu');

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', () => {
      const aberto = mainMenu.classList.toggle('aberto');
      menuToggle.setAttribute('aria-expanded', String(aberto));
    });
  }

  const statusEl = document.getElementById('statusFuncionamento');
  if (statusEl) {
    const agora = new Date();
    const dia = agora.getDay(); // 0 = Dom, 1-5 = Seg-Sex, 6 = Sáb
    const hora = agora.getHours();
    const aberta =
      (dia >= 1 && dia <= 5 && hora >= 6 && hora < 22) ||
      (dia === 6 && hora >= 8 && hora < 13);

    statusEl.textContent = aberta ? '● Aberta agora' : '● Fechada no momento';
    statusEl.classList.add(aberta ? 'aberta' : 'fechada');
  }
});

// Máscara de telefone e validação do cadastro
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const telefoneInput = document.getElementById('telefone');
  const retorno = document.getElementById('retornoCadastro');

  if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
      let digitos = e.target.value.replace(/\D/g, '').slice(0, 11);
      digitos = digitos.replace(/^(\d{2})(\d)/g, '($1) $2');
      digitos = digitos.replace(/(\d{5})(\d)/, '$1-$2');
      e.target.value = digitos;
    });
  }

  if (form && nomeInput && emailInput && telefoneInput) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      document.getElementById('nomeErro').textContent = '';
      document.getElementById('emailErro').textContent = '';
      document.getElementById('telefoneErro').textContent = '';
      if (retorno) retorno.classList.remove('visivel');

      let valido = true;

      if (nomeInput.value.trim().length < 2) {
        document.getElementById('nomeErro').textContent = 'Digite seu nome.';
        valido = false;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        document.getElementById('emailErro').textContent = 'Digite um e-mail válido.';
        valido = false;
      }

      if (telefoneInput.value.replace(/\D/g, '').length < 10) {
        document.getElementById('telefoneErro').textContent = 'Digite um telefone com DDD.';
        valido = false;
      }

      if (!valido) return;

      const primeiroNome = nomeInput.value.trim().split(' ')[0];
      if (retorno) {
        retorno.textContent = `Cadastro registrado para ${primeiroNome}! Agora você já pode acessar a área de login.`;
        retorno.classList.add('visivel');
      }
      form.reset();
    });
  }
});
