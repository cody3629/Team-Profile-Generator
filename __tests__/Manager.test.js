const Manager = require('../lib/Manager');
const manager = new Manager('cody', '111111', 'codytest@gmail.com', '444');

test('test if we get contructor values', () => {
    expect(manager.name).toBe('cody');
    expect(manager.id).toBe('111111');
    expect(manager.email).toBe('codytest@gmail.com');
    expect(manager.officeNumber).toBe('444');
});

test('test to get the name from getName() method', () => {
    expect(manager.getName()).toBe('cody');
});

test('test if we get id from getId() method', () => {
    expect(manager.getId()).toBe('111111');
});

test('test if we get email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('codytest@gmail.com');
});

test('test if we get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

test('test to get the office number from officeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('444');
});