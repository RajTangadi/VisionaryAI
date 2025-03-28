import express from "express";
import { connectDB } from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();
import imageRoutes from "./routes/image.route.js";

const app = express();

const PORT = 4000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/images", imageRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
