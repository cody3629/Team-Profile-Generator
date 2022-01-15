const Employee = require('../lib/Employee.js');
const employee = new Employee('cody', '111111', 'codytest@gmail.com');

test('test if contructor values work', () => {
    expect(employee.name).toBe('cody');
    expect(employee.id).toBe('111111');
    expect(employee.email).toBe('codytest@gmail.com');
});

test('test to get the name from getName() method', () => {
    expect(employee.getName()).toBe('cody');
});

test('test if we get id from getId() method', () => {
    expect(employee.getId()).toBe('111111');
});

test('test if we get email from getEmail() method', () => {
    expect(employee.getEmail()).toBe('codytest@gmail.com');
});

test('test if we get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});