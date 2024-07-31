const sum2DArray = require('./sumArray');

test('nested array sum should be 45', function () {
    expect(sum2DArray([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])).toBe(45)
})