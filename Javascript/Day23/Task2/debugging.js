// All modern browers have a built-in JS Debugger.
// With the debugger you can set breakpoints and examine variables while the code is executing

// 1. using console.log()

let x = 20
let y = 30

console.log('we can see value of x by using console.log and you can use this to debug ur code...', x);

// The Second Method is using debugger keyword, it stops the execution of code and you can debug your code in inspect Source...

debugger;

let arr = [1,2,3,4,0]
let evenNums = arr.filter((items) => {
    return items % 2 === 0
})

console.log(evenNums)

// ------------------------
debugger;

async function fetchAPI () {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if(!response.ok){
            throw new Error(`HTTP STATUS CODE: ${response.status}`)
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error.message)
    } 
}

fetchAPI()

