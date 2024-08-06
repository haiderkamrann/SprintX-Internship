const sum = require('./debugExample'); // Import the sum function

describe('sum function', () => {
    test('should return 0 for an empty array', () => {
        expect(sum([])).toBe(0);
    });

    test('should return the sum of numbers in the array', () => {
        expect(sum([1, 2, 3, 4])).toBe(10);
    });

    test('should handle a single element array', () => {
        expect(sum([5])).toBe(5);
    });

    test('should handle negative numbers', () => {
        expect(sum([-1, -2, -3, -4])).toBe(-10);
    });

    test('should handle a mix of positive and negative numbers', () => {
        expect(sum([1, -2, 3, -4])).toBe(-2);
    });

    test('should handle an array with zeros', () => {
        expect(sum([0, 0, 0, 0])).toBe(0);
    });

    test('should handle floating point numbers', () => {
        expect(sum([1.5, 2.5, 3.5])).toBeCloseTo(7.5);
    });

    test('should throw an error if input is not an array', () => {
        expect(() => sum(null)).toThrow(TypeError);
        expect(() => sum(undefined)).toThrow(TypeError);
        expect(() => sum(123)).toThrow(TypeError);
        expect(() => sum('123')).toThrow(TypeError);
    });
});
