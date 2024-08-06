function numberValidation(num1) {
    try {
        if (typeof (num1) !== 'number') {
            throw new Error('The input is not valid, Enter a valid Number');
        } else {
            console.log('Number is: ', num1);
        }
    } catch (e) {
        console.error('Please Try Again..', '\n', e.message);
    } finally {
        console.log('I hope you got the number if you entered a valid input...');
    }
}

numberValidation(5);

module.exports = numberValidation;