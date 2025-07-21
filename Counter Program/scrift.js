// COUNTER PROGRAM PROJECT FOR PRACTICE

const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const resetBtn = document.querySelector('#reset');
const countStore = document.querySelector('#counter');

let Counting = 0;
// This for increase the value 

increaseBtn.addEventListener('click', () => {
    Counting++;
    countStore.textContent = Counting;
    if (Counting >= 20) {
        increaseBtn.disabled = true;
        increaseBtn.style.backgroundColor = 'gray';
        alert('Limit reached: Max value is 20');
    }

});

// Now this code for to decrease the value 
decreaseBtn.addEventListener('click', () => {
    Counting--;
    countStore.textContent = Counting;
    increaseBtn.disabled = false;
    increaseBtn.style.backgroundColor = ''
});

// Now this code for to reset the value 

resetBtn.addEventListener('click', () => {
    Counting = 0;
    countStore.textContent = Counting;
    increaseBtn.disabled = false;
    increaseBtn.style.backgroundColor = ''
});