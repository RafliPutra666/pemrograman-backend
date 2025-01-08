// Import express dan controller
const express = require("express");
const StudentController = require("../controllers/StudentController");

// Membuat router
const router = express.Router();

// Define routes
router.get("/students", StudentController.index);
router.get("/students/:id", StudentController.show); 
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update); 
router.delete("/students/:id", StudentController.destroy);

module.exports = router;
