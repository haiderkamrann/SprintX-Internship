let { newArr, filterArr, reducedSum } = require('./processArray');

test('case 1: square of each element', () => {
    expect(newArr).toEqual([1, 4, 9, 16, 100, 121]);
});

test('case 2: filter where numbers are less than 10', () => {
    expect(filterArr).toEqual([16,100,121])
})

test('case 3: reduce by adding all the elements in array', () => {
    expect(reducedSum).toEqual(237)
})

