import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Get users
// Route    /api/users
// Access   Private
const getUsers = () => {
  const users = User.find();
};
