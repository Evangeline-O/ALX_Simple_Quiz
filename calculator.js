// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// Helper to get input values and update result
function calculateAndDisplay(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    let result;

    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('calculation-result').textContent = result;
}

// Event listeners for buttons
document.getElementById('add').addEventListener('click', function () {
    calculateAndDisplay('add');
});

document.getElementById('subtract').addEventListener('click', function () {
    calculateAndDisplay('subtract');
});

document.getElementById('multiply').addEventListener('click', function () {
    calculateAndDisplay('multiply');
});

document.getElementById('divide').addEventListener('click', function () {
    calculateAndDisplay('divide');
});
