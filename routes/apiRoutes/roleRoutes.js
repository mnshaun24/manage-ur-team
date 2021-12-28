const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// chooses to view all departments
router.get("/roles", (req, res) => {
    const sql = `SELECT * FROM roles`;

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
router.post("/roles", ({ body }, res) => {
    const sql = `INSERT INTO roles (id, title, salary) VALUES (?, ?, ?)`;
    const params = [
        body.id,
        body.title,
        body.salary
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