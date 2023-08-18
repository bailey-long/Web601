//Import the express module
import express from 'express';

//Create instance of app
const app = express();

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        if(req.method === 'OPTIONS'){
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });

    app.get('/', (req, res) => {
        res.send('CORS Middleware enabled');
    });

//Listen for the middleware
app.listen(3000, () => console.log('Server running on port 3000'));