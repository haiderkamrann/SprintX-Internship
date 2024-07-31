const sum = require('./sum');

test('5 + 10 is equals to 15', () => {
    expect(sum(5,10)).toBe(15);
});