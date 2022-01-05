const inquirer = require("inquirer");
const cTable = require("console.table");
const Department = require("./routes/apiRoutes/departmentRoutes.js");
const Employee = require("./routes/apiRoutes/employeeRoutes.js");
const Role = require("./routes/apiRoutes/roleRoutes.js");
const { viewDept, addDept } = require("./routes/apiRoutes/departmentRoutes");
const { viewEmployee, addEmployee, updateEmployee } = require("./routes/apiRoutes/employeeRoutes");
const { viewRole, addRole } = require("./routes/apiRoutes/roleRoutes");
const db = require("./db/connection.js");

const startFunc = () => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "chooseAction",
            message: "What would you like to do?",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
        }
    ])
    .then(userChoice => {
        if (userChoice.chooseAction === "View all departments") {
            viewDept();
            setTimeout(() =>  startFunc, 5000);
            console.log("Hit an arrow key to return to the selection menu.")
        } else if (userChoice.chooseAction === "View all roles") {
            viewRole();
            setTimeout(() =>  startFunc, 5000);
            console.log("Hit an arrow key to return to the selection menu.")
        } else if (userChoice.chooseAction === "View all employees") {
            viewEmployee();
            setTimeout(() =>  startFunc, 5000);
            console.log("Hit an arrow key to return to the selection menu.")
        } else if (userChoice.chooseAction === "Add a department") {
            addDept();
            setTimeout(() =>  startFunc, 5000);
            console.log("Hit an arrow key to return to the selection menu.")
        } else if (userChoice.chooseAction === "Add a role") {
            addRole();
            setTimeout(() =>  startFunc, 5000);
            console.log("Hit an arrow key to return to the selection menu.")
        } else if (userChoice.chooseAction === "Add an employee") {
            addEmployee();
            setTimeout(() =>  startFunc, 5000);
            console.log("Hit an arrow key to return to the selection menu.")
        } else if (userChoice.chooseAction === "Update an employee role") {
            updateEmployee();
            setTimeout(() =>  startFunc, 5000);
            console.log("Hit an arrow key to return to the selection menu.")
        } else 
            db.end();
    })
};

startFunc();
