require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = process.env.PORT ;

// Create MySQL Connection
const Test_db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Connect to MySQL
Test_db.connect((err) => {
  if (err) {
    console.error("Oopss!! Database connection failed: " );
    return;
  }
  console.log("whooo!! Connected to MySQL database!");
});

// Test Route
app.get("/", (req, res) => {
  res.send("Yaay!! Server is Running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
