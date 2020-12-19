const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your project? Write the name.",
            name: "projectName",
        },
        {
            type: "input",
            message: "What is your project about? Write a description.",
            name: "description",
        },
        {
            type: "input",
            message: "What do you need to install for the application to work? Describe the installation process.",
            name: "installation",
        },
        {
            type: "input",
            message: "What will you use this project for? Describe you intended usage.",
            name: "usage",
        },
        {
            type: "input",
            message: "Did anyone help contribute to this project besides you? List their Github name.",
            name: "contributing",
        },
        {
            type: "input",
            message: "Did you include any tests? List them below.",
            name: "tests",
        },
        {
            type: "list",
            message: "What liscense do you prefer to use for your project? Choose one from the list below.",
            name: "liscense",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            message: "How can users ask you qeustions if they have an issue with your project? Tell them to write their questions and contact you.",
            name: "questions",
        },
        {
            type: "input",
            message: "What is your Github name? Write your username.",
            name: "github",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },
    ]);
    
    promptUser()
    .then((answers) => writeFileAsync("README.md", generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.MD'))
    .catch((err) => console.error(err));
  