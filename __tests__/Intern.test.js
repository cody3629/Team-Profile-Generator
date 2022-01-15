const Intern = require('../lib/Intern');
const intern = new Intern('cody', '111111', 'codytest@gmail.com', 'ohio');

test('test for constructor values', () => {
        expect(intern.name).toBe('cody');
        expect(intern.id).toBe('111111');
        expect(intern.email).toBe('codytest@gmail.com');
        expect(intern.school).toBe('ohio');
    });
    
    test('test to get the name from getName() method', () => {
        expect(intern.getName()).toBe('cody');
    });
    
    test('test if we get id from getId() method', () => {
        expect(intern.getId()).toBe('111111');
    });
    
    test('test if we get email from getEmail() method', () => {
        expect(intern.getEmail()).toBe('codytest@gmail.com');
    });
    
    test('test if we get the role from the getRole() method', () => {
        expect(intern.getRole()).toBe('Intern');
    });

    test('test if we get school value', () => {
        expect(intern.getSchool()).toBe('ohio');
    });
