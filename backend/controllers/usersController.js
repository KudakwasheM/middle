import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Get users
// Route    Get /api/users
// Access   Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    message: "Users found successfully",
    users: users,
  });
});

// @desc    Get users
// Route    Get /api/users
// Access   Private
const getEnterpreneurs = asyncHandler(async (req, res) => {
  const users = await User.find({ role: "Enterpreneur" });

  res.status(200).json({
    message: "Users found successfully",
    users: users,
  });
});

// @desc    Get user
// Route    Get /api/users/:id
// Access   Private
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  res.status(200).json({
    user: user,
    message: "User found successfully",
  });
});

// @desc    Set user
// Route    Post /api/users
// Access   Private
const setUser = asyncHandler(async (req, res) => {
  const { name, username, active, email, role, password } = req.body;

  if (
    req.body.name === "" ||
    req.body.username === "" ||
    req.body.role === "" ||
    req.body.password === "" ||
    req.body.email === ""
  ) {
    res.status(401);
    throw new Error("Fill in all fields");
  }

  const emailExist = await User.findOne({ email });
  const usernameExist = await User.findOne({ username });

  if (emailExist) {
    res.status(400);
    throw new Error("Email already exists");
  } else if (usernameExist) {
    res.status(400);
    throw new Error("Username already exists");
  }

  const user = await User.create({
    name,
    username,
    email,
    active,
    subscribed: false,
    role,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      active: user.active,
      subscribed: user.subscribed,
      role: user.role,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Update user
// Route    Put /api/users/:id
// Access   Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.active = req.body.active || user.active;
    user.role = req.body.role || user.role;
    user.subscribed = req.body.subscribed || user.subscribed;
    // user.subscribed = req.body.subscribed || user.subscribed;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      username: updatedUser.username,
      email: updatedUser.email,
      active: updatedUser.active,
      role: updatedUser.role,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//desc      Delete use
//route     Delete api/users/:id
//access    Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  await User.deleteOne();

  const users = await User.find();
  res.status(200).json({
    id: req.params.id,
    users: users,
    message: "Users deleted successfully",
  });
});

export { getUsers, getEnterpreneurs, getUser, setUser, updateUser, deleteUser };
