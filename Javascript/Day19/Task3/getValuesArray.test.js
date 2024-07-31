const extractValuesByKey = require('./getValuesArray');
const arrayOfObjects = require('./arrayOfObjects');

describe('extractValuesByKey', () => {
    test('should extract names correctly', () => {
        const expectedNames = ['Haider', 'Zain', 'Ahmed', 'Asad', 'Mohsin'];
        expect(extractValuesByKey(arrayOfObjects, 'name')).toEqual(expectedNames);
    });

    test('should extract cities correctly', () => {
        const expectedCities = ['Lahore', 'Islamabad', 'Peshawar', 'Karachi', 'Istanbul'];
        expect(extractValuesByKey(arrayOfObjects, 'city')).toEqual(expectedCities);
    });

    test('should extract ages correctly', () => {
        const expectedAges = [23, 23, 23, 23, 23];
        expect(extractValuesByKey(arrayOfObjects, 'age')).toEqual(expectedAges);
    });

    test('should return an empty array if no objects', () => {
        expect(extractValuesByKey([], 'name')).toEqual([]);
    });

    test('should return undefined for keys that do not exist', () => {
        const expectedUndefinedValues = [undefined, undefined, undefined, undefined, undefined];
        expect(extractValuesByKey(arrayOfObjects, 'salary')).toEqual(expectedUndefinedValues);
    });
});
