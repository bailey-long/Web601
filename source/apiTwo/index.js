const express = require('express');
const http = require('http');

const app = express();

app.use((req, res, next) => {
    use.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, world!");   
});