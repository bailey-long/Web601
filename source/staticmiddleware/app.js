//Get the modules as variables to reference, importing
const express = require('express');
const path = require('path');
const fs = require('fs');

//Creating an instance of the express app
const app = express();

//Use the app to show the url and date of the request
app.use((req, res, next) => {
    console.log(`Request IP: ${req.url}`);
    console.log(`Request date: ${new Date()}`);
    //Break
    next();
});

app.use((req, res, next) => {
    //creates a new variable with the value of the joined arguments
    const filePath = path.join(__dirname, "static", req.url);
    fs.stat(filePath, (err, fileInfo) => {
        if (err) {
            next();
            return;
        }
        if (fileInfo.isFile()) {
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});