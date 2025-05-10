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
 *    $ npm install --save-dev nodemon
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
const port = 9000;

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
        res.status(404).json({ error: `Phone with id ${id} not found` });
    }
});

// Placeholder for future data route
app.get('/data', (req, res) => {
    res.send('More data coming soon!');
});

// 5. Start server
app.listen(port, () => {
    console.log(`🚀 Server running: http://localhost:${port}`);
});

/**
 * Tips:
 * - To stop the server: Ctrl+C
 * - To rerun: press ↑ (up-arrow) then Enter
 * - For production, consider environment variables for PORT, etc.
 */
