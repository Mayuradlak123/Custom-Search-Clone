const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());
const config = require('../Model/config');
const dotenv = require('dotenv').config();
const { PORT } = process.env;
const registerController = require('../Controller/registerController');
app.listen(PORT, () => {
    console.log("Server is Started on localhost:%s", PORT);
})
app.post('/register', registerController);