import express from "express";
import { connectDB } from "./config/db.js";
import "dotenv/config";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import accountRouter from "./routes/accountRoute.js";

// app config
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB(process.env.MONGODB_URI);

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/account", accountRouter);

app.get("/", (req, res) => res.send("API working"));

// listen to server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT:${process.env.PORT}`);
});
