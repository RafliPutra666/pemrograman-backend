// Import express dan controller
const express = require("express");
const StudentController = require("../controllers/StudentController");

// Membuat router
const router = express.Router();

// Define routes
router.get("/students", StudentController.index);

module.exports = router;
