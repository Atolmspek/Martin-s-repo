window.addEventListener('load', function() {
    const formCalc = document.forms['formCalc'];
    formCalc.answer.value = '';
});

function calculateSquareRoot() {
    const currentValue = parseFloat(formCalc.answer.value);
    if (!isNaN(currentValue)) {
        formCalc.answer.value = Math.sqrt(currentValue);
    }
}

function calculateFactorial() {
    const num = parseInt(formCalc.answer.value);
    if (!isNaN(num) && num >= 0) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        formCalc.answer.value = result;
    }
}

function calculateCubicRoot() {
    const currentValue = parseFloat(formCalc.answer.value);
    if (!isNaN(currentValue)) {
        formCalc.answer.value = Math.cbrt(currentValue);
    }
}

function changeSign() {
    const currentValue = parseFloat(formCalc.answer.value);
    if (!isNaN(currentValue)) {
        formCalc.answer.value = -currentValue;
    }
}