import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

//@desc     Auth user/set token
//route     POST /api/login
//@access   Public
const login = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401);
      throw new Error("Please provide both email and password");
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(401);
      throw new Error("Invalid email or password");
    }

    if (!user.active) {
      res.status(401);
      throw new Error("User not active");
    }

    const isPasswordMatch = await user.matchPassword(password);

    if (!isPasswordMatch) {
      res.status(401);
      throw new Error("Invalid email or password");
    }

    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      active: user.active,
      role: user.role,
    });
  } catch (err) {
    console.log(err);
  }
});

// const login = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   if (req.body.email === "" || req.body.password === "") {
//     res.status(401);
//     throw new Error("Fill in all fields");
//   }

//   const user = await User.findOne({ email });

//   if (!user.active) {
//     res.status(401);
//     throw new Error("User not active");
//   }

//   if (user && (await user.matchPassword(password))) {
//     generateToken(res, user._id);
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       username: user.username,
//       active: user.active,
//       role: user.role,
//     });
//   } else {
//     res.status(401);
//     throw new Error("Invalid email or password");
//   }
// });

//@desc     Register new user
//route     POST /api/register
//@access   Public
const register = asyncHandler(async (req, res) => {
  try {
    const { name, username, active, email, role, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      res.status(400);
      throw new Error("Email already exists");
    }

    const user = await User.create({
      name,
      username,
      email,
      active,
      role,
      password,
    });

    if (user) {
      generateToken(res, user._id);
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
  } catch (err) {
    res.status(400);
    console.log(err);
    throw new Error("Invalid user data");
  }
});

//@desc     Logout user
//route     POST /api/logout
//@access   Public
const logout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
});

//@desc     Get user profile
//route     GET /api/profile/
//@access   Private
const profile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    username: req.user.username,
    email: req.user.email,
    active: req.user.active,
    role: req.user.role,
  };
  res.status(200).json(user);
});

//@desc     Update user profile
//route     PUT /api/users/update
//@access   Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.active = req.body.active || user.active;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: req.user._id,
      name: req.user.name,
      username: req.user.username,
      email: req.user.email,
      active: req.user.active,
      role: req.user.role,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { login, register, logout, profile, updateUser };
