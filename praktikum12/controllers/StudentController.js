// Import model Student
const Student = require("../models/student");

class StudentController {
  // Menampilkan semua data students
  async index(req, res) {
    const students = await Student.all();
    res.json({
      message: "Menampilkan semua students",
      data: students,
    });
  }


}

module.exports = new StudentController();
