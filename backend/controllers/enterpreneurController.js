import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const getProfile = asyncHandler(async (req, res) => {
  try {
    const user = User.findById(req.params.id);

    res.status(200).json({
      user: user,
      message: "User found successfully",
    });
  } catch (err) {
    res.status(500);
    throw new Error(err?.message || "Failed to find user");
  }
});

const changePassword = asyncHandler(async (req, res) => {
  try {
    const { email, password, newPassword } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400);
      throw new Error("User not found");
    }

    const isPasswordMatch = await user.matchPassword(password);

    if (!isPasswordMatch) {
      res.status(400);
      throw new Error("Old password is wrong");
    }

    user.password = newPassword;

    const updatedUser = await user.save();
    res.status(200).json({
      id: updatedUser._id,
      name: updatedUser.name,
      username: updatedUser.username,
      email: updatedUser.email,
      active: updatedUser.active,
      role: updatedUser.role,
      message: "Successfully updated password",
    });
  } catch (err) {
    res.status(500);
    throw new Error(err?.message || "Failed to change password");
  }
});

const getProjects = asyncHandler(async (req, res) => {
  const user = User.findById(req.params.id);
});

export { getProfile, changePassword };