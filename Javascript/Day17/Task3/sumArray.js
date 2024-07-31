function sum2DArray(arr) {
    let totalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            totalSum += arr[i][j];
        }
    }
    return totalSum;
}

console.log(sum2DArray([[1, 2, 3], [1, 2, 3]])); 

module.exports = sum2DArray;