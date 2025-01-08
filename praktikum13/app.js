// Import express dan router
const express = require("express");
const router = require("./routes/api");

// Membuat object express
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Menggunakan router
app.use(router);

// Menjalankan server di port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
