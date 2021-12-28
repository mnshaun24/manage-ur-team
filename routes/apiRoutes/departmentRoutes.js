const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// chooses to view all departments
router.get("/departments", (req, res) => {
    const sql = `SELECT * FROM departments`;

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

// choose to add a department
router.post("/departments", ({ body }, res) => {
    const sql = `INSERT INTO departments (department_name) VALUES (?)`;
    const params = [
        body.department_name
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

module.exports = router;