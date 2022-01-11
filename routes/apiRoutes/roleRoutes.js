const db = require("../../db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");



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
    const sql = `SELECT roles.*, 
    departments.department_name AS department FROM roles 
    LEFT JOIN departments ON roles.department_id = departments.id`;

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
        },
        {
            type: "input",
            name: "newDeptRole",
            message: "What is the expected department for this role?"
        }
    ])

    .then (roleData => {
        const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
        let sqlArray = [roleData.newRole, roleData.newSalary, roleData.newDeptRole];
        db.query(sql, sqlArray, (err, res) => {
            if (err) throw err;
            console.log("You have added " + roleData.newRole);
        })
    })
};


module.exports = Role;
module.exports = { viewRole, addRole };
