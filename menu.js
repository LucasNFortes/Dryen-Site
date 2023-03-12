// seleciona o botão do menu pelo seu ID
const menuToggle = document.getElementById('menu-toggle');

// seleciona o menu pelo seletor de classe
const menu = document.querySelector('.menu');

// adiciona um evento de clique ao botão do menu
menuToggle.addEventListener('click', function() {
  // adiciona ou remove a classe "show" do menu, dependendo se ela já existe ou não
  menu.classList.toggle('show');
});