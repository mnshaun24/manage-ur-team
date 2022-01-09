// kept this in for future front end implementation but not functional in current form of project

const express = require("express");
const router = express.Router();

router.use(require("./departmentRoutes"));
router.use(require("./roleRoutes"));
router.use(require("./employeeRoutes"));


module.exports = router;