const largeNumber = require('./largeNumber');

test('CASE 1 - POSITIVE NUMBERS', function () {
    expect(largeNumber(10,20)).toBe(20);
})

test('CASE 2 - NEGATIVE NUMBERS', function () {
    expect(largeNumber(-10,-20)).toBe(-10);
})

test('CASE 3 - EQUAL NUMBERS', function (){
    expect(largeNumber(5,5)).toBe(5);
})