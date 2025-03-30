import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("mongoDb connect succefully");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};
