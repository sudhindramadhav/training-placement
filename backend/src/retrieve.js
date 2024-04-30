// const express = require('express');
// const router = express.Router();
// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://219E1A3722:219E1A3722@cluster0.zt5xtcb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri);

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1); // Exit the process if unable to connect to MongoDB
//   }
// }

// connectToDatabase();

// router.get('/retrieve', async (req, res) => {
//   try {
//     const db = client.db("Training_Placement");
//     const data = await db.collection("Users").find().toArray();
//     console.log("Retrieved data:", data);
//     res.json(data);
//   } catch (error) {
//     console.error("Error retrieving data:", error);
//     res.status(500).send('Error retrieving data from database');
//   }
// });

// module.exports = router;

// retrieve.js

// retrieve.js
const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://219E1A3722:219E1A3722@cluster0.zt5xtcb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function connectToDatabase() {
  if (!client.isConnected()) {
    try {
      await client.connect();
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Exit the process if unable to connect to MongoDB
    }
  }
}

connectToDatabase();

router.get('/retrieve', async (req, res) => {
  try {
    await connectToDatabase();
    const db = client.db("Training_Placement");
    const data = await db.collection("Users").find().toArray();
    console.log("Retrieved data:", data);
    res.json(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).send('Error retrieving data from database');
  }
});

module.exports = router;
