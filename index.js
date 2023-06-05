//Packages needed for this application
const inquirer = require('inquirer')
const { writeFile } = require('fs').promises;
// imported files
const generateReadme = require ('./utils/generateMarkdown')
const questions = require ('./utils/questions')

const init = async () => {
    // questions()
    // .then((responses) => writeFile('generatedreadme.md', generateReadme(responses)))
    // .then(() => console.log('Successfully wrote README'))
    // .catch((err) => console.error(err));
    try {
        const responses = await inquirer.prompt(questions)
        writeFile('generatedreadme.md', generateReadme(responses))
        console.log('Successfully generated README!')
    }
    catch (err) {
        console.error(err)
    }
};

// Function call to initialize app
init();
