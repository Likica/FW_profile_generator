//used https://www.youtube.com/watch?v=Pp9IG-prQjE for instructions //

// TODO: Include packages needed for this application
const generateHTML = require('./src/generateHTML');
// const licenses = require('./utils/licenses');
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "mngrName",
        message: "Please enter Team Manager's name:",
    },
    {
        type: "input",
        name: "mngrId",
        message: "Please enter Team Manager's Id:",
    },
    {
        type: "input",
        name: "mngrEmail",
        message: "Please enter Team Manager's email:",
    },
    {
        type: "input",
        name: "GitHub",
        message: "Please enter Team Manager's GitHub Profile:",
    },
    //Menu for users to choose options of entering new Data
    {
        type: "list",
        name: "optionsNewTM",
        message: "Please choose one of the folowing options if you would like to add Engineer or Intern or simply hit ENTER/SPACE to continue",
        choices: [
            "None",
            "Engineer",
            "Intern",
            'Employee',
            'Manager',
        ]
    },

]
// console.log(questions)

// TODO: Create a function to write HTML file
inquirer.prompt(questions).then(function (response) {
    console.log(response);

    const content = generateHTML(response);
    console.log(content);
    fs.writeFile('./dist/testProfile.html', content, function (err) {
        if (err) throw err
        console.log('Your HTML is generated!');
    });
});

