// import PatientController
const PatientController = require("../controllers/PatientController");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});
router.get("/patient", PatientController.index);
router.post("/patient", PatientController.store);
router.put("/patient/:id", PatientController.update);
router.delete("/patient/:id", PatientController.destroy);
// router.post("/patient", PatientController.store);
// Membuat routing patient

// export router
module.exports = router;
