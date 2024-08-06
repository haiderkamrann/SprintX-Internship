// Write a function that returns a promise which resolves after a given number of milliseconds.

function delay(milliseconds) {
    let condition = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(condition == true) 
                resolve(`Resolved after ${milliseconds} milliseconds`);
        }, milliseconds);

        reject('Not resolved...');
    });
}

delay(3000).then(message => console.log(message)).catch(error => console.error(error));

// function delay(milliseconds) {
//     return new Promise((resolve, reject) => {
//         if (typeof milliseconds !== 'number' || milliseconds < 0) {
//             reject('Invalid input: ms must be a non-negative number');
//         } else {
//             setTimeout(() => {
//                 resolve(`Resolved after ${milliseconds} milliseconds`);
//             }, milliseconds);
//         }
//     });
// }

module.exports = delay;