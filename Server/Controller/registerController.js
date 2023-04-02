const express = require('express');
const app = express();

const passport = require('passport');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const helmet = require('helmet');
const cors = require('cors');
const config = require('../Model/config');
const googleapi = require('googleapis');
const bodyParser = require('body-parser');
app.use(cors());
//  Security Middlware using Helmet
app.use(express.json());
app.use(helmet.contentSecurityPolicy());
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
const registerController = (request, response) => {
    // Destructure All data of Reque4st Body 
    const { name, email, contact, password } = request.body;

    // Every Filed should be filled 
    if (!name || !password || !contact || !email) {
        response.send("All field required")
        return;
    }
    //Validation checking user is already Reagister or  not using email 
    const check = `SELECT * FROM users WHERE email="${email}";`;
    config.query(check, async(err, res) => {
        if (err) {
            console.log("Failed to fetch Data ");
            response.send("Failed to fetch Data ", err)
        } else {

            if (res.length > 0) {
                response.json({ massage: "Email is Already Register" })
                console.log("Is Response", res.length);
                return;
            } else {
                // Hahing of Password
                const saltRounds = 10;

                const newPassword = await bcrypt.hash(password, saltRounds)
                console.log(newPassword);
                //Insert User Data in Database 
                const SQL = `INSERT INTO users (id,name,email,contact,pass) VALUES(null,"${name}","${email}","${contact}","${newPassword}")`
                config.query(SQL, (err, result) => {
                    if (err) {
                        response.send("Somthing went Wrong ");
                        console.log("Somthing Went Wrong ", err);
                        return;
                    }
                    console.log(result);
                    response.send("Account Created Successfully ");
                })
            }

        }
    })

}
module.exports = registerController;