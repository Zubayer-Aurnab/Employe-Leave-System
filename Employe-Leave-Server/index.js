const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://employe-managment:uUUHX6jy7fX8V887@cluster0.2dfdg2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const UserCollection = client.db("Employee-managment").collection("Users");

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });

        //post a user on the database 
        app.post("/users", async (req, res) => {
            const user = req.body;
            const query = { email: user.email };
            const existingUser = await UserCollection.findOne(query);
            if (existingUser) {
                return res.send({ message: "user already exists", insertedId: null });
            }
            const result = await UserCollection.insertOne(user);
            res.send(result);
        });
        //get all the user data from the database
        app.get('/all-users', async (req, res) => {
            const result = await UserCollection.find().toArray();
            res.send(result);
        })
        //find a user data by email 
        app.get('/user-data/:email', async (req, res) => {
            const email = await req.params.email;
            // console.log(email);
            const query = { email: new RegExp(`^${email}$`, "i") };

            const result = await UserCollection.findOne(query);

            res.send(result);
        })
        //update to admin
        app.patch("/users/admin/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const { Role } = req.body;
            const updatedDoc = {
                $set: {
                    role: Role,
                },
            };
            const result = await UserCollection.updateOne(filter, updatedDoc);
            res.send(result);
        });
        //user delete
        app.delete("/users-delete/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await UserCollection.deleteOne(query);
            res.send(result);
        });
















        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);





app.get("/", (req, res) => {
    res.send("Employee server is running");
});

app.listen(port, () => {
    console.log(`Employee server is running on port: ${port}`);
});
