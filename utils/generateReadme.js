function generateReadme(answers) {
    return `
${answers.projectName}

## Description
${answers.description}

## Table of Contents
* [Project Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributing)
* [Tests](#tests)
* [Liscense](#liscense)
* [Questions](#questions)

## Project Installation
${answers.installation}

## Usage
${answers.usage}

## Contributions
${answers.contributing}

## Test
${answers.test}

## Liscense
${answers.liscense}

## Questions
${answers.questions}


Find me on GitHub: [${answers.username}](https://github.com/${answers.username})

Email me with any questions: ${answers.email}
    `;
}

module.exports = generateReadme;