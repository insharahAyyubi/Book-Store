import "dotenv/config"; // Ensure this is at the top
import express from "express";
import mongoose from "mongoose";
import bookRoute from "./route/book_route.js";
import userRoute from "./route/user_route.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.port || 4000;
const URI = process.env.mongoDB_URI;

// MongoDB connection
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// API Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Serve static files from the /dist directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../Frontend/dist'))); // Adjust path as needed

// Catch-all route to serve index.html for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});
