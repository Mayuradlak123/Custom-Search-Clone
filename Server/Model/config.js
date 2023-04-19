const express = require('express');
const mysql = require('mysql');
const app = express();
const dotenv = require('dotenv').config();
const { DB, HOST, DBUSERNAME, DBPASSWORD, PORT } = process.env;

const connection = mysql.createConnection({
        host: HOST,
        user: DBUSERNAME,
        password: DBPASSWORD,
        database: "google",
    })
    // console.log(connection.config);
connection.connect((err, res) => {
    if (err) {
        console.log("Failed to connect with Database ");
    } else {
        console.log("MySQL Database Conected Successfully ");
    }
})
module.exports = connection;