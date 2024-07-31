let arrOfObj = require('./arrayOfObjects')

function extractValuesByKey(arrOfObj, key) {
    return arrOfObj.map(obj => obj[key]);
}

const names = extractValuesByKey(arrOfObj, 'name');
console.log(names); 

module.exports = extractValuesByKey;