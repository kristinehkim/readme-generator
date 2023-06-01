module.exports = [
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
            'Apache',
            'Eclipse',
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
];