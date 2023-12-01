import express from "express";
import { saveFileToDB } from "../controllers/testController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, saveFileToDB);

export default router;
