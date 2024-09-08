import mongoose from "mongoose";

export const connectDB = async (uri) => {
  await mongoose.connect(uri).then(() => console.log("Connected to DB"));
};
