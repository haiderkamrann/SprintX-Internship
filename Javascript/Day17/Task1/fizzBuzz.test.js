const fizzBuzz = require('./fizzBuzz');

test('CASE 1 - DIVISIBLE BY 3 AND 5', function (){
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});

test('CASE 2 - DIVISIBLE BY 3', function (){
    expect(fizzBuzz(9)).toBe('Fizz');
});

test('CASE 3 - DIVISIBLE BY 5', function (){
    expect(fizzBuzz(10)).toBe('Buzz');
});

// test('CASE 4 - NOT DIVISIBLE BY 3 OR 5', function (){
//     expect(fizzBuzz(7)).toBe('7');
// });