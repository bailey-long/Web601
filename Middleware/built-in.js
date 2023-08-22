//Import the express module
import express from 'express';

//Create instance of app
const app = express();

    //Parse JSON data
    app.use(express.json())

    app.post("/db", (req, res) => {
        const receivedDB = req.body
        res.send(`DB list: ${JSON.stringify(receivedDB)}`)
    });

//Listen for the middleware
app.listen(3000, () => console.log('Server running on port 3000'));