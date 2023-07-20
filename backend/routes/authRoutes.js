import express from "express";
import {
  login,
  logout,
  profile,
  register,
  updateUser,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);
router.route("/profile/:id").get(protect, profile).put(updateUser);

export default router;
