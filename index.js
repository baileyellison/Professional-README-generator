// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: function (value) {
            if (value) {
                return true;
            } else {
                return 'I need a project title to continue';
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What are the rules for contributing to your project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for how others can contribute to your application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests need to be ran for your application and provide examples?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
        validate: function (value) {
            if (value) {
                return true;
            } else {
                return 'Please enter your GitHub Username to continue';
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: function (value) {
            const pass = value.match(
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            );
            if (pass) {
                return true;
            }
            return 'Please enter a valid email address';
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    const readmeContent =
    `# ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    * [Contact](#contact)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Credits
    ${data.credits}

    ## License
    This project is licensed under the ${data.license} license.

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions
    If you have any questions about this project, please contact me via GitHub or email: [${data.github}](https://github.com/${data.github}) or ${data.email}
    `;

    return writeFileAsync(fileName, readmeContent);
}

// TODO: Create a function to initialize app
async function init() { 
    try {
        const answers = await inquirer.prompt(questions);
        await writeToFile('README.md', answers);
        console.log('Successfully wrote to README.md');
    } catch (error) {
        console.error('Error writing README.md');
        console.error(error);
    }
}

// Function call to initialize app
init();
