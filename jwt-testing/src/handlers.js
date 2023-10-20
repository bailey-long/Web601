const jwt = require('jsonwebtoken');

//NOTE - define the JWT key and expiration time, used to sign and verify the JWT credentials.
const jwtKey = "my_secret_key";
const jwtExpirySeconds = 300;

//NOTE - define the users database, which will be used to validate the user credentials.
const users = {
    user1: 'password1',
    user2: 'password2'
}

const signIn = (req, res) => {
    //NOTE - Get credentials from JSON body
    const { username, password } = req.body;
    //REVIEW - return 400 status if username/password does not exist or if username/password is incorrect.
    if(!username || !password || users[username] !== password) {
        return res.status(401).end();
    }
}

//TODO - create a JWT token using the username in the payload
const token = jwt.sign({ username }, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
});

//NOTE - set the JWT as a cookie on the response
res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 });
res.end();

const access = (req, res) => {
    //NOTE - obtain the session token from the requests cookies, which come with every request
    const token = req.cookies.token;
    //TODO - if the cookie is not set, return an unauthorized error
    if(!token) {
        return res.status(401).end();
    }
}