const Buttons = document.querySelector('button');
const Order = document.querySelector('#order');

let Userorder = 0;

Buttons.addEventListener('click', () => {
    console.log('Button clicked!')
    Userorder++;
    Order.textContent = Userorder;
})