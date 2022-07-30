const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

inquirer.prompt (
    [
        {
            type: 'input',
            message: "What is your position title?",
            name: 'position',
            validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
        },

    ]
)
function managerPrompt() {
    inquirer.prompt (
        [
            {
                type: 'input',
                message: "What is your name?",
                name: 'name',
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            },
            {
                type: 'input',
                message: "What is your Employee ID?",
                name: 'ein',
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            },
            {
                type: 'input',
                message: "What is your Email?",
                name: 'email',
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            },
            {
                type: 'input',
                message: "What is your Office Number?",
                name: 'number',
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            },
        ]
    )
}

// function menu() {
//     while (true) {

//     }

// }

// menu();