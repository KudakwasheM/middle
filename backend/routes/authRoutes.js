import express from "express";
import {
  login,
  logout,
  profile,
  register,
  registerEmail,
  updateUser,
  verifyAccount,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
// router.post("/register", register);
router.post("/register", registerEmail);
router.post("/logout", logout);
router.route("/profile/:id").get(protect, profile).put(updateUser);
router.get("/:id/verify/:token", verifyAccount);

export default router;
