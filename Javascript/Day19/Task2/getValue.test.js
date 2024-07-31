const getValue = require('./getValue');

const obj = {
    studentName: 'Haider',
    rollNo: '21',
    course: 'Computer Science'
};

const key = 'studentName';

test('case 1 - key found and value returned', () => {
    expect(getValue(obj,key)).toBe('Haider')
})

test('case 2 - key not found and value is undefined', () => {
    expect(getValue(obj,key)).toBeUndefined();
})
