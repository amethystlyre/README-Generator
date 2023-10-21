//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const RMData = require('./utils/generateMarkdown.js');

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'title',
        default: 'New project',
    },
    {
        type: 'input',
        message: 'Provide a description of the project.',
        name: 'description',
        default: ''
    },
    {
        type: 'input',
        message: 'Provide instructions on how to install or setup the app.',
        name: 'install',
        default: ''
    },
    {
        type: 'input',
        message: 'Provide instructions on how to use the app.',
        name: 'usage',
        default: ''
    },
    {
        type: 'input',
        message: 'Give credits to contributors.',
        name: 'credits',
        default: 'N/A'
    },
    {
        type: 'list',
        message: 'What license is this project distributed under?',
        name: 'license',
        choices:['MIT','Apache 2.0','GNU General Public','GNU Lesser General Public', 'Mozilla Public License']
    },
    {
        type: 'input',
        message: 'Provide users with instructions on how to contribute.',
        name: 'contributing',
        default: 'Please refer to CONTRIBUTING.md file for more details.'
    },
    {
        type: 'input',
        message: 'Provide users with instructions on how to run tests (if any).',
        name: 'testMethods',
        default: 'N/A'
    },
    {
        type: 'input',
        message: 'Provide author Github account for contact.',
        name: 'authorGit',
    },
    {
        type: 'input',
        message: 'Provide author email address for contact.',
        name: 'authorEmail',
    },

];

//Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Success!'));
 }

//Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(
        function (response) {
            console.log(response);
            let data = RMData.generateMarkdown(response);
            writeToFile(`./generated_files/README(${response.title}).md`, data);
        }
    );

}


// Function call to initialize app
init();


