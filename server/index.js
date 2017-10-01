require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../client/dist'));



//GET Handler

//POST Handler




app.listen(process.env.PORT, () => {
  console.log('listening to port ', process.env.PORT);
});

module.exports.app = app;