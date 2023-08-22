//Import the express module
import express from 'express';

//Create instance of app
const app = express();

    app.use(express.urlencoded({extended: true}))

    app.post('/', (req, res) => {
        const cartData = req.body
        res.send(`Received from cart page ${cartData}`)
    });

//Listen for the middleware
app.listen(3000, () => console.log('Server running on port 3000'));