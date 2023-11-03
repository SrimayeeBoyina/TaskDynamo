// REFERENCE TO ALL THE BUTTONS
const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const btnEquals = document.querySelector('.btn-equals');
const btnClear = document.querySelector('.btn-clear');
const powerTwo = document.querySelector('.btn-power-2');
const powerThree = document.querySelector('.btn-power-3');
const btnBackspace = document.querySelector('#btn-backspace'); // Backspace button

// DOM MANIPULATION

// Event listener for each button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    });
}

// Event listener for the power-2 button (square)
powerTwo.addEventListener('click', () => {
    let int = parseFloat(screen.value);
    screen.value = Math.pow(int, 2);
});

// Event listener for the power-3 button (cube)
powerThree.addEventListener('click', () => {
    let int = parseFloat(screen.value);
    screen.value = Math.pow(int, 3);
});

// Event listener for the equals button
btnEquals.addEventListener('click', () => {
    let value = eval(screen.value);
    if (screen.value === '') {
        alert('Invalid input: Input a valid number');
    } else {
        screen.value = value;
    }
});

// Event listener for the clear button
btnClear.addEventListener('click', () => {
    screen.value = '';
});

// Event listener for the backspace button
btnBackspace.addEventListener('click', () => {
    screen.value = screen.value.slice(0, -1);
});

// Function to handle the backspace action
function backspace() {
    screen.value = screen.value.substring(0, screen.value.length - 4);
}

// Event listener for the backspace button
btnBackspace.addEventListener('click', backspace);