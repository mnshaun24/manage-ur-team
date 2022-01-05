const db = require("../../db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");




// build the class
class Employee {
    constructor(id, first_name, last_name, job_title) {
        this.id = id;
        this.name = first_name;
        this.lastName = last_name;
        this.jobTitle = job_title
    }
};

// chooses to view all employees
function viewEmployee() {
    const sql = `SELECT * FROM employees`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        });
    }

// choose to add an employee
function addEmployee() {
    return inquirer.prompt ([
        {
            type: "input",
            name: "newEmployee",
            message: "What is the name of the new employee?"
        }
    ])

    .then (employeeData => {
        const sql = `INSERT INTO employees (first_name, last_name, job_title) VALUES (?, ?, ?)`;

        db.query(sql, employeeData.newEmployee, (err, res) => {
            if (err) throw err;
            console.log("You have added" + employeeData.newEmployee);
        })
    })
};


// update an employee's information
function updateEmployee() {
    return inquirer.prompt ([
        {
            type: "input",
            name: "employeeId",
            message: "What is the ID of the employee you're trying to update?"
        },
        {
            type: "input",
            name: "newJobTitle",
            message: "What is the name of the new job title for your employee?"
        }
    ])

    .then (employeeData => {
        const data = [
            {
                job_title: employeeData.newJobTitle
            },
            {
                id: employeeData.employeeId
            }
        ]
        const sql = "UPDATE employees SET ? WHERE ?";

    db.query(sql, data, (err, rows) => {
        if (err) throw err;
        console.log("You have updated the employee roles");
    })
})
};


module.exports = Employee;
module.exports = { viewEmployee, addEmployee, updateEmployee };
