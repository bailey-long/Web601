const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use((req, res, next) => {
    if (req.url === "/") {
        res.end("Welcome to the homepage.");
    } else if (req.url === "/throw") {
        throw new Error("Wrong Path.");
    } else {
        next("You didnt visit the root");
    }
});

app.use((req, res) => {
    res.send("welcome to the homepage")
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500);
    next(err);
});

app.use((err, req, res, next) => {
    res.send("Internal server error.");
});