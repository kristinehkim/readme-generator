// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Briefly describe your application.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Are there any extra steps needed for this installation?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What does the user need to know to install the application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who are the contributors to the application?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Are there any licenses?',
        name: 'license',
        choices: [
            'MIT',
            'Apache'
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
async function init() {
    const responses = await inquirer.prompt(questions)
    console.log(responses)
    // inquirer.prompt(questions).then((responses)=>{
    //     console.log(responses)
    // })
 }

// Function call to initialize app
init();
