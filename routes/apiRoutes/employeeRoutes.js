const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// chooses to view all employees
router.get("/employees", (req, res) => {
    const sql = `SELECT * FROM employees`;

    db.query(sql, (err, rows) => {
        if (err) {
            rest.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: "success",
            data: rows
        });
    });
});

// choose to add a employees
router.post("/employees", ({ body }, res) => {
    const sql = `INSERT INTO employees (first_name, last_name) VALUES (?, ?)`;
    const params = [
        body.first_name,
        body.last_name
    ];

db.query(sql, params, (err, result) => {
    if (err) {
        res.status(400).json({ error: err.message });
        return;
    }
    res.json({
        message: "success",
        data: body
    });
});
});

// update an employee's information
function updateEmployee() {
    return inquirer.prompt ([
        {
            type: "input",
            name: "roleID",
            message: "What is the ID of the employee you're tryig to update?"
        },
        {
            type: "input",
            name: "newRoleID",
            message: "What is the name of the new role for your employee?"
        }
    ])

    .then (employeeData => {
        const data = [
            {
                role_id: employeeData.newRoleID
            },
            {
                id: employeeData.roleID
            }
        ]
        const sql = "UPDATE employees SET role_id = ? WHERE id = ?";

    db.query(sql, data, (err, rows) => {
        if (err) throw err;
        console.log("You have updated the employee roles");
    })
})
};


module.exports = Employee;