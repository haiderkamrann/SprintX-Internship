// Write a script that creates a simple promise that resolves after a set timeout and logs the result.

let promise = new Promise((resolve,reject) => {
    let condition = true;
    setTimeout(() => {
        if(condition == true){
            resolve('The promise has been resolved!');
        } else {
            reject('the promise has not been fulfilled');
        }
    }, 2000)
});

promise.then((res) => console.log(res)).catch((err) => console.log(err))




