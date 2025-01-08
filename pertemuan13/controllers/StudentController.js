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

  // Menampilkan satu data student berdasarkan id
  async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);
    res.json({
      message: `Menampilkan student dengan id ${id}`,
      data: student,
    });
  }

  // Menambahkan data student baru
  async store(req, res) {
    const student = await Student.create(req.body);
    res.json({
      message: "Menambahkan data student",
      data: student,
    });
  }

  // Memperbarui data student
  async update(req, res) {
    const { id } = req.params;
    const student = await Student.update(id, req.body);
    res.json({
      message: `Memperbarui data student dengan id ${id}`,
      data: student,
    });
  }

  // Menghapus data student
  async destroy(req, res) {
    const { id } = req.params;
    const result = await Student.delete(id);
    res.json({
      message: result.message,
    });
  }
}

module.exports = new StudentController();
