let string = 'Hello Haider!';

const reverseStringExpression = function(inputString) {
    let reversedString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i]; 
    }

    return reversedString;
};

console.log(reverseStringExpression(string));


module.exports = reverseStringExpression;