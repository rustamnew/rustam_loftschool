const menuButton = document.querySelector('#menuButton');
const menuCloseButton =document.querySelector('#menuCloseButton');
const menuMobile = document.querySelector('.menu-mobile');
console.log(menuButton);
console.log(menuCloseButton);
console.log(menuMobile);
menuButton.addEventListener('click', function() {
    menuMobile.style.display = "flex"
});

menuCloseButton.addEventListener('click', function() {
    menuMobile.style.display = "none"
});









