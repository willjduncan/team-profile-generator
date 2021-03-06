# team-profile-generator
Module 10 Challenge

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

        

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)  
        



## Description

AS A manager

I WANT to generate a webpage that displays my team's basic info

SO THAT I have quick access to their emails and GitHub profiles

Team-Profile-Generator is a program that allows the user to set up a workforce list consisting of employees, managers, engineers, and interns. The creation of the program is intended to test and improve my skills using ES6, Node, Jest, and npm, while also giving me a chance to plan and form a project using an object-oriented approach that prioritizes testing first. By the end of the challenge, I should feel more comfortable and equipped to work on back-end development in a professional setting. 

Once complete, the program should operate so that:

GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information

THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML

THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username

THEN that GitHub profile opens in a new tab

WHEN I start the application

THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number

THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option

THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option

THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team

THEN I exit the application, and the HTML is generated

The final product should place however many members of the workforce there are into their own individual cards with active links on a webpage. 

This project had to be accomplished with careful planning, first setting up the necessary scaffolding according to the Challenge guidelines, then downloading the necessary tools, including npm, inquirer, and Jest. From there, the tests had to be established for each Class, before any building of the Classes could commence. I started the classes with Employee and then moved on to the others, using Jest-Another-RPG as a blueprint for extending the "Employee" functionality to the other classes. I then set up the inquirer to ask the pertinent questions and store the items. I realized it may be easier to set up that functionality within a class, similar to how there was a Game class in Jest-Another-RPG. Therefore, I added an additional class js file to handle all of that. 

I took inspiration from the profile generator of Module 9 for the rest of the challenge, since that was where I had most experience writing and copying html onto a page. Using similar functions, I created the markdown, write, and copy functions, placing them in their own utils and src folders. I went ahead and also copied the CSS file provided in module 9 and added minor changes, such as background color to fit my need. I decided not to remove unapplied classes so that, in the future, should I choose to alter the CSS, it will be easier to adapt. After some tinkering, I managed to display the information properly. 



## Installation

Links to the repository and deployed website can be found at [Questions](#questions).

Because this project runs from the machine and not the browser, it cannot be deployed. The project is on github, however. You must first clone the repo, then run the command "npm install" on the Terminal/Command Line in order to download the dependencies. Make sure to also download inquirer, using "npm install inquirer". From there, you can fill out your team. If you want to run tests, you also have to install Jest, using "npm install jest --save-dev".


## Usage

Once the project is cloned and the dependencies downloaded, type "node index" to run the program. The program will provide you with multiple prompts to fill out. When you're done, your new webpage should appear in the dist/ folder for you to open up onto your preferred browser. 

Screenshots of the mockup and actual site are shown below

![screenshot of Mockup](/images/screenshot-mockup.png)
![screenshot of Active Site](/images/screenshot-active.png)


Screenshots of the WorkForce Class, Engineer class, and page-template is below: 

![screenshot of WorkForce](/images/screenshot-workforce.png)
![screenshot of Engineer](/images/screenshot-engineer.png)
![screenshot of page-template](/images/screenshot-page-template.png)

A video explaining and demonstrating the app's functionality is below:

[https://drive.google.com/file/d/1fpUPzZ8xsgI8BrnhTcdO_vuMhYNBl-P1/view](https://drive.google.com/file/d/1fpUPzZ8xsgI8BrnhTcdO_vuMhYNBl-P1/view)


## Credits

The coding boot camp Professional README Guide found at https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide was used as a template for this README. The license was picked from [https://choosealicense.com/](https://choosealicense.com/).The WHEN/THEN section of this README was based off the project assignment Acceptance Criteria. No TAs or classmates were used in the making of this challenge. Most influence was taken particularly from Jest-Another-RPG of Module 10 and the Portfolio Generator from Module 9. Stack Overflow, MDN Web Docs, W3, and Google were critical to my success. Node.js, Jest, and NPM's Inquirer were also used.



## Contributing

Other items to be added can be more classes of employee, such as junior developer, salesperson, or whatever other job may be offered at the organization in question. Speaking of which, a class could be made for the organization as a whole. Addesses, resumes, salaries, PTO, age, social security number, direct deposit, and much more can be added to the input, as long as the more private information is handled with the respective care. Styling can also be improved. 


## Tests

Tests were created using Jest. Currently, there are 22 tests, and all of them pass. More tests can be added to further fill out the 4 classes currently available. To run a test, type "npm run test /CLASS/" to run the tests associated with a specific class (labeled /CLASS/ in the example).


## Questions

My Github username is willjduncan.


My Github Profile can be found below:

[https://github.com/willjduncan](https://github.com/willjduncan)


The repository to this project is below:

[https://github.com/willjduncan/team-profile-generator.git](https://github.com/willjduncan/team-profile-generator.git)


For any additional questions, I can be reached at willdunc12@gmail.com.



## License

[view license link here](https://choosealicense.com/licenses/mit/)

        
MIT License

Copyright (c) [2022] [willjduncan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

