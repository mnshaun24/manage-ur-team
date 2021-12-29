const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Welcomelb$8',
    database: 'manage',
    // need port to connect
    port: 3306
  });

  
  module.exports = db;