import express from "express";
import { saveProfile } from "../controllers/profileController.js";

const router = express.Router();

router.route("/").post(saveProfile);

export default router;
