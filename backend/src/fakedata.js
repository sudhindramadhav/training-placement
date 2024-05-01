const { MongoClient } = require('mongodb');
const faker = require('faker');

// MongoDB connection URI with database name
const uri = "mongodb+srv://219E1A3722:219E1A3722@cluster0.zt5xtcb.mongodb.net/Training_Placement?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Set to store generated userids
const generatedUserIds = new Set();

// Connect to MongoDB and insert fake data once
async function connectAndInsertFakeData() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    
    await insertFakeData();
    await client.close(); // Close the MongoDB connection after inserting fake data
    console.log("Fake data inserted successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB or inserting fake data:", error);
    process.exit(1); // Exit the process if unable to connect or insert fake data
  }
}

// Insert fake data into MongoDB
async function insertFakeData() {
  try {
    const db = client.db();
    const collection = db.collection('Training');

    // Generate fake data and insert into MongoDB
    for (let i = 0; i < 10; i++) {
      let userid = generateUserId();
      
      // Check if userid is already generated, generate a new one if it is
      while (generatedUserIds.has(userid)) {
        userid = generateUserId();
      }
      
      generatedUserIds.add(userid); // Add the userid to the Set
      const newUser = {
        userid: userid, // Use the generated userid
        privileges: faker.random.arrayElement(['student', 'incharge']), // Randomly select 'student' or 'incharge' as privileges
        createdAt: new Date(),
      };
      await collection.insertOne(newUser);
    }
  } catch (error) {
    throw error;
  }
}

// Function to generate a userid in the specified format
// Function to generate a userid in the specified format
function generateUserId() {
    const currentYearLastTwoDigits = new Date().getFullYear() - 2000; // Get the last two digits of the current year
    const firstTwoDigits = Math.floor(Math.random() * (currentYearLastTwoDigits - 21 + 1)) + 21; // Generate a random number between 21 and the current year's last two digits
    const randomAlphanumeric = Math.random().toString(36).replace(/[^a-zA-Z0-9]/g, '').toUpperCase().substr(0, 4); // Generate a random 4-character alphanumeric string
    const randomNum = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
    return `${firstTwoDigits}${randomAlphanumeric}${randomNum}`; // Concatenate the parts to form the userid
  }
  

// Start the process
connectAndInsertFakeData();
