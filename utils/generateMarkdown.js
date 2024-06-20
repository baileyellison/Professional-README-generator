// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }

  // Example license badges (you can replace these with actual badge URLs)
  switch (license) {
      case 'MIT':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
          return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL 3.0':
          return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'BSD 3':
          return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      default:
          return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
      return '';
  }

  // Example license URLs (you can replace these with actual license URLs)
  switch (license) {
      case 'MIT':
          return 'https://opensource.org/licenses/MIT';
      case 'Apache 2.0':
          return 'https://opensource.org/licenses/Apache-2.0';
      case 'GPL 3.0':
          return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'BSD 3':
          return 'https://opensource.org/licenses/BSD-3-Clause';
      default:
          return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
      return '';
  }

  // Example license text (you can replace these with actual license text)
  switch (license) {
      case 'MIT':
          return `
## License

This project is licensed under the [MIT License](${renderLicenseLink(license)}).
`;
      case 'Apache 2.0':
          return `
## License

This project is licensed under the [Apache License 2.0](${renderLicenseLink(license)}).
`;
      case 'GPL 3.0':
          return `
## License

This project is licensed under the [GNU General Public License v3.0](${renderLicenseLink(license)}).
`;
      case 'BSD 3':
          return `
## License

This project is licensed under the [BSD 3-Clause License](${renderLicenseLink(license)}).
`;
      default:
          return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

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

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about this project, please contact me via GitHub or email:
[${data.github}](https://github.com/${data.github}) or ${data.email}
`;
}

module.exports = generateMarkdown;

