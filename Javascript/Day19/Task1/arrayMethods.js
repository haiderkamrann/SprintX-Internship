// 1. Push - it is used to add an element at the end of array. 

let arr = [1,2,3]
arr.push(4,5,6);
console.log(arr);

// 2. POP - it is used to remove an element from the end of array

arr.pop();
console.log(arr)


// 3. SHIFT - IT IS USED TO REMOVE AN ELEMENT FROM THE START OF ARRAY
arr.shift()
console.log(arr)

// 4. UNSIFT - IT IS USED TO ADD AN ELEMENT TO START TO ARRAY
arr.unshift(12);
console.log(arr);

// 5. MAP - IT IS USED to CREATE A NEW ARRAY BY CALLING A FUNCTION ON EACH ELEMENT OF ARRAY
let array = [2,3,4,5]
let newArr = array.map((nums) => {
    return nums ** 2;
})
console.log(newArr);

// 6. FILTER - IT IS USED TO CREATE A NEW FILTERED ARRAY BY CALLING A FUNCTION ON EACH ELEMENT OF ARRAY.
let filterArr = array.filter(nums => nums % 2 === 0);
console.log('filtered even numbers are: ', filterArr);

//7. Reduce - It is used to return a single value from a given array.
let reduceArr = filterArr.reduce((accum, curr) => {
    return accum + curr; 
})
console.log('reduced arr is: ', reduceArr);