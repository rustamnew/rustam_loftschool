const menuButton = document.querySelector('#menuButton');
const menuCloseButton =document.querySelector('#menuCloseButton');
const menuMobile = document.querySelector('.menu-mobile');

menuButton.addEventListener('click', function() {
    menuMobile.style.display = "flex";
});

menuCloseButton.addEventListener('click', function() {
    menuMobile.style.display = "none";
});

const menuLink = document.querySelectorAll('.menu-mobile__item');
menuLink.forEach(e => e.addEventListener('click', function() {
    menuMobile.style.display = "none";
}));









