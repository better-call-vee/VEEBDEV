const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// O4WmS3Hp0osSPI79
const uri = "mongodb+srv://vee:O4WmS3Hp0osSPI79@vee9-1.e4dwdky.mongodb.net/?retryWrites=true&w=majority&appName=vee9-1";
// here we need to write pass

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


// this following portion is to catch an error
// only try not allowed, at least catch/finally has to be written.
// if no error, goes to finally, if error, that also reaches to finally
// if only error, reaches to catch
async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        const database = client.db('usersdb'); // Connect to (or create if not exists) the 'usersdb' database from the MongoDB client.
        const usersCollection = database.collection('users'); // Access (or create if not exists) the 'users' collection inside the 'usersdb' database.

        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await usersCollection.findOne(query);
            res.send(result);
        })

        //inserting the data
        app.post('/users', async (req, res) => {
            console.log('data in the server', req.body); //Print the incoming request body (user data) to the console for debugging.
            const newUser = req.body; // Store the received user data from the request body in a variable called newUser.
            const result = await usersCollection.insertOne(newUser); //Insert the newUser object into the 'users' collection in the database and wait for the result. insertAll is also used to insert more than one

            res.send(result) // Send back the result of the insertion (e.g., success status, inserted ID) as the server's response.
        })
        // N.B: await tells the program: “Wait here until the data is inserted and you get the result.” You must mark the function as async if you're using await inside it.

        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const user = req.body;

            const updatedDoc = {
                $set: {
                    name: user.name,
                    email: user.email
                }
            }

            const result = await usersCollection.updateOne(filter, updatedDoc);
            res.send(result);

        })

        app.delete('/users/:id', async (req, res) => {
            // console.log(req.params);
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }; // to find the right property/item. 
            // we can do this with any property(title/phone etc).
            // and , as id in the database is saved as ObjectId, we are using that. 
            const result = await usersCollection.deleteOne(query);
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!"); //feedback of the ping
    }
    catch (err) {
        console.error("MongoDB connection error:", err);
    }
    finally {
        // Ensures that the client will close when you finish/error
        // await client.close(); (only for one time usage, not suitable for dynamic uses)
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Simple Crud Server running')
});

app.listen(port, () => {
    console.log(`Simple CRUD server running on, ${port}`)
})


/*

go to mongoDB and then Clusters -> then Connect -> then Drivers

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vee:<db_password>@vee9-1.e4dwdky.mongodb.net/?retryWrites=true&w=majority&appName=vee9-1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

 */


/**
 * The `app.get('/users')` route retrieves all users from MongoDB by querying the `usersCollection`, a reference to the `users` collection in the database. It uses `find()` to create a cursor, converts results to an array with `toArray()`, and sends the JSON response. This route works alongside `POST /users` (inserts new users) and `DELETE /users/:id` (deletes a user) because **all operations share the same `usersCollection` variable**, which is initialized once when the server starts. This shared reference ensures every route interacts with the **same MongoDB collection** (`users` in `usersdb`), while the persistent MongoDB client connection (not closed in `finally`) allows continuous CRUD operations.
 */