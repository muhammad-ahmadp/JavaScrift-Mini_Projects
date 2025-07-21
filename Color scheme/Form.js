const Useremail = document.querySelector('#email');
const Userpassword = document.querySelector('#password');
const Loginform = document.querySelector('#loginForm');
const inputs = document.querySelectorAll('input');


Loginform.addEventListener('submit', (e) => {
    e.preventDefault();

     document.querySelector('#emailError').textContent = '';
     document.querySelector('#passwordError').textContent = '';

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const Email = emailRegex.test(Useremail.value);
    const Password = passwordRegex.test(Userpassword.value);

    if (!Email) {
        document.querySelector('#emailError').textContent = 'Invalid email please enter a valid email!';
        document.querySelector('#emailError').style.display = 'block';
    }
    if (!Password) {
        document.querySelector('#passwordError').textContent = 'Incorrect Password Please enter a valid password!';
        document.querySelector('#passwordError').style.display = 'block';

    }
    else{
        document.querySelector('#result').textContent = 'Form Submited';
    }
})