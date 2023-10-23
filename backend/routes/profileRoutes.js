import express from "express";
import { fileReading, saveProfile } from "../controllers/profileController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, saveProfile);
router.route("/profile").get(protect, fileReading);

// router.route("/").get()

export default router;
