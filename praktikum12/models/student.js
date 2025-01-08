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
}

module.exports = Student;
