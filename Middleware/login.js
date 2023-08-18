//Import the express module
import express from 'express';

//Initialize the app
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url} ${JSON.stringify(req.headers)}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.listen(3000, () => console.log('Server running on port 3000'));