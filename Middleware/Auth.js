//Import the express module
import express from 'express';

//Initialize the app
const app = express();

const isAuthenicated = (req, res, next) => {
    return req.headers.authorization === 'Token' ? next() : res.send('You are not authorized');
};

app.use((req, res, next) => {
   if(isAuthenicated(req)){
    next();
   } else {
    res.redirect('/login');
   }
});

app.get('/', (req, res) => {
    res.send('Welcome to the dashboard!');
});

app.listen(3000, () => console.log('Server running on port 3000'));