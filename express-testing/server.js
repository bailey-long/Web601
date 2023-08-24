const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy database in memory
const USERS_FILE_PATH = path.join(__dirname, 'users.json');

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`Received request from ${req.url}`);
    next(); // Don't forget to call next() to continue to the next middleware/route
});

// 👇️ you need this line to serve static files
app.use(express.static(__dirname + '/'));

// Route handling for the root URL
app.get('/', (req, res) => {
    const htmlPage = path.join(__dirname, 'index.html');

    fs.readFile(htmlPage, 'utf8', (error, htmlContent) => {
        if (error) {
            console.log(error);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.send(htmlContent);
    });
});

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`Received request from ${req.url}`);
    next(); // Don't forget to call next() to continue to the next middleware/route
});

// Auth
let users = []; // Initialize as empty array

// Read existing users from the JSON file and store in memory
fs.readFile(USERS_FILE_PATH, 'utf8', (err, data) => {
  if (!err) {
    users = JSON.parse(data);
  }
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const newUser = { username, password };

  // Read existing users from the JSON file
  fs.readFile(USERS_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    let users = JSON.parse(data);
    users.push(newUser);

    // Write updated users back to the JSON file
    fs.writeFile(USERS_FILE_PATH, JSON.stringify(users, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }

      console.log(`User ${username} registered.`);
      res.send('Registration successful');
    });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.send('Login successful');
  } else {
    res.send('Login failed');
  }
});

// Listen for incoming requests
app.listen(3000, () => console.log('Server running on port 3000'));
