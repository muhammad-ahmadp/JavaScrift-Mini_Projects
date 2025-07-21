const Input = document.querySelector('input');
const Span = document.querySelector('#character');
const Message = document.querySelector('#message');


Input.addEventListener('input', ()=> {
    const length = Input.value.length;
    Span.textContent = length;
    if(length > 15){
        Message.style.display = 'block';
        Message.style.color = 'red';
        Input.disabled = true;
    }
    else{
        Message.style.display = 'none';
    }
});