// TODO: Include packages needed for this application
const genMarkDown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Description",
        message: "What is this Readme about?"
    },
    {
        type: "input",
        name: "Instalation",
        message: "What is this Readme about?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What is this Readme about?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "What is this Readme about?"
    },
    {
        type: "input",
        name: "Tests",
        message: "What is this Readme about?"
    },
    {
        type: "list",
        name: "License",
        message: "question",
        choices: ["", "", ""],
        default: ""
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const text = genMarkDown(answers)
            fs.writeFile("README.md", text, (e)=>{console.log(e)});
        });
};

// Function call to initialize app
init();
