const config = require("../Model/config");
const bcrypt = require('bcrypt');
const helmet = require('helmet');
const cors = require('cors');

const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

const loginController = (request, response) => {
    const { email, password } = request.body;

    if (!email || !password) {
        response.status(400).json({ massage: "All Field Required" });
        console.log("Email and Password is Require");
        return;
    } else {
        const SQL = `SELECT * FROM users WHERE email="${email}";`;
        config.query(SQL, async(err, res) => {
            if (err) {
                console.log("Failed to fetch Database ");
            } else {
                if (res.length > 0) {
                    bcrypt.compare(password, res[0].pass, function(err, result) {
                        if (result === true && res[0].email === email) {
                            response.status(200).json({ massage: "User Logged in Successfullly" })
                            console.log("User Logged In Successfully ")
                        } else {
                            console.log("Emai is Not Register");
                            response.status(400)
                        }
                    })
                } else {
                    console.log("Invalid Credential");
                    response.status(400).json({ massage: "Invalid Credential" })

                }
            }
        })
        console.log();
    }
}
module.exports = loginController;