let menuOverlay = document.getElementById('menu-overlay');
let humburgerMenu = document.getElementById('humburger-menu');
let menuX = document.getElementById('menu-x');

function openOverlay(){
    menuOverlay.style.display = 'block';
    menuX.style.display = 'block';
    humburgerMenu.style.display = 'none'
    humburgerMenu.style.animation = 'menuTurn 350ms linear';
    menuX.style.animation = 'menuTurn 350ms linear';
};

function closeOverlay(){
    humburgerMenu.style.display = 'block';
    menuX.style.display = 'none';
    menuOverlay.style.display = 'none';
}

humburgerMenu.onclick = openOverlay;
menuX.onclick = closeOverlay;