const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMd = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
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
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0",
            "GNU v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0"
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repository?",
        name: "contribute"
    },
];

// Function to promptUser returns answers object
const promptUser = () => {
    return inquirer
    .prompt(questions);
};

// Function to write README file
const writeToFile = (fileName, data) => {
    return writeFileAsync(fileName, data);
};

// Function to start program
const init = async () => {
    try {
        console.log("Welcome to the README generator.\nPlease answer the following questions:")
        // Ask user for answers to questions
        const answers = await promptUser();
        // Create markdown content from user answers
        const fileContent = generateMd(answers);
        // Write markdown content to README.md file
        await writeToFile("./output/README.md", fileContent);
        // Notify user that file has been written
        console.log("README.md created");
    } catch (err) {
        console.error("Error creating README! File not created.")
        console.log(err);
    };
};

// Function call to initialize program
init();

/*
// Run the README generator
promptUser().then((answers) => {
    console.log(answers);
});*/
