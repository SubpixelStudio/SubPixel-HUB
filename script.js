// Seleciona os links do menu e as seções
const links = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

// Função para trocar a página visível
function showPage(id) {
  pages.forEach(page => {
    page.classList.toggle('active', page.id === id);
  });
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
  });
}

// Escuta os cliques no menu
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    showPage(targetId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Mostra a primeira página (Início) por padrão
showPage('inicio');
