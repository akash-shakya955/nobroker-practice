import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER USER
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // Generate token
  const token = jwt.sign({ id: user._id }, "anything", { expiresIn: "7d" });

  // Send response
  res.status(201).json({
    message: "User registered successfully!",
    token,
    user: { id: user._id, name: user.name, email: user.email },
  });
};

// LOGIN USER
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Generate token
  const token = jwt.sign({ id: user._id }, "anything", { expiresIn: "7d" });

  // Send success response
  res.json({
    message: "Login successful bhai!",
    token,
    user: { id: user._id, name: user.name, email: user.email },
  });
};