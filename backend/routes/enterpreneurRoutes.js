import express from "express";
import {
  changePassword,
  getProfile,
} from "../controllers/enterpreneurController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/:id").get(protect, getProfile);
router.route("/").put(protect, changePassword);

export default router;
