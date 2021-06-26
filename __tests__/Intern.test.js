/// require my model for intern
const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');
//test if I can get school set up
test('can set school', () => {
    const myValue = 'UWWhitewater';
    const employee = new Intern('Lori', 2, 'lori@address.com', myValue);
    expect(employee.school).toBe(myValue);
});

//test if I can get role as Intern
test('getRole() to return Intern', () => {
    const myValue = 'Intern';
    const employee = new Intern('Lori', 2, 'lori@address.com', 'UWWhitewater');
    expect(employee.getRole()).toBe(myValue);
});

//test if I can get schoole through getSchool function
test('can get school through getSchool()', () => {
    const myValue = 'UWWhitewater';
    const employee = new Intern('Lori', 2, 'lori@address.com', myValue);
    expect(employee.getSchool()).toBe(myValue);
});