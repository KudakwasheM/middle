import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createProjectDocument,
  deleteProjectDocument,
  getProjectDocuments,
  setProjectDocuments,
  showfile,
} from "../controllers/projectDocumentController.js";
import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";

const router = express.Router();

const mongoUri =
  "mongodb+srv://netoprojects:Neto1012@netocluster.yifesqp.mongodb.net/middle?retryWrites=true&w=majority";

const storage = new GridFsStorage({
  url: mongoUri,
  file: (req, file) => {
    console.log(JSON.parse(JSON.stringify(req.body)));

    console.log(req.body);
    const filename = `${file.originalname}`;

    return {
      filename: filename,
      metadata: {
        project_id: req.params.project,
      },
      bucketName: "docsets",
    };
  },
});

const upload = multer({ storage });

router.route("/project/:project").get(protect, getProjectDocuments);
router
  .route("/:project/project")
  .post(protect, upload.single("document"), setProjectDocuments);
router.route("/:id").delete(protect, deleteProjectDocument);
router.route("/project/create/:project").post(protect, createProjectDocument);
router.route("/project/:project_id/:file_id").get(protect, showfile);

export default router;
