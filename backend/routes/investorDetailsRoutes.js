import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  deleteDetail,
  getDetail,
  getInvestorDetail,
  setDetail,
  updateDetail,
} from "../controllers/investorDetailsController.js";

const router = express.Router();

router.route("/").post(protect, setDetail);
router
  .route("/:id")
  .get(protect, getDetail)
  .put(protect, updateDetail)
  .delete(protect, deleteDetail);
router.route("/u/:investor").get(protect, getInvestorDetail);

export default router;
