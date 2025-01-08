// Import database
const db = require("../config/database");

class Student {
  // Method untuk mengambil semua data students
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students";
      db.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  // Method untuk mengambil data berdasarkan id
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, [id], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  }

  // Method untuk menambahkan data student
  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        if (err) reject(err);
        resolve({ id: results.insertId, ...data });
      });
    });
  }

  // Method untuk memperbarui data student
  static update(id, data) {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        if (err) reject(err);
        resolve({ id, ...data });
      });
    });
  }

  // Method untuk menghapus data student
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, [id], (err, results) => {
        if (err) reject(err);
        resolve({ message: `Student with id ${id} deleted successfully` });
      });
    });
  }
}

module.exports = Student;
