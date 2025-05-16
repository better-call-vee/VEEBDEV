/**
 * 🗂 Project Setup
 *
 * 1. Create & enter project folder:
 *    $ mkdir my-first-express
 *    $ cd my-first-express
 *
 * 2. Initialize npm & install dependencies:
 *    $ npm init -y           # Accept all defaults
 *    $ npm install express cors
 *    $ npm install --save-dev nodemon   # For auto-reloading during development
 *    
 *     nodemon index.js
 *
 * 🚀 Running Your Server
 *
 * - Dev mode (auto-restart on file changes):
 *     $ npm run dev
 *
 * - Production mode:
 *     $ npm start
 *
 * --------------------------------------------
 * 🧠 Concept Recap:
 * 
 * - express.json() is middleware: it lets Express read JSON data from req.body
 * - CORS is used to allow a React app (or any frontend) to connect to this server
 * - POST requests need:
 *     1. method: 'POST'
 *     2. headers: { 'Content-Type': 'application/json' }
 *     3. body: JSON.stringify(data) // follow users.jsx
 * - In Express, req.body gives access to the posted data.
 * --------------------------------------------
 */

// 1. Load modules
const express = require('express');
const cors = require('cors');

// 2. Create Express app
const app = express();
const port = process.env.PORT || 9000; // Default port or environment port

// Temporary in-memory database
let users = []; // We'll POST new users to this array

// 3. Middleware
app.use(cors());             // Enable CORS so React can talk to this backend
app.use(express.json());     // Parse incoming JSON data from the request body

// 4. Routes

// Health check route
app.get('/', (req, res) => {
    res.send('✅ Hello from Vee!');
});

// ---------------------------
// 🔍 GET All Users
// This route returns the list of users
app.get('/users', (req, res) => {
    res.json(users); // send all users
});

// ---------------------------
// 📩 POST New User
// This route accepts a new user from the client
app.post('/users', (req, res) => {
    const newUser = req.body;              // Step 1: read data from client
    newUser.id = users.length + 1;         // Step 2: add an ID
    users.push(newUser);                   // Step 3: save to "database"
    res.status(201).send(newUser);         // Step 4: respond with created user
});

// ---------------------------
// (Optional) Example data route
app.get('/data', (req, res) => {
    res.send('📦 More data coming soon!');
});

// 5. Start the server
app.listen(port, () => {
    console.log(`🚀 Server running: http://localhost:${port}`);
});

/**
 * 🛠 Tips for Development
 *
 * - To stop the server: Ctrl+C
 * - To rerun manually: Up-arrow ↑ then Enter
 * - Use tools like Postman or a React form to test POST requests
 * - For persistent storage, you’ll later replace `users = []` with a database
 */




//PREVIOUS :
/**
 * 🗂 Project Setup
 *
 * 1. Create & enter project folder:
 *    $ mkdir my-first-express
 *    $ cd my-first-express
 *
 * 2. Initialize npm & install dependencies:
 *    $ npm init -y           # Accept all defaults
 *    $ npm install express cors
 *    $ npm install --save-dev nodemon , to automatically redirect after updates
 *

 * 🚀 Running Your Server
 *
 * - Dev mode (auto-restart on file changes):
 *     $ npm run dev
 *
 * - Production mode:
 *     $ npm start
 *

 */

// 1. Load modules
const express = require('express');
const cors = require('cors');
// This lets your React app talk to your Express API without “blocked by CORS” errors.
const phones = require('./phones.json');

// 2. Create Express app
const app = express();
const port = process.env.PORT || 9000; // taking the available port. dynamic port. default 9000

// 3. Middleware
app.use(cors());          // Enable CORS for all routes
app.use(express.json());  // Parse JSON bodies (for future POST/PUT)

// 4. Routes

// Health check / root
app.get('/', (req, res) => {
    res.send('✅ Hello from Vee!');
});

// Get all phones
app.get('/phones', (req, res) => {
    res.json(phones);
});

// Get phone by ID
app.get('/phones/:id', (req, res) => {
    const id = Number(req.params.id);
    const phone = phones.find(p => p.id === id);
    if (phone) {
        res.json(phone);
    } else {
        res.status(404).json({ error: Phone with id ${ id } not found });
    }
});

// Placeholder for future data route
app.get('/data', (req, res) => {
    res.send('More data coming soon!');
});

// 5. Start server
app.listen(port, () => {
    console.log(🚀 Server running: http://localhost:${port}); //to check the port
});

/**
 * Tips:
 * - To stop the server: Ctrl+C
 * - To rerun: press ↑ (up-arrow) then Enter
 * - For production, consider environment variables for PORT, etc.
 */
