//need to require Manager and Employee models
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const { expect, test } = require('@jest/globals');

//test to set phoneNumber
test('can set phoneNumber', () => {
    const myValue = 555;
    const employee = new Manager('Coco', 3, 'coco@address.com', myValue);
    expect(employee.phoneNumber).toBe(myValue);
});

//test getRole() to return Manager
test('can getRole Engineer', () => {
    const myValue = 'Manager';
    const employee = new Manager('Coco', 3, 'coco@address.com', myValue);
    expect(employee.getRole()).toBe(myValue);
});

//test to get phone number through getPhoneNumber()
test('can get phone # through getPhoneNumber()', () => {
    const myValue = 555;
    const employee = new Manager('Coco', 3, 'coco@address.com', myValue);
    expect(employee.getPhoneNumber()).toBe(myValue);
});