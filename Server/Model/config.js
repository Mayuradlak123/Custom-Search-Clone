const express = require('express');
const mysql = require('mysql');
const app = express();
const dotenv = require('dotenv').config();
const { DB, HOST, USERNAME, PASSWORD, PORT } = process.env;

const connection = mysql.createConnection({
    host: HOST,
    user: "root",
    password: PASSWORD,
    database: "google",
})
connection.connect((err, res) => {
    if (err) {
        console.log("Failed to connect with Database ");
    } else {
        console.log("MySQL Database Conected Successfully " + res);
    }
})
module.exports = connection;