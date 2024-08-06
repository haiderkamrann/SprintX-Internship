// Write a function that takes a number and a callback. It should wait for the given number of milliseconds and then call the callback function.

function fun(milliseconds, cb){
    setTimeout(() => {
        cb();
    }, milliseconds);
}

function callback(){
    console.log('Callback executed!')
}

console.log("Wait for 2 seconds to Callback function to execute!");
fun(2000, callback)


module.exports = fun;