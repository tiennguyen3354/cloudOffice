import "dotenv/config";
import express from "express";
import cors from "cors";
import { informationRouter } from "./routes/exampleRoute.js"; // Import the informationRouter from the exampleRoute.js file 

const app = express(); // Create an instance of the Express application
const PORT = process.env.PORT || 3000; // Use the PORT from the .env file or default to 3000

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors ({ origin: "http://localhost:5173", // Allow requests from this origin, the port is the port of your frontend application
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
})); 
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(express.json()); // Parse incoming JSON requests

//mount all the routes 
app.use('/information', informationRouter); // Mount the informationRouter at the '/information' path

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log a message when the server starts
}); 