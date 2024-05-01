const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectToDatabase, insertUser } = require('./signupinsert');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// Connect to MongoDB
connectToDatabase();

// Define a route for handling signup requests
app.post('/signup', async (req, res) => {
  try {
    const result = await insertUser(req.body);
    res.status(201).json({ message: "User created successfully", userId: result.insertedId });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
});

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 


