import express from 'express';
import morgan from 'morgan';

const app = express();

    app.use(morgan('combined'))

    app.use('/', (req, res) => {
        res.send("Home page")
    });

//Listen for the middleware
app.listen(3000, () => console.log('Server running on port 3000'));