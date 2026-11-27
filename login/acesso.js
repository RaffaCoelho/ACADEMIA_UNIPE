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

// Troca de abas do plano de treino (Dia A, Dia B, Dia C)
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;

      tabButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      tabContents.forEach((content) => {
        content.classList.remove('active');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const alvo = document.getElementById(targetId);
      if (alvo) {
        alvo.classList.add('active');
      }
    });
  });
});
