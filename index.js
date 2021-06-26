//used https://www.youtube.com/watch?v=Pp9IG-prQjE for instructions //
// TODO: Include packages needed for this application
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
// const licenses = require('./utils/licenses');
const fs = require('fs');
const inquirer = require('inquirer');

// need to figure out the starting the app properly with choice menu
// TODO: Create a function taking in an array of questions for user input/worked with my tutor on this/

//add output dir and path?

//render html
const render = require('./src/generateHMTL.js');

// teamMembers and their ids empty arrays
const myteamMembers = [];
const idArray = [];

function myTmenu() {

    //create function to create manager
    function createManager() {
        //add console.log as welcome message 
        console.log('Welcome to your Team Profile Generator! Please add members to your team.');
        //add inquirer to prompt for answers 
        inquirer.prompt([
            {

            }

        ])
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

            }

        ])
    }

    //addIntern function
    function addIntern() {
        inquirer.prompt([
            {

            }
        ])
    }

    //buildTeam Function - important to be at the end after all other ()'s have been called
    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
    }
    createManager();
}

myTmenu();


