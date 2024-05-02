// script.js
const menuButton = document.getElementById('menu-button');
const myMenu = document.getElementById('my-menu');

function openMenu() {
    myMenu.style.display = 'block';
}

function closeMenu() {
    myMenu.style.display = 'none';
}

menuButton.addEventListener('click', function() {
    if (myMenu.style.display === 'block') {
        closeMenu();
    } else {
        openMenu();
    }
});
