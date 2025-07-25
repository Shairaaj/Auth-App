import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(402, "Invalid Credentials"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, email: _, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 86400000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json({ ...rest, message: "Signed in successfully!!!", success: true });
  } catch (err) {
    next(err);
  }
};

export const google = async (req, res, next) => {
  const {name: username, email, photoUrl: profilePicture } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 3600000);
      res.cookie("access_token", token, {
        httpOnly: true,
        expires: expiryDate,
      }).status(200).json(rest);
    } else {
      const randomPass =
        Math.random().toString(36).slice(-8)
      const hashedPass = await bcryptjs.hash(randomPass, 10);
      const newUser = new User({
        username:
          username.split(" ").join("").toLowerCase() +
          Math.floor(Math.random() * 10000).toString(),
        email,
        profilePicture,
        password: hashedPass,
      });
      await newUser.save();
      const token= jwt.sign({id: newUser._id},process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = newUser._doc;
      const expiryDate = new Date(Date.now() + 3600000);
      res.cookie("access_token", token, {
        httpOnly: true,
        expires: expiryDate,
      }).status(200).json(rest);
    }
  } catch (err) {
    next(err);
  }
};
