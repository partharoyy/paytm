import express from "express";
import { signinUser, signupUser, updateUser } from "../controllers/userController.js";
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", signupUser);
userRouter.post("/signin", signinUser);
userRouter.post("/", authMiddleware, updateUser);

export default userRouter;
