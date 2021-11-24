// TODO: Include packages needed for this application
const genMarkDown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    // {
    //     type: "input",
    //     name: "Title",
    //     message: "What is the Title of your project?"
    // },
    // {
    //     type: "input",
    //     name: "Description",
    //     message: "Please Describe your project."
    // },
    // {
    //     type: "input",
    //     name: "Content",
    //     message: "Please add content to your Readme file."
    // },
    // {
    //     type: "input",
    //     name: "Instalation",
    //     message: "What is this Readme about?"
    // },
    // {
    //     type: "input",
    //     name: "Usage",
    //     message: "What is this Readme about?"
    // },
    // {
    //     type: "input",
    //     name: "Contributing",
    //     message: "What is this Readme about?"
    // },
    // {
    //     type: "input",
    //     name: "Tests",
    //     message: "What is this Readme about?"
    // },
    {
        type: "list",
        name: "License",
        message: "What License you want to choese",
        choices: ["MIT License", "The Unlicense", "None of this"],
        default: "None of this"
    },
    {
        type: "input",
        name: "GitHub",
        message: "Please add your GitHub Username?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (e)=>{console.log(e)});
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const text = genMarkDown(answers)
            writeToFile("README.md", text);
        });
};

// Function call to initialize app
init();
