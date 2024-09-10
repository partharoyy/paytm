import mongoose from "mongoose";
import accountModel from "../models/accountModel.js";

export const getBalance = async (req, res) => {
  try {
    const account = await accountModel.findOne({ userId: req.body.userId });

    if (!account) {
      return res.json({
        success: false,
        message: "Invalid Account",
      });
    }

    res.json({
      success: true,
      balance: account.balance,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

export const transferAmount = async (req, res) => {
  // create a db session
  const session = await mongoose.startSession();

  // start transaction
  session.startTransaction();
  const { amount, to } = req.body;
  const userId = req.body.userId;

  // fetch from account
  const fromAccount = await accountModel.findOne({ userId }).session(session);

  // check for account, its balance, if invalid abort the transaction
  if (!fromAccount || fromAccount.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      success: false,
      message: "Invalid Account or Insufficient Balance",
    });
  }

  // fetch to account
  const toAccount = await accountModel.findOne({ userId: to }).session(session);

  // check to account, if invalid abort transaction
  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      success: false,
      message: "Invalid Account",
    });
  }

  // do the transfer
  await accountModel.updateOne({ userId }, { $inc: { balance: -amount } }).session(session);
  await accountModel.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

  // commit transaction
  await session.commitTransaction();

  res.json({
    success: true,
    message: "Transfer successful",
  });
};
