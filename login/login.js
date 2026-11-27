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

// Validação simples do formulário de login
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const usernameError = document.getElementById('usernameError');
  const passwordError = document.getElementById('passwordError');
  const togglePassword = document.getElementById('togglePassword');

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      togglePassword.textContent = isPassword ? 'Ocultar' : 'Ver';
    });
  }

  if (loginForm && usernameInput && passwordInput) {
    loginForm.addEventListener('submit', (e) => {
      let valido = true;
      if (usernameError) usernameError.textContent = '';
      if (passwordError) passwordError.textContent = '';

      if (!usernameInput.value.trim()) {
        if (usernameError) usernameError.textContent = 'Informe seu usuário ou matrícula.';
        valido = false;
      }

      if (!passwordInput.value.trim()) {
        if (passwordError) passwordError.textContent = 'Informe sua senha.';
        valido = false;
      } else if (passwordInput.value.trim().length < 4) {
        if (passwordError) passwordError.textContent = 'A senha deve ter pelo menos 4 caracteres.';
        valido = false;
      }

      if (!valido) {
        e.preventDefault();
      }
    });
  }
});
