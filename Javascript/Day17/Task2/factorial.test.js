const factorial = require('./factorial');

test('FACTORIAL OF 5', function () {
    expect(factorial(5)).toBe(120);
})