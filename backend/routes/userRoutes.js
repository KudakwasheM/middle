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

router.route("/").get(admin, getUsers).post(admin, setUser);
router
  .route("/:id")
  .get(admin, getUser)
  .put(admin, updateUser)
  .delete(admin, deleteUser);

export default router;
