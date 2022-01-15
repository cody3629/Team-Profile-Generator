const Engineer = require('../lib/Engineer');
const engineer = new Engineer('cody', '111111', 'codytest@gmail.com', 'cody3629');

test('test for constructor values', () => {
        expect(engineer.name).toBe('cody');
        expect(engineer.id).toBe('111111');
        expect(engineer.email).toBe('codytest@gmail.com');
        expect(engineer.githubUsername).toBe('cody3629');
    });
    
    test('test to get the name from getName() method', () => {
        expect(engineer.getName()).toBe('cody');
    });
    
    test('test if we get id from getId() method', () => {
        expect(engineer.getId()).toBe('111111');
    });
    
    test('test if we get email from getEmail() method', () => {
        expect(engineer.getEmail()).toBe('codytest@gmail.com');
    });
    
    test('test if we get the role from the getRole() method', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });

    test('test if we get github value', () => {
        expect(engineer.getGithub()).toBe('cody3629');
    });