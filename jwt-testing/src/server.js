const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());

app.use(cookieParser());


app.post('/login', (req, res) => {});
app.get('/logout', (req, res) => {});

app.get('/homepage', (req, res) => {});

app.listen(8080, () => console.log('Server started on port 8080'));