const ul = document.querySelectorAll('ul li:nth-child(2n)');

ul.forEach( (e) => {
    e.classList.add('li')
})