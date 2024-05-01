const { MongoClient } = require('mongodb');

// MongoDB connection URI with database name
const uri = "mongodb+srv://219E1A3722:219E1A3722@cluster0.zt5xtcb.mongodb.net/Training_Placement?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
}

// Insert user data into MongoDB
async function insertUser(newUser) {
  try {
    const db = client.db();
    const collection = db.collection('Users');
    const result = await collection.insertOne(newUser);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = { connectToDatabase, insertUser };
