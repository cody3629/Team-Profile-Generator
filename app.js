const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require("fs");
const generateSite = require('./src/generate-site');
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (REQUIRED)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter your employee ID (REQUIRED)',
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('Please enter your employee ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (REQUIRED)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your office number (REQUIRED)',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log('Please enter your office number.');
                return false;
            }
        }
    },
    ]).then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select an option:',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                case "add an intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();  
            }
        });
    };

    const promptEngineer = () => {
        console.log(`
       ===============
       Add a New Engineer
       ===============
       `);

       return inquirer.prompt([
           {
               type: 'input',
               name: 'name',
               message: 'What is the name of the engineer? (REQUIRED)',
               validate: engineerName => {
                   if (engineerName) {
                       return true;
                   } else {
                       console.log('Please enter the name of your engineer');
                       return false;
                   }
               }
           },
           {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter your employee ID (REQUIRED)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address (REQUIRED)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter your Github username. (REQUIRED)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your Github username.');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
       ===============
       Add a New Engineer
       ===============
       `);

       return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern? (REQUIRED)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the name of your intern');
                    return false;
                }
            }
        },
        {
         type: 'input',
         name: 'employeeId',
         message: 'Please enter your employee ID (REQUIRED)',
         validate: employeeId => {
             if (employeeId) {
                 return true;
             } else {
                 console.log('Please enter your employee ID.');
                 return false;
             }
         }
     },
     {
         type: 'input',
         name: 'email',
         message: 'Please enter your email address (REQUIRED)',
         validate: email => {
             if (email) {
                 return true;
             } else {
                 console.log('Please enter your email address.');
                 return false;
             }
         }
     },
     {
         type: 'input',
         name: 'school',
         message: 'Please enter your school name. (REQUIRED)',
         validate: school => {
             if (school) {
                 return true;
             } else {
                 console.log('Please enter your school name.');
                 return false;
             }
         }
     }
 ])
 
 .then(answers => {
     console.log(answers);
     const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
     teamMembers.push(engineer);
     promptMenu();
 })
};

const buildTeam = () => {
    console.log(`
       ===============
       Finished building the dream team!
       ===============
       `);

       if (!fs.existsSync(OUTPUT_DIR)) {
           fs.mkdirSync(OUTPUT_DIR)
       }
       fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

promptManager();