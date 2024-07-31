const reverseStringExpression = require('./reverseStringExpression');

test('CASE 1', function () {
    expect(reverseStringExpression('string')).toBe('gnirts')
})

test('CASE 2', function () {
    expect(reverseStringExpression('PEN')).toBe('NEP');
})

test('CASE 3', function () {
    expect(reverseStringExpression('SprintX')).toBe('XtnirpS');
})
