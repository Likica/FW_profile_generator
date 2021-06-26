//require engineer model 
const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('can set github account', () => {
    const myValue = 'GitHubUsername';
    const employee = new Engineer('Mik', 1, 'mik@address.com', myValue);
    expect(employee.github).toBe(myValue);
});

test('can getRole w/ Engineer', () => {
    const myValue = 'Engineer';
    const employee = new Engineer('Mik', 1, 'mik@address.com', 'GitHubUsername');
    expect(employee.getRole()).toBe(myValue);
});

test('can getGithub username through getGithub function', () => {
    const myValue = 'GitHubUsername';
    const employee = new Engineer('Mik', 1, 'mik@address.com', myValue);
    expect(employee.getGithub()).toBe(myValue);
});