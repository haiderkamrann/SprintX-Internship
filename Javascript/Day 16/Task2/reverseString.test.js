const reverseString = require('./reverseString');

test('CASE 1', function () {
    expect(reverseString('string')).toBe('gnirts');
})

test('CASE 2', function () {
    expect(reverseString('PEN')).toBe('NEP');
})

test('CASE 3', function () {
    expect(reverseString('SprintX')).toBe('XtnirpS');
})
