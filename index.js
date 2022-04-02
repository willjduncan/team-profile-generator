const WorkForce = require('./lib/WorkForce');
const generatePage = require('./src/page-template');
const writeFile = require('./utils/generate-site.js');

// //Prompt user for questions
new WorkForce().promptUser()
//then generate a template for the data collected
//   .then(profileData => {
//     return generatePage(profileData);
//   })
//   //then write it and place the new HTML page in the Dist file
//   .then(pageHTML => {
//     console.log(pageHTML);
//     return writeFile(pageHTML);
//   })
//   //In case of error
//   .catch(err => {
//     console.log(err);
//   });