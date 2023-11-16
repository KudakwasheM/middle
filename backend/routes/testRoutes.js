import express from "express";
import { saveFileToDB } from "../controllers/testController.js";

const router = express.Router();

router.route("/").post(saveFileToDB);

export default router;
