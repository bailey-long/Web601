const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const publicPath = path.resolve(__dirname, "asset");
app.use(express.static(publicPath));

//Middleware to handle errors, no next because nothing comes after
app.use((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Looks like you didnt find a static file.");
});

http.createServer(app).listen(3000);