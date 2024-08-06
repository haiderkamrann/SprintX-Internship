// Write a script that converts a promise-based function into an async/await function.

// Promise
function compareNumbers(num1, num2) {
    return new Promise((resolve, reject) => {
            if (num1 === num2) {
                resolve(`${num1} is equal to ${num2}`);
            } else {
                reject(`${num1} is not equal to ${num2}`);
            }
    });
}

// compareNumbers(1,2).then((res) => console.log(res)).catch((err) => console.log(err))

// Async-Await
async function compareNumbersAsync(num1, num2) {
    try {
        const result = await compareNumbers(num1, num2);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

compareNumbersAsync(1,1); 
compareNumbersAsync(1,2); 







