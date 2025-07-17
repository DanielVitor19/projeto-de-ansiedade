<script>
  // Função para aplicar o tema salvo no carregamento da página
  function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(savedTheme + '-mode');
  }

  // Alternar tema ao clicar no botão
  document.getElementById('toggle-theme').addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(newTheme + '-mode');
    localStorage.setItem('theme', newTheme); // salva preferência
  });

  // Aplica o tema salvo ao abrir a página
  applySavedTheme();
</script>