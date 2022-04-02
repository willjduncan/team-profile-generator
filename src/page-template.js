const WorkForce = require('../lib/WorkForce');
const { writeFile, copyFile } = require('../utils/generate-site.js');

const generatePage = workforceData => {
    // console.log("====DATA====")
    // console.log(workforceData);
    // destructure page data by section
    const {engineers, interns, manager } = workforceData;
  
    return writeFile(`


    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Meet the Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container justify-space-between align-center py-3">
          <h1 class="page-title text-secondary align-center m-3">My Team</h1>
          <nav class="flex-row">
          </nav>
        </div>
      </header>
      <main class="container my-5">
        <section class="flex-row justify-space-between">
        ${generateManager(manager)}
        ${generateEngineers(engineers)}
        ${generateInterns(interns)}
        </section>
      </main>
    </body>
    </html>
     `)
     .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
      })
    //   .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    //   })
      .catch(err => {
        console.log(err);
      });
};


const generateManager = manArr => {
return `
    <card class= "card flex-column col-3">
        <div class="bg-tertiary card-header text-light">
            <h3 class="text-light">${manArr.name}</h3>
            <h3 class="text-light">Manager</h3>
        </div> 
        <div class="card-body"> 
            <h5 class="insert pl-2">ID: ${manArr.id}</h5>
            <h5 class="insert pl-2">Email: <a href="mailto:${manArr.email}">${manArr.email}</a></h5>
            <h5 class="insert pl-2">Office Number: ${manArr.officeNumber}</h5>
        </div>
    </card>

    `;
};

function generateEngineers(engArr) {
return `
    ${engArr
        .map(({ name, id, email, github}) => {
return `
<card class= "card flex-column col-3">
    <div class="bg-tertiary card-header text-light">
        <h3 class="text-light">${name}</h3>
        <h3 class="text-light">Engineer</h3>
    </div>  
    <div class="card-body"> 
        <h5 class="insert pl-2">ID: ${id}</h5>
        <h5 class="insert pl-2">Email: <a href="mailto:${email}">${email}</a></h5>
        <h5 class="insert pl-2">Github: <a href="https://github.com/${github}" target="_blank">${github}</a></h5>
    </div>  
</card>
            `;
        }
    )
.join('')}
`;
}

 
function generateInterns(intArr) {
    return `
        ${intArr
            .map(({ name, id, email, school}) => {
    return `
<card class= "card flex-column col-3">
    <div class="bg-tertiary card-header text-light">
        <h3 class="text-light">${name}</h3>
        <h3 class="text-light">Intern</h3>
    </div>  
    <div class="card-body"> 
        <h5 class="insert pl-2">ID: ${id}</h5>
        <h5 class="insert pl-2">Email: <a href="mailto:${email}">${email}</a></h5>
        <h5 class="insert pl-2">School: ${school}</h5>
    </div>  
</card>
                `;
            }
        )
    .join('')}
    `;
}    
    

    // const generateInterns = intArr => {
    //     return `
    //     <card class= "card flex-column col-3">
    //         <div class="bg-tertiary card-header text-light">
    //             <h3 class="text-light">${intArr.name}</h3>
    //             <h3 class="text-light">Intern</h3>
    //         </div>  
    //         <div class="card-body"> 
    //             <h5 class="insert pl-2">ID: ${intArr.id}</h5>
    //             <h5 class="insert pl-2">Email: <a href="mailto:${intArr.email}">${intArr.email}</a></h5>
    //             <h5 class="insert pl-2">School: ${intArr.school}</h5>
    //         </div>  
    //     </card>
    //         `;
    //     };

  module.exports = generatePage;