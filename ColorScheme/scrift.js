// Color Scheme Project for practice 


const Button = document.querySelectorAll('.button');
const body = document.querySelector('body');

// Now add a for each loop on all button 

Button.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Make a variable to assign all id of the button 
        const bgColor = e.target.id;
        body.style.backgroundColor = bgColor;
    })
})