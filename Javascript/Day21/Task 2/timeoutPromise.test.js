const delay = require('./timeoutPromise');

describe('delay function', () => {
    jest.useFakeTimers();

    it('should resolve after the specified number of milliseconds', () => {
        const milliseconds = 1000;
        const promise = delay(milliseconds);

        jest.advanceTimersByTime(milliseconds);

        return expect(promise).resolves.toBe(`Resolved after ${milliseconds} milliseconds`);
    });

    it('should reject if the input is not a non-negative number', () => {
        const invalidInputs = [-1000, '1000', null, undefined, {}, []];

        invalidInputs.forEach(input => {
            return expect(delay(input)).rejects.toBe('Invalid input: ms must be a non-negative number');
        });
    });

    it('should resolve immediately if ms is 0', () => {
        const milliseconds = 0;
        const promise = delay(milliseconds);

        jest.advanceTimersByTime(milliseconds);

        return expect(promise).resolves.toBe(`Resolved after ${milliseconds} milliseconds`);
    });
});
