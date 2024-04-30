const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://219E1A3722:219E1A3722@cluster0.zt5xtcb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
}

connectToDatabase();

router.post('/signup', async (req, res) => {
  try {
    const { id, password } = req.body;
    console.log(`Received data: ${id}, ${password}`);

    const db = client.db("Training_Placement");
    const result = await db.collection("Users").insertOne({ id, password });
    console.log(`Inserted data with id: ${result.insertedId}`);

    res.send('Received data and saved to database successfully');
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send('Error saving data to database');
  }
});

module.exports = router;
