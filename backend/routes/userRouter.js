import express from "express";
import { signinUser, signupUser, updateUser, searchedUsers } from "../controllers/userController.js";
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", signupUser);
userRouter.post("/signin", signinUser);
userRouter.post("/", authMiddleware, updateUser);
userRouter.get("/search", searchedUsers);

export default userRouter;
