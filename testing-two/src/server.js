const app = require('./app.js')

const port = process.env.PORT || 3000

//function to pass the port variables to the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});