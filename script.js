// script.js
function openNav() {
    document.getElementById("sidemenu").style.width = "250px";
}


function closeNav() {
    document.getElementById("sidemenu").style.width = "0";
}

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
