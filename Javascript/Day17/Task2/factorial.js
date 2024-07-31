// const num = parseInt(prompt("Enter number: "));

function factorial(num){
    if (num < 0) {
        console.log('factorial for negative numbers does not exist!')
    }
    else if (num === 0) {
        console.log('the number is 0 and factorial is 1')
    }
    else {
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
        console.log(`The factorial of ${num} is ${fact}.`);
    }
}

module.exports = factorial;