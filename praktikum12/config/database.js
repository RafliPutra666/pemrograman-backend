// Import mysql
const mysql = require("mysql");

// Import dotenv untuk membaca file .env
require("dotenv").config();

// Destructuring variabel environment
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

// Konfigurasi koneksi database
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

// Menghubungkan ke database
db.connect((err) => {
  if (err) {
    console.log("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database");
});

module.exports = db;
