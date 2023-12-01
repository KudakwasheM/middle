import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  deleteProjectDocument,
  getProjectDocuments,
  setProjectDocuments,
  tingTest,
} from "../controllers/projectDocumentController.js";

const router = express.Router();

router
  .route("/project/:project")
  .get(protect, getProjectDocuments)
  .post(protect, setProjectDocuments);
router.route("/:id").delete(protect, deleteProjectDocument);
router.route("/project/:project/hehe").put(tingTest);

export default router;
