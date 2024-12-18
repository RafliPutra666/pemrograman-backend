// Import Express JS
const express = require("express");
const router = require("./routes/api.js");

// Create an Express JS instance
const app = express();

// Middleware to parse the request body
app.use(express.json());
app.use(express.urlencoded());

app.use(router);
// Start the server
app.listen(3000);
