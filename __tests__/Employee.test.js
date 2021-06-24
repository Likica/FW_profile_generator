const Employee = require('../lib/Employee');

jest.mock('../lib/Employee.js');

test('test for required properties', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// check for GETers settings
test("gets employee's info", () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual('London England');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual('lEngland@myemail.com');
    expect(employee.getRole()).toEqual('employee');
});