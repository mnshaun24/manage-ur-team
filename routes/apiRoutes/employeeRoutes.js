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
router.put("/employees/:id", (req, res) => {
    const sql = "UPDATE employees SET role_id = ? WHERE id = ?";
    const params = [req.body.role_id, req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: "Employee not found"
            });
        } else {
            res.json({
                message: "success",
                data: req.body,
                changes: result.affectedRows
            });
        }
    });
});

module.exports = Employee;