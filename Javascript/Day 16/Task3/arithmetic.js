let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let add = document.getElementById('add');
let multiply = document.getElementById('mul');
let divide = document.getElementById('divide');
let subtraction = document.getElementById('subtraction');
let power = document.getElementById('pow');

add.addEventListener('click', function add() {
    let valOne = parseInt(num1.value);
    let valTwo = parseInt(num2.value);

    console.log(valOne + valTwo);
})


multiply.addEventListener('click', function multiply() {
    let valOne = parseInt(num1.value);
    let valTwo = parseInt(num2.value);

    console.log(valOne * valTwo);
})

divide.addEventListener('click', function divide() {
    let valOne = parseInt(num1.value);
    let valTwo = parseInt(num2.value);

    console.log(valOne / valTwo);
})


subtraction.addEventListener('click', function subtraction() {
    let valOne = parseInt(num1.value);
    let valTwo = parseInt(num2.value);

    console.log(valOne - valTwo);
})

pow.addEventListener('click', function power() {
    let valOne = parseInt(num1.value);
    let valTwo = parseInt(num2.value);

    console.log(valOne ** valTwo);
})








