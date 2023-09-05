import express from "express";
import {
  deleteProject,
  getProject,
  getProjects,
  setProject,
  updateProject,
} from "../controllers/projectsController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProjects).post(protect, setProject);
router
  .route("/:id")
  .get(getProject)
  .put(protect, updateProject)
  .delete(protect, deleteProject);

export default router;
