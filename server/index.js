import express from "express";
import { connectDB } from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = 4001;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
