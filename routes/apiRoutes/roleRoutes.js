const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// build the class
class Role {
    constructor(id, job_title, salary) {
        this.id = id;
        this.jobTitle = job_title,
        this.salary = salary
    }
};

// chooses to view all employees
function viewRole() {
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        });
    }

// choose to add an employee
function addRole() {
    return inquirer.prompt ([
        {
            type: "input",
            name: "newRole",
            message: "What is the title of this role?"
        },
        {
            type: "input",
            name: "newSalary",
            message: "What is the expected salary for this role?"
        }
    ])

    .then (roleData => {
        const sql = `INSERT INTO employees (title, salary) VALUES (?, ?)`;

        db.query(sql, roleData.newRole, (err, res) => {
            if (err) throw err;
            console.log("You have added" + roleData.newRole);
        })
    })
};


module.exports = Role;
module.exports = { viewRole, addRole };
