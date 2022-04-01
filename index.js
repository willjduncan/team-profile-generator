// const inquirer = require('inquirer');
// const Employee = require('./lib/Employee');
// const Manager = require('./lib/Manager');
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');
const WorkForce = require('./lib/WorkForce');
const generatePage = require('./src/page-template');

// const { writeFile, copyFile } = require('./utils/generate-site.js');

new WorkForce().promptUser();

// //Prompt user for questions
// questions()
// //then generate a template for the data collected
//   .then(portfolioData => {
//     return generateReadme(portfolioData);
//   })
//   //then write it and place the new README in the Dist file
//   .then(pageHTML => {
//     console.log(pageHTML);
//     return writeFile(pageHTML);
//   })
//   //In case of error
//   .catch(err => {
//     console.log(err);
//   });