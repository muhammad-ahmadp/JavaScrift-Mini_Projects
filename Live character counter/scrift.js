const TextInput = document.querySelector('#textInput');
const charCounter = document.querySelector('#charCount');

TextInput.addEventListener('input', () => {
    let text = TextInput.value;

    if (text.length > 30) {
        TextInput.value = text.slice(0, 30);
        alert('Limit reached MAX Characters are 30');
    }
    charCounter.textContent = TextInput.value.length;
})