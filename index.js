// Needed Apps
const inquirer = require('inquirer')
const genMD = require('./utils/generateMarkdown');
const fs = require('fs');
// Array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "pName",
        validate: (value) => {
            if (value.length < 1) {
                return "There is no name entered, please enter a name"
            } else {
                return true
            }
        }
    },

    {
        type: "input",
        message: "Please type a description for your project.",
        name: "pDesc",
        validate: (value) => {
            if (value.length < 1) {
                return "There is no description entered, please enter a description"
            } else {
                return true
            }
        }
    },

    {
        type: "input",
        message: "What are the steps needed to install your project?",
        name: "pInstall"
    },

    {
        type: "input",
        message: "How does a user use this project?",
        name: "pUsage"
    },

    {
        type: "input",
        message: "How does someone contribute to this project?",
        name: "pContribute",
    },

    {
        type: "list",
        message: "Select a license:",
        choices: ["MIT", "GNU GPLv3", "Mozilla Public License 2.0", "Boost Software License 1.0", "None"],
        name: "pLicense",
    },

    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username",
        validate: (value) => {
            if (value.length < 1) {
                return "Please enter your GitHub username."
            } else {
                return true
            }
        }
    },

    {
        type: "input",
        message: "Enter your email address:",
        name: "email",
        validate: (value) => {
            if (value.length < 1) {
                return "Please enter your email address."
            } else {
                return true
            }
        }
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err, result) => {
        if (err) {
            throw err}
        else {
            console.log("README has been generated successfully.")
        }
    })
}

// Function to initialize
function init() {
    inquirer.prompt(questions).then((inputs) => {
        writeToFile("./GenerateME/README.md", genMD(inputs))
    })
}

// Function call to initialize app
init();
