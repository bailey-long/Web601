//Import the express module
import express from 'express';
//Import the path module
import path from 'path';

//Create instance of app
const app = express();

//Get the path to the ppublic directory
const staticPath = path.join(__dirname, 'public')

    app.use(express.static(staticPath))

    app.get('/', (req, res) => {
        res.send("Static files are now served from the public directory")
    });

//Listen for the middleware
app.listen(3000, () => console.log('Server running on port 3000'));