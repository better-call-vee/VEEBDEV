/**
 * MongoDB + Express + .env Setup
 * --------------------------------
 * Step 1: Add .env file to .gitignore
 * Prevents your secrets from being pushed to GitHub.
 *
 * .gitignore:
 * ------------
 * .env
 *
 * Step 2: Create a .env file in the root directory
 * Store sensitive credentials securely.
 *
 * .env:
 * -----
 * DB_USER=yourMongoUsername
 * DB_PASS=yourMongoPassword
 *
 * You can name the keys whatever you want,
 * just make sure to match them in your code.
 *
 * Step 3: Configure dotenv in your entry point (e.g., index.js)
 * This loads your environment variables.
 */
require('dotenv').config();

/**
 * Step 4: Create the MongoDB connection URI using environment variables
 * Replace `vee9-1.e4dwdky.mongodb.net` with your actual cluster address.
 */
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@vee9-1.e4dwdky.mongodb.net/?retryWrites=true&w=majority&appName=vee9-1`;

// You can now use this URI in your MongoClient connection.
console.log("MongoDB URI ready:", uri);

/**
 * Notes:
 * ------
 * - Never hardcode your credentials directly in your code.
 * - Always load the `.env` variables before using them.
 * - Make sure the .env file exists before starting your app.
 */
