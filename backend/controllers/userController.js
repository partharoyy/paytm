import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import accountModel from "../models/accountModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export const signupUser = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  try {
    const exists = await userModel.findOne({ email });

    if (exists) {
      return res.json({
        success: false,
        message: "Email already exists",
      });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Email not correct",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password should be more than 8 characters",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // add funds to a user account
    const userId = user._id;
    const addBalance = new accountModel({
      userId,
      balance: 1 + Math.random() * 10000,
    });

    await addBalance.save();

    const token = createToken(user._id);
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

export const signinUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const exists = await userModel.findOne({ email });

    if (!exists) {
      return res.json({
        success: false,
        message: "User does not exists",
      });
    }

    const isMatch = await bcrypt.compare(password, exists.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Wrong credentials please try again",
      });
    }

    const token = createToken(exists._id);

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

export const updateUser = async (req, res) => {
  const { firstName, lastName, password } = req.body;

  try {
    if (password && password.length < 8) {
      return res.json({
        success: false,
        message: "Password cannot be less than 8 characters",
      });
    }

    const updatedUserData = { firstName, lastName };

    if (password) {
      const salt = await bcrypt.genSalt(10);
      updatedUserData.password = await bcrypt.hash(password, salt);
    }

    await userModel.findByIdAndUpdate(req.body.userId, updatedUserData, { new: true });

    res.json({
      success: true,
      message: "Details updated",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

export const searchedUsers = async (req, res) => {
  const { queryUser } = req.body || "";

  try {
    const users = await userModel.find({
      $or: [{ firstName: { $regex: queryUser, $options: "i" } }, { lastName: { $regex: queryUser, $options: "i" } }],
    });

    res.json({
      success: true,
      users: users.map((user) => ({
        name: user.name,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      })),
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};
