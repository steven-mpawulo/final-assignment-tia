require('dotenv').config();
const mysql = require('mysql');

// creates a connection pool to mysql server
var con = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "test_db"
});

module.exports = con;