var openPanel = document.getElementById('home-panel');
var navMenu = document.getElementById('menu');
var closePanel = document.getElementById('home-panel-closes');
openPanel.addEventListener('click', () => {
    navMenu.classList.remove('closeMenu');
    navMenu.classList.add('openMenu');
    document.body.style.overflowY = 'hidden';
});
closePanel.addEventListener('click', () => {
    navMenu.classList.remove('openMenu');
    navMenu.classList.add('closeMenu');
    document.body.style.overflowY = '';
});