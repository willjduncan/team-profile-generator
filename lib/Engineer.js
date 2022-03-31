// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call parent constructor here:
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return `Github: ${this.github}`;
    }
  
    getRole() {
      return `Engineer`;
    }
  
};
  
module.exports = Engineer;