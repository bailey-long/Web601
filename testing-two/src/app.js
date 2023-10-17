const express = require('express');
const morgn = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

//Initialize express app
const app = express();

//Setup students route
const students = require('./routes/students');

module.exports = app;