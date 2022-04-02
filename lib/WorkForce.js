const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const generatePage = require('../src/page-template');

function WorkForce() {
    this.manager;
    this.engineers = [];
    this.interns= [];
}


WorkForce.prototype.promptUser = function() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'manName',
        message: 'Please enter the name of your team manager. (Required)',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter a name!');
            return false;
            }
        }
        },
      {
        type: 'input',
        name: 'manId',
        message: "What is your manager's ID number?",
        //Make sure the input is a number
        validate: idInput => {
            if (!isNaN(idInput)) {
            return true;
            } else {
            console.log('Please enter an ID number!');
            return false;
            }
        }
      },
      {
        type: 'input',
        name: 'manEmail',
        message: "What is your manager's email?",
        //Make sure the input is a number
        validate: emailInput => {
            if (emailInput) {
                return true;
                } else {
                console.log('Please enter an email!');
                return false;
                }
        }
      },
      {
        type: 'input',
        name: 'manOffNum',
        message: "What is your manager's office number?",
        //Make sure the input is a number
        validate: offInput => {
            if (!isNaN(offInput)) {
            return true;
            } else {
            console.log('Please enter an office number!');
            return false;
            }
        }
      },
      {
        type: 'list',
        name: 'nextStep',
        message: 'Please choose an option',
        choices: ['add an engineer', 'add an intern', 'finish building the team']
      },
    ])
    .then((answers) => {
        this.manager = new Manager(answers.manName, answers.manId, answers.manEmail, answers.manOffNum);
        if(answers.nextStep === "add an engineer") {
            this.promptEng();
        } else if (answers.nextStep === "add an intern") {
            this.promptInt();
        } else {
            return generatePage(this);
        }
    });
};

//INTERN
WorkForce.prototype.promptInt = function() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'intName',
        message: 'Please enter the name of the intern. (Required)',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter a name!');
            return false;
            }
        }
        },
    {
        type: 'input',
        name: 'intId',
        message: "What is your intern's ID number?",
        //Make sure the input is a number
        validate: idInput => {
            if (!isNaN(idInput)) {
            return true;
            } else {
            console.log('Please enter an ID number!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'intEmail',
        message: "What is your intern's email?",
        //Make sure the input is a number
        validate: emailInput => {
            if (emailInput) {
                return true;
                } else {
                console.log('Please enter an email!');
                return false;
                }
        }
    },
    {
        type: 'input',
        name: 'intSchool',
        message: "What is your intern's alma mater?",
        //Make sure the input is a number
        validate: schoolInput => {
            if (schoolInput) {
                return true;
                } else {
                console.log('Please enter a school!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'nextStep',
        message: 'Please choose an option',
        choices: ['add an engineer', 'add an intern', 'finish building the team']
    },
    ])
    .then((answers) => {
        this.interns.push(new Intern(answers.intName, answers.intId, answers.intEmail, answers.intSchool));
        console.log(this.interns);
        if(answers.nextStep === "add an engineer") {
            this.promptEng();
        } else if (answers.nextStep === "add an intern") {
            this.promptInt();
        } else {
            return generatePage(this);
        }
    });
};

//ENGINEER
WorkForce.prototype.promptEng = function() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'engName',
        message: 'Please enter the name of your team engineer. (Required)',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter a name!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engId',
        message: "What is your engineer's ID number?",
        //Make sure the input is a number
        validate: idInput => {
            if (!isNaN(idInput)) {
            return true;
            } else {
            console.log('Please enter an ID number!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engEmail',
        message: "What is your engineer's email?",
        //Make sure the input is a number
        validate: emailInput => {
            if (emailInput) {
                return true;
                } else {
                console.log('Please enter an email!');
                return false;
                }
        }
    },
    {
        type: 'input',
        name: 'engGithub',
        message: "What is your engineer's Github username?",
        //Make sure the input is a number
        validate: githubInput => {
            if (githubInput) {
                return true;
                } else {
                console.log('Please enter a Github username!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'nextStep',
        message: 'Please choose an option',
        choices: ['add an engineer', 'add an intern', 'finish building the team']
    },
    ])
    .then((answers) => {
        this.engineers.push(new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGithub));
        if(answers.nextStep === "add an engineer") {
            this.promptEng();
        } else if (answers.nextStep === "add an intern") {
            this.promptInt();
        } else {
            return generatePage(this);
        }
    });
}
module.exports = WorkForce;