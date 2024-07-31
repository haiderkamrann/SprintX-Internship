let string = 'Hello Haider!';

function reverseString(string) {
    let reversedString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString = reversedString + string[i];
    }
    return reversedString;
}

console.log(reverseString(string));


module.exports = reverseString;