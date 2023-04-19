const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const config = require("../Model/config");
const dotenv = require("dotenv").config();
const { PORT } = process.env;
const cookieSession = require("cookie-session");
require("../Controller/googleAuth");

app.use(cookieSession({
    name: "google-auth-session",
    keys: ["key1", "key2"]
}));
const registerController = require("../Controller/registerController");
const loginController = require("../Controller/loginController");
const readData = require("../Controller/readData");

app.listen(PORT, () => {
    console.log("Server is Started on localhost:%s", PORT);
})

app.get("/", (req, res) => {
    res.send(` <button> <a href="/auth/google"> Login with Google</a> </button  `)
    console.log("Starting Page ");
})
app.post("/register", registerController);
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        console.log(" Successful authentication");

        // Successful authentication, redirect home.
        res.redirect('/');
    });

app.post("/login", loginController);
app.get("/read/:email", readData)