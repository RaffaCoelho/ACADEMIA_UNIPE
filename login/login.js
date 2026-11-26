const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const entrar = document.getElementById('enviado');

const usuarioEsperado = 'admin';
const senhaEsperada = '123456';

form.addEventListener('submit', function(event) {
  const usernameValue = username.value.trim();
  console.log('Username:', usernameValue);

  const passwordValue = password.value.trim();
  console.log('Password:', passwordValue);

  let formularioValido = true;
  usernameError.textContent = '';
  passwordError.textContent = '';
  if (entrar) {
    entrar.textContent = '';
  }

  if (usernameValue === '') {
    usernameError.textContent = 'Digite seu usuário';
    formularioValido = false;
  }

  if (passwordValue === '') {
    passwordError.textContent = 'Digite sua senha';
    formularioValido = false;
  } else if (passwordValue.length < 6) {
    passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres';
    formularioValido = false;
  }


  
  if (!formularioValido) {
    event.preventDefault();
  }
});