// for loop implementation
const number = parseInt(prompt("Enter a number:"));

const size = 10;

if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else {
    for (let i = 1; i <= size; i++) {
        let row = '';
        let product = number * i;
        
        row += `${number} x ${i} = ${product}`;
        
        console.log(row);
    }
}

//while loop implementation
// const number = parseInt(prompt("Enter a number:"));

// const size = 10;

// if (isNaN(number)) {
//     console.log("Please enter a valid number.");
// } else {
//     let i = 1;
//     while (i <= size) {
//         let product = number * i;
        
//         let row = `${number} x ${i} = ${product}`;
        
//         console.log(row);
        
//         i++; 
//     }
// }
