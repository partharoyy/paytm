import express from "express";
import authMiddleware from "../middleware/auth.js";
import { getBalance, transferAmount } from "../controllers/accountController.js";

const accountRouter = express.Router();

accountRouter.get("/balance", authMiddleware, getBalance);
accountRouter.post("/transfer", authMiddleware, transferAmount);

export default accountRouter;
