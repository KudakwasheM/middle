import multer from "multer";
import UserProfile from "../models/userProfileModel.js";
import asyncHandler from "express-async-handler";

const Storage = multer.diskStorage({
  destination: "profiles",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("profile");

const saveProfile = asyncHandler(async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.status(400);
      throw new Error("Failed to upload");
    } else {
      const profile = new UserProfile({
        image: {
          data: req.file.filename,
          contentType: "image/jpg",
        },
        user_id: req.body.user_id,
      });
      profile.save();

      res.status(201).json({
        message: "Successfully uploaded Profile",
      });
    }
  });
});

export { saveProfile };
