import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./db/connect.js";
import imageRoutes from "./routes/image.route.js";

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );
app.use(cors());

// Routes
app.use("/api/images", imageRoutes);
app.get("/", async (req, res) => {
  res.send("Hello there");
});

// Connect to the database first, then start the server
const startServer = async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1); 
  }
};

startServer();
