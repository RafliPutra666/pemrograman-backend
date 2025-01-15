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



}

// export class Patient
module.exports = Patient;
