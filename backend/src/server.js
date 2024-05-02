
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./signupinsert');
const { insertUser } = require('./signupinsert');
const { authenticateUser } = require('./logincheck');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// Connect to MongoDB first
connectToDatabase().then(() => {
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

  // Define a route for handling login requests
  app.post('/login', async (req, res) => {
    try {
      const { id, password } = req.body;
      const result = await authenticateUser({ id, password });
      if (result.authenticated) {
        res.status(200).json({ message: "Login successful", user: result.user });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
      res.status(500).json({ message: "Failed to authenticate user" });
    }
  });

  // Start the server
  const port = 8000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(error => {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1);
});