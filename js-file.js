const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a % b;

let a = 0;
let b = 0;
let operator = null;

function operate() {

}

const display = document.querySelector('.display');

function clear() {
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => display.innerHTML = '');
}