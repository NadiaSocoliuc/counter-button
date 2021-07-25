let buttonPlus = document.querySelector('#increment');
let buttonMinus = document.querySelector('#decrement');
let input = document.querySelector('input');

buttonPlus.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;

})

buttonMinus.addEventListener('click', () => {
    if (input.value > 1) {
    input.value = parseInt(input.value) - 1;
    } else {
        return false;
    }

})