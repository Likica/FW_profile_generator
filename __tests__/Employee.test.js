//need jest globals 
const { expect, test } = require('@jest/globals');
//require Employee model
const Employee = require('../lib/Employee');

test('test for required properties', () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe('object');
});

test('can get employee name', () => {
    const name = 'London';
    const employee = new Employee(name);
});

test('can set id', () => {
    const eId = 100;
    const employee = new Employee('England', eId);
    expect(employee.id).toBe(eId);
});

test('can set email', () => {
    const eEmail = 'lengland@email.com';
    const employee = new Employee('England', 1, eEmail);
    expect(employee.email).toBe(eEmail);
});

//check for GETers
test('can get name with getName()', () => {
    const name = 'London';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});
test('can get id with getId()', () => {
    const eId = 100;
    const employee = new Employee('England', eId);
    expect(employee.getId()).toBe(eId);
});
test('get email with getEmail()', () => {
    const eEmail = 'lengland@email.com';
    const employee = new Employee('England', 1, eEmail);
    expect(employee.getEmail()).toBe(eEmail);
});
test('return Employee with getRole()', () => {
    const eRole = 'Employee';
    const employee = new Employee('London', 1, 'lengland@email.com');
    expect(employee.getRole()).toBe(eRole);
});