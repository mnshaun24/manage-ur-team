// const express = require("express");
// const router = express.Router();
const db = require("../../db/connection");
const cTable = require("console.table");
const inquirer = require("inquirer");


// build the class
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }
};

// chooses to view all departments
function viewDept() {
    const sql = `SELECT * FROM departments`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        });
    }

// choose to add a department
function addDept() {
    return inquirer.prompt ([
        {
            type: "input",
            name: "newDept",
            message: "What is the name of the new department?"
        }
    ])

    .then (departmentData => {
        const sql = `INSERT INTO departments (department_name) VALUES (?)`;

        db.query(sql, departmentData.newDept, (err, res) => {
            if (err) throw err;
            console.log("You have added" + departmentData.newDept);
        })
    })
};

module.exports = Department;
module.exports = { viewDept, addDept };
