const inquirer = require("inquirer");
const fs = require("fs");

// promptUser returns answers object
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is your GitHub user name?",
                name: "username"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your project's name?",
                name: "projectName"
            },
            {
                type: "input",
                message: "Please write a short description of your project.",
                name: "description"
            },
        ])
}

// Run the README generator
promptUser().then((answers) => {
    console.log(answers);
});
