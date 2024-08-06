// Write a function with intentional errors and debug it using the browser's developer tools.

debugger;

function sum(nums) {

    if(!Array.isArray(nums)){
        throw new TypeError('Input must be an array')
    }

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]; //Declared nums but here taking num, so it is Reference Error
    }

    return sum;
}

const results = sum([1, 2, 3, 4]);
console.log(results); // I have taken the variable result and here I'm using Results so this is also a Reference Error.

module.exports = sum;

// using debugger error fixing....
// function sum(nums) {
//     let sum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i];
//     }
//     return sum;
// }

// console.log(sum([1,2,3,4]))