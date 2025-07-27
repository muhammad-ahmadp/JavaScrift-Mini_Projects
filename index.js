const hambergerBtn = document.querySelector('#hamberBtn');
const mobileMenu = document.querySelector('#mobileMenu');
const closeBtn = document.querySelector('#closeBtn');

hambergerBtn.addEventListener('click', () => {
    mobileMenu.style.right = '0';
})

closeBtn.addEventListener('click', () => {
    mobileMenu.style.right = '-100%'
})