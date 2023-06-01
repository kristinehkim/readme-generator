// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)`
    case 'Apache': 
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'Eclipse':
        return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    default: 
        return 'None'
  }
}

// TODO: Create a function to generate markdown for README
const generateReadme = ({ title, description, installation, usage, contributing, test, license, github, email }) =>
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
To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
![Example screenshot](./img/screenshot.png)

${usage}
## Contributors 
${contributing}
## Test 
${test}
## License 
${renderLicenseBadge(license)}
## Questions
- Github profile: https://github.com/${github}
- Feel free to email me with any additional questions at
${email}
`;

module.exports = generateReadme;
