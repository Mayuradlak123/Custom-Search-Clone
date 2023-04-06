const config = require('../Model/config');
const express = require('express');
const app = express();

const loginController = (req, resp) => {

    var email = "mayuradlak030@gmail.com";
    const check = `SELECT * FROM signup WHERE email="${email}";`;
    config.query(check, (err, res) => {
        if (err) {
            console.log("Failed to fetch Data ", err);
            resp.send("Failed to fetch Data ")
        } else {

            if (res.length > 0) {
                resp.redirect("/auth/google/success")
                console.log("Is Response", res.length);
                return;
            } else {
                resp.redirect("/");
            }
        }
    })
};

module.exports = loginController;