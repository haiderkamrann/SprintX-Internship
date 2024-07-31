const countVowels = require('./countVowels')

test('CASE 1 - STRING HAS 3 VOWELS', function (){
    expect(countVowels('haider')).toBe(3);
})

test('CASE 2 - STRING HAS 1 VOWELS', function (){
    expect(countVowels('PEN')).toBe(1);
})

