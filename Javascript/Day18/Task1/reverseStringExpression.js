let string = 'Hello Haider!';

function reverseStringExpression(string) {
    let reversedString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString = reversedString + string[i];
    }
    return reversedString;
}

console.log(reverseStringExpression(string));

module.exports = reverseStringExpression;