//used https://www.youtube.com/watch?v=Pp9IG-prQjE for instructions //
// TODO: Include packages needed for this application
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHMTL');
// const licenses = require('./utils/licenses');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create a function taking in an array of questions for user input/
//add output dir and path
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'myteam.html');

//add output dir and path?

//render html
const render = require('./src/generateHMTL');
// need to figure out the starting the app properly with choice menu
// myTeamMembers and their ids empty arrays
const myTeamMembers = [];
const idArray = [];

function myTmenu() {

    //create function to create manager
    function createManager() {
        //add console.log as welcome message 
        console.log('Welcome to your Team Profile Generator! Please add members to your team.');
        //add inquirer to prompt for answers 
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter Team Manager's name:",
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter Team Manager's Id:",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter Team Manager's email:",
            },
            {
                type: "input",
                name: "managerPhoneNumber",
                message: "Please enter Team Manager's office phone number:",
            }
        ])
            .then(answers => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerPhoneNumber);
                myTeamMembers.push(manager);
                idArray.push(answers.managerId);
                createTeam();
            });
    }


    //create function for createTeam
    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'tMemberChoices',
                message: 'Please choose which team member role you want to add:',
                choices: [
                    "Engineer",
                    "Intern",
                    "None"
                ]
            }
        ])
            .then(userChoice => {
                switch (userChoice.tMemberChoices) {
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    default:
                        buildTeam();
                }
            });
    }
    //addEngineer function
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Please enter your new Engineer's name:"
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "Please enter your new Engineer's Id:"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Please enter your new Engineer's email:"
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "Please enter your new Engineer's GitHub:"
            }
        ])
            .then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                myTeamMembers.push(engineer);
                idArray.push(answers.engineerId);
                createTeam();
            });
    }

    //addIntern function
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Please enter your intern's name:"
            },
            {
                type: 'input',
                name: 'internId',
                message: "Please enter your intern's Id:"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "Please enter your intern's email:"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Please enter your intern's school:"
            }
        ])
            .then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                myTeamMembers.push(intern);
                idArray.push(answers.internId);
                createTeam();
            });
    }


    //buildTeam Function - important to be at the end after all other ()'s have been called
    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(myTeamMembers), 'utf-8');

    }
    createManager();
}

myTmenu();


