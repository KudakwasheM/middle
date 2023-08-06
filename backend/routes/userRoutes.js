import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  setUser,
  updateUser,
} from "../controllers/usersController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getUsers).post(protect, setUser);
router
  .route("/:id")
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

export default router;
