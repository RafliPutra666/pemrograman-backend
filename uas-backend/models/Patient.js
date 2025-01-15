const db = require("../config/database");

class Patient {

  static all() { 
    return new Promise((resolve, reject) => { 
      db.query("SELECT * FROM patients", (err, rows) => { 
        if (err) { 
          reject(err); 
        } else { 
          resolve(rows); 
        } 
      }); 
    }); 
  }
  static create(data) { 
    const { name, phone, address, status, in_date_at, out_date_at } = data; 
    return new Promise((resolve, reject) => { 
      const query = ` 
        INSERT INTO patients (name, phone, address, status, in_date_at, out_date_at) 
        VALUES (?, ?, ?, ?, ?, ?) 
      `; 
      db.query(query, [name, phone, address, status, in_date_at, out_date_at], (err, result) => { 
        if (err) { 
          reject(err); // Tangani error jika terjadi 
        } else { 
          resolve({ id: result.insertId, ...data }); // Return data dengan ID yang baru di-generate 
        } 
      }); 
    }); 
  }
  static update(id, data) { 
    const { name, phone, address, status, in_date_at, out_date_at } = data; 
    return new Promise((resolve, reject) => { 
      const query = ` 
        UPDATE patients 
        SET name = ?, phone = ?, address = ?, status = ?, in_date_at = ?, out_date_at = ? 
        WHERE id = ? 
      `; 
      const values = [name, phone, address, status, in_date_at, out_date_at, id]; 
       
      db.query(query, values, (err, rows) => { 
        if (err) { 
          reject(err); 
        } else { 
          resolve(rows); 
        } 
      }); 
    }); 
  }

  static delete(id) { 
    return new Promise((resolve, reject) => { 
      db.query("DELETE FROM patients WHERE id = ?", [id], (err, results) => { 
        if (err) { 
          reject(err); // jika terjadi error, reject promise dengan error 
        } else { 
          resolve(results); // jika berhasil, resolve dengan hasil query (data yang dihapus) 
        } 
      }); 
    }); 
  }

  static find(id) {
    // method untuk menampilkan data berdasarkan id
    return new Promise((resolve, reject) => {
      // lakukan query ke db untuk ambil data berdasarkan id
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        if (err) {
          //jika error reject
          reject(err);
        } else {
          //jika berhasil resolve
          resolve(results[0]);
        }
      });
    });
  }
  static search(name) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM patients WHERE name LIKE ?";
      
      // Pastikan db.query sudah sesuai dengan pengaturan koneksi database
      db.query(query, [`%${name}%`], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
  static findByStatus(positive) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE status = ?";
      db.query(sql, [positive], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
  static findByStatus(recovered) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE status = ?";
      db.query(sql, [recovered], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
  static findByStatus(dead) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE status = ?";
      db.query(sql, [dead], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

}

// export class Patient
module.exports = Patient;
