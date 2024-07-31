//THIS IS GLOBAL SCOPE VARIABLE WHICH CAN BE ACCESSED ANY WHERE IN THE CODE
let num1 = 20;
const num2 = 30; 

{
    let num1 = 10
    console.log(num1);
} //this is block scope, this variable can only be accessed in this block. 

{
    const num2 = 30;
    console.log(num2)
}