const UserForm = document.querySelector('form');
const Inputs = document.querySelectorAll('input');
const UserContainer = document.querySelector('#main');
const message = document.querySelector('#message')


UserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Check if any field (except submit) is empty


    const Usercard = document.createElement('div');
    Usercard.classList.add('card');

    const UserProfile = document.createElement('div');
    UserProfile.classList.add('profile');

    const UserImg = document.createElement('img');
    UserImg.setAttribute('src', Inputs[0].value);

    const h3 = document.createElement('h3');
    h3.textContent = Inputs[1].value;
    const h5 = document.createElement('h5');
    h5.textContent = Inputs[2].value;
    const p = document.createElement('p');
    p.textContent = Inputs[3].value;

    UserProfile.appendChild(UserImg);
    Usercard.appendChild(UserProfile);

    Usercard.appendChild(h3);
    Usercard.appendChild(h5);
    Usercard.appendChild(p);

    UserContainer.appendChild(Usercard);

    // after form submission clear the form 

    Inputs.forEach((input) => {
        if (input.type !== 'submit') {
            input.value = '';
        }
    })

});