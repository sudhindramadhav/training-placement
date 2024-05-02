
const { MongoClient } = require('mongodb');

const uri ="mongodb+srv://munikumarsvec143:229E5a3701@training-placement.5pyamvi.mongodb.net/Training_Placement?retryWrites=true&w=majority&appName=Training-Placement";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

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
