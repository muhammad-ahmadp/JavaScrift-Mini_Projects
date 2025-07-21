// COLOR SCHME PROJECT CODE 

const Buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

Buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(`${e.target.id} Button Clicked`);
        const Color = e.target.id;
        body.style.backgroundColor = Color;
    })
})

                                                // FIRST PROJECT COMPLETED 

                                    //  ***********************************************
                                    
                                                // SECOND PROJECT START COUNTER PROGRAM 

const Increase = document.querySelector('#increase');
const Decrease = document.querySelector('#decrease');
const Reset = document.querySelector('#reset');
const Countlabel = document.querySelector('#counting');
const Messge = document.querySelector('#Message');

let count = 0;

Increase.addEventListener('click', () => {
    console.log('Button Clicked!')
    count++;
    Countlabel.textContent = count;
    if (count >= 15) {
        Increase.disabled = true;
        Messge.textContent = 'Limit reached!';
    }
})
Decrease.addEventListener('click', () => {
    console.log('Button Clicked!');
    count--;
    Countlabel.textContent = count;
    Increase.disabled = false;
    Messge.textContent = '';

});

Reset.addEventListener('click', () => {
    console.log('Button Clicked!');
    count = 0;
    Countlabel.textContent = count;
    Increase.disabled = false;
    Messge.textContent = '';
})


// PROJECT TWO COMPLETED 


// PROJECT THREE START USER PROFILE

const Userform = document.querySelector('form');
const Inputs = document.querySelectorAll('input');
const UserContainer = document.querySelector('#usercontainer');


Userform.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('Form Submited!');

    const Usercard = document.createElement('diV');
    Usercard.classList.add('card');

    const Userprofile = document.createElement('div');
    Userprofile.classList.add('profile');

    const Userimg = document.createElement('img');
    Userimg.setAttribute('src', Inputs[0].value);

    const UserName = document.createElement('username');
    UserName.style.color = 'green';
    UserName.textContent = Inputs[1].value;

    const Userrole = document.createElement('userrole');
    Userrole.style.color = 'green'
    Userrole.textContent = Inputs[2].value;

    const Useremail = document.createElement('useremail');
    Useremail.textContent = [3].value;

    const UserPassword = document.createElement('userpassword');
    UserPassword.textContent = Inputs[4].value;

    const Userinfo = document.createElement('userinfo');
    Userinfo.textContent = Inputs[5].value;


    Userprofile.appendChild(Userimg);
    Usercard.appendChild(Userprofile);

    Usercard.appendChild(UserName);
    Usercard.appendChild(Userrole)
    Usercard.appendChild(Useremail);
    Usercard.appendChild(UserPassword);
    Usercard.appendChild(Userinfo);


    UserContainer.appendChild(Usercard);

    Inputs.forEach((input) => {
        if (input.type !== 'submit') {
            input.value = '';
        }
    })
})


                    //  PROJECT THREE COMPLETED 

                    // PROJECT FOUr START CHARACTER COUNTER 
    

const CharacterInput = document.querySelector('input');
const Span = document.querySelector('#character');
const Message = document.querySelector('#message');

CharacterInput.addEventListener('input', () => {
    console.log('Character Added!');
    const Length = CharacterInput.value.length;
    Span.textContent = Length;
    if(Length >= 12){
        CharacterInput.disabled = true;
        Message.textContent = 'Limit reached!';
        Message.style.color = 'red';
    }
    else{
        Message.textContent = ''
    }
})