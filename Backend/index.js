import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import bookRoute from "./route/book_route.js";
import userRoute from "./route/user_route.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.port || 4000;

// connect to mongoDB
const URI = process.env.mongoDB_URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});
