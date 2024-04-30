// // const express = require('express');
// // const cors = require('cors');
// // const { MongoClient, ServerApiVersion } = require('mongodb');
// // const signupInsertRouter = require('./signupinsert');
// // const retrieveRouter = require('./retrieve');

// // const app = express();
// // app.use(cors({ origin: 'http://localhost:3000' }));
// // app.use(express.json());

// // const uri = "mongodb+srv://219E1A3722:219E1A3722@cluster0.zt5xtcb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // const client = new MongoClient(uri, {
// //   serverApi: {
// //     version: ServerApiVersion.v1,
// //     strict: true,
// //     deprecationErrors: true,
// //   }
// // });

// // async function connectToDatabase() {
// //   try {
// //     await client.connect();
// //     console.log("Connected to MongoDB");
// //   } catch (error) {
// //     console.error("Error connecting to MongoDB:", error);
// //     process.exit(1); // Exit the process if unable to connect to MongoDB
// //   }
// // }

// // connectToDatabase();

// // app.use('/signupinsert', signupInsertRouter);
// // app.use('/retrieve', retrieveRouter); // Add the retrieve router

// // app.get('/', (req, res) => {
// //   res.send('Hello from the server!');
// // });

// // app.listen(8000, () => {
// //   console.log('Server is running on port 8000');
// // });

// // server.js
// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion } = require('mongodb');

// const app = express();
// app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(express.json());

// const uri = "mongodb+srv://219E1A3722:219E1A3722@cluster0.zt5xtcb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

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

// // Define the route for handling signup POST requests
// app.post('/signup', async (req, res) => {
//   const { id, password } = req.body;
//   // Example: Insert the signup data into MongoDB
//   const db = client.db("Training_Placement");
//   await db.collection("Users").insertOne({ id, password });
//   res.status(201).json({ message: "Signup successful" });
// });

// app.get('/', (req, res) => {
//   res.send('Hello from the server!');
// });

// app.listen(8000, () => {
//   console.log('Server is running on port 8000');
// });

// server.js
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const retrieveRouter = require('./retrieve');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const uri = "mongodb+srv://219E1A3722:219E1A3722@cluster0.zt5xtcb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

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

// Use the retrieveRouter for handling /retrieve requests
app.use('/retrieve', retrieveRouter);

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
