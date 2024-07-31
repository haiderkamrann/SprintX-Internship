let arr = [1, 2, 3, 4, 5];

const doubleArray = (arr) => {
    let newArr = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] * 2;
    }
    return newArr;
};

console.log(doubleArray(arr));


// USING MAP

// const doubleArray = (arr) => arr.map(nums => nums * 2);

// const originalArray = [1, 2, 3, 4, 5];
// const doubledArray = doubleArray(originalArray);

// console.log(doubledArray);

module.exports = doubleArray;