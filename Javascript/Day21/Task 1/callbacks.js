// Write a script that demonstrates a basic callback by defining a function that takes a callback and calls it after a set timeout

function giveWater() {
    console.log('Water Given!');
}

function processUserInput(callback) {
    let a = 'please wait for water!';
    console.log(a);
    setTimeout(() => {
        callback(); //Function Call
    }, 3000)
}

processUserInput(giveWater);

// ADD CALLBACK FUNCTION...

// function displayResult(res) {
//     console.log('the result is: ', res);
// }

// function add(a, b, cb) {
//     let res = a + b;
//     setTimeout(() => {
//         cb(res)
//     })
//     return res;
// }

// console.log(add(3,4,displayResult))




