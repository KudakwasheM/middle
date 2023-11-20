import express from "express";
import {
  changePassword,
  getProfile,
  getProjects,
} from "../controllers/enterpreneurController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/:id").get(protect, getProfile);
router.route("/").put(protect, changePassword);
router.route("/:user/projects").get(protect, getProjects);

export default router;
