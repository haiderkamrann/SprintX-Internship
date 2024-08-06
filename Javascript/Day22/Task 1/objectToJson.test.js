const convertToJson = require('./objectToJson');
const jsonParsing = require('./jsonParsing');

test('should convert js obj to json string', () => {
    const obj = {
        name: 'Haider',
        age: 23
    }

    const jsonString = convertToJson(obj);
    const expectedOutput = '{"name":"Haider","age":23}';

    expect(jsonString).toBe(expectedOutput);
})

test('empty object', () => {
    const obj = {}

    const jsonString = convertToJson(obj);
    const expectedOutput = '{}';

    expect(jsonString).toBe(expectedOutput);
})

test('invalid json string', () => {
    const invalidInput = undefined;

    expect(convertToJson(invalidInput)).toBe('error');
})


test('parsing done', () => {
    const jsonStr = '{"name":"Haider","age":23}';

    const jsonParse = jsonParsing();
    const expectedOutput = { name: 'haider', age: 23 };

    expect(jsonParse).toEqual(expectedOutput);
})