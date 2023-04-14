const express = require('express')
const cors = require('cors');
const config = require('../Model/config');

const readData = (request, response) => {
    const email = request.params.email;
    const SQL = `SELECT * FROM users WHERE email="${email}";`;
    config.query(SQL, (err, result) => {
        if (err) {
            console.log("Failed To fetch Data ");
        } else {
            console.log("Data Fethed Successfully ", result[0]);
            response.send(result[0])
        }
    })
}
module.exports = readData;