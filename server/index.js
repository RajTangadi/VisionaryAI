import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./db/connect.js";
import imageRoutes from "./routes/image.route.js";

const app = express();

const PORT = 4000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// Routes
app.use("/api/images", imageRoutes);

app.listen(PORT, () => {
  connectDB();
});
