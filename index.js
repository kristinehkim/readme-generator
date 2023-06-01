//Packages needed for this application
const inquirer = require('inquirer')
const { writeFile } = require('fs').promises;
//An array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install this project?  Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.  Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators. Provide links to GitHub profiles, to any third party assets, or to any tutorials you followed.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What licenses did you use?',
        name: 'license',
        choices: [
            'MIT',
            'Apache [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            'None'
        ]
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    }
]);
}

const generateReadme = ({ title, description, installation, usage, contributors, test, license, github, email }) =>
`# ${title}
## Description 
${description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [License](#license)
* [Questions](#questions)
## Installation 
${installation}
## Usage 
${usage}
## Contributors 
${contributors}
## Test 
${test}
## License 
${license}
## Questions
- [Github profile](https://github.com/${github})
- Feel free to email me with any additional questions at
${email}
`;


// TODO: Create a function to write README file - for fileName put generateReadme, create const generateReadme like mini project
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// Do all prompts in here
// async function init() {
//     const responses = await inquirer.prompt(questions)
//     console.log(responses)
    // inquirer.prompt(questions).then((responses)=>{
    //     console.log(responses)
    // })
//  }
const init = () => {
    questions()
    .then((responses) => writeFile('generatedreadme.md', generateReadme(responses)))
    .then(() => console.log('Successfully wrote README'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
