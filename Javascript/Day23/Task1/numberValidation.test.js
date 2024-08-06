const numberValidation = require('./numberValidation')

console.log = jest.fn();
console.error = jest.fn();

describe('checkNumber Function', () => {

    test('Valid number input', () => {
        numberValidation(5);
        expect(console.log).toHaveBeenCalledWith('Number is: ', 5);
        expect(console.error).not.toHaveBeenCalled();
    });

    test('String input', () => {
        numberValidation('5');
        expect(console.error).toHaveBeenCalledWith('Please Try Again..', '\n', 'The input is not valid, Enter a valid Number');
    });

    test('Null input', () => {
        numberValidation(null);
        expect(console.error).toHaveBeenCalledWith('Please Try Again..', '\n', 'The input is not valid, Enter a valid Number');
    });
});
