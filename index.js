const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

async function managerPrompt() {
  var manager = await inquirer.prompt([
    {
      type: "input",
      message: "What is the team managers name?",
      name: "name",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please Input a value to continue.";
        }
      },
    },
    {
      type: "input",
      message: "What is the team managers Employee ID?",
      name: "ein",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please Input a value to continue.";
        }
      },
    },
    {
      type: "input",
      message: "What is the team managers Email?",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please Input a value to continue.";
        }
      },
    },
    {
      type: "input",
      message: "What is the team managers Office Number?",
      name: "number",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please Input a value to continue.";
        }
      },
    },
  ]);
  return new Manager(manager.name, manager.ein, manager.email, manager.number);
}
async function engineerPrompt() {
  var engineer = await inquirer.prompt([
    {
      type: "input",
      message: "What is the Engineers name?",
      name: "name",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please Input a value to continue.";
        }
      },
    },
    {
      type: "input",
      message: "What is the Engineers Employee ID?",
      name: "ein",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please Input a value to continue.";
        }
      },
    },
    {
      type: "input",
      message: "What is the Engineers Email?",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please Input a value to continue.";
        }
      },
    },
    {
      type: "input",
      message: "What is the Engineers GitHub Username?",
      name: "username",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please Input a value to continue.";
        }
      },
    },
  ]);
  return new Engineer(
    engineer.name,
    engineer.ein,
    engineer.email,
    engineer.username
  );
}
async function internPrompt() {
  var intern = await inquirer.prompt([
    {
      type: "input",
      message: "What is the Interns name?",
      name: "name",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please Input a value to continue.";
        }
      },
    },
    {
      type: "input",
      message: "What is the Interns Employee ID?",
      name: "ein",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please Input a value to continue.";
        }
      },
    },
    {
      type: "input",
      message: "What is the Interns Email?",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please Input a value to continue.";
        }
      },
    },
    {
      type: "input",
      message: "What is the Interns school?",
      name: "username",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please Input a value to continue.";
        }
      },
    },
  ]);
  return new Intern(intern.name, intern.ein, intern.email, intern.username);
}
async function teamFunction() {
  var role = await inquirer.prompt([
    {
      type: "list",
      message: "What is the team members role?",
      name: "position",
      choices: ["Intern", "Engineer", "Quit"],
    },
  ]);
  return role.position;
}

async function menu() {
  var team = [];
  var manager = await managerPrompt();
  team.push(manager);
  var menuLoop = true;
  while (menuLoop) {
    var role = await teamFunction();
    switch (role) {
      case "Intern": {
        var intern = await internPrompt();
        team.push(intern);
        break;
      }
      case "Engineer": {
        var engineer = await engineerPrompt();
        team.push(engineer);
        break;
      }
      case "Quit": {
        menuLoop = !menuLoop;
        break;
      }
    }
  }
  console.log(team);
}

menu();
