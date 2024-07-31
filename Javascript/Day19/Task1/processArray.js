// Initial array
let array = [1, 2, 3, 4, 10, 11];

// Square of each element using the map method
let newArr = array.map((nums) => {
    return nums ** 2;
});

// Use filter to remove numbers less than 10
let filterArr = newArr.filter(nums => nums >= 10);

// Use reduce to sum the remaining numbers
let reducedSum = filterArr.reduce((accum, current) => {
    return accum + current;
});

console.log(newArr); 
console.log(filterArr); 
console.log(reducedSum); 

module.exports = {
    newArr,
    filterArr,
    reducedSum
};
