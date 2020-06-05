const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitsPressed));
function digitsPressed(event) {
    display.value += event.target.innerText;
}
document.querySelectorAll('.operations button')
    .forEach(button => button.addEventListener('click', operationsPressed));
function operationsPressed(event) {
    display.value += event.target.innerText;
}
const equalButton = document.querySelector('.equal-button');
equalButton.addEventListener('click', () => display.value = eval(display.value).toFixed(5));

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => display.value = display.value.slice(0, -1));

const clearDisplay = document.querySelector('.clear-display');
clearDisplay.addEventListener('click', () => {const textDisplay = display.value.split('');textDisplay.splice(0, textDisplay.length);display.value = textDisplay.join('')});

const separator = document.querySelector('.separator');

separator.addEventListener('click', () => display.value += event.target.innerText);









