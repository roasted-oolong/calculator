const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a % b;

let a = 0;
let b = 0;
let operator = null;

function operate(a, b, operator) {
    switch (operator) {
        case '+': 
            return add(a, b);
        case '-': 
            return subtract(a, b);
        case '*': 
            return multiply(a, b);
        case '/': 
            if (b !== 0) {
                return divide(a, b)
            } else {
                return 'Error: Divide by 0'
            }
        default: 
            return 'Invalid operator';
    }
}
//check
a = 10;
b = 4;
operator = '+';
console.log(operate(a, b, operator)) //check

const display = document.querySelector('.display');
let displayValue = '0';

function clearDisplay() {
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => display.innerHTML = '0');
}
clearDisplay();

function updateDisplay(value) {
    displayValue += value;
    display.texContent = displayValue;
}

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.textContent;
        if (displayValue === '0') {
            displayValue = number;
        } else {
            displayValue += number;
        }
    updateDisplay(displayValue);
    })
})