// this is not needed but kept in for future front end implementation

// require necessary files
const express = require('express');
const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes/routeIndex");

// get port ready for use
const PORT = process.env.PORT || 3001;
const app = express();


// Express middlware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
