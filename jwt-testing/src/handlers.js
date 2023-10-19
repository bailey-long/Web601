const jwt = require('jsonwebtoken');

//NOTE - define the JWT key and expiration time, used to sign and verify the JWT credentials.
const jwtKey = "my_secret_key";
const jwtExpirySeconds = 300;

//NOTE - define the users database, which will be used to validate the user credentials.

const signIn = (req, res) => {
    //NOTE - Get credentials from JSON body
    const { username, password } = req.body;
    
    if(!username || !password || users[username] !== password) {
        return res.status(401).end();
    }
}