const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://munikumarsvec143:229E5a3701@training-placement.5pyamvi.mongodb.net/Training_Placement?retryWrites=true&w=majority&appName=Training-Placement";
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

async function getUserById(userId,userPassword) {
  try {
    const db = client.db();
    const collection = db.collection('Users');
    const user = await collection.findOne({ id: userId,password:userPassword});
    return user;
  } catch (error) {
    throw error;
  }
}

async function authenticateUser(credentials) {
  try {
    await connectToDatabase();

    const { id, password } = credentials;
    const user = await getUserById(id,password);
    if (!user) {
      return { authenticated: false };
    } else {
      return { authenticated: true, user };
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { connectToDatabase, authenticateUser };
