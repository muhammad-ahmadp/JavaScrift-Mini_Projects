// const Buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// Buttons.forEach( (button) => {
//     button.addEventListener('click', (e) => {
//         if(e.target.id === 'gray'){
//             body.style.backgroundColor = e.target.id
//         }
//         else if (e.target.id === 'white'){
//             body.style.backgroundColor = e.target.id;
//         }
//         else if (e.target.id === 'blue'){
//             body.style.backgroundColor = e.target.id;
//         }
//         else if (e.target.id === 'yellow'){
//             body.style.backgroundColor = e.target.id;
//         }
//     })
// })

// This is short and more professional 

const Buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

Buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const color = e.target.id;
        body.style.backgroundColor = color;
    })
})