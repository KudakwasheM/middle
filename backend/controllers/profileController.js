import UserProfile from "../models/userProfileModel.js";
import asyncHandler from "express-async-handler";
import path from "path";
import { URL } from "url";
import fs from "fs";

const saveProfile = asyncHandler(async (req, res) => {
  try {
    const profile = req.files.image;
    const user_id = req.user._id;

    const __dirname = decodeURI(new URL(".", import.meta.url).pathname);

    const basePath = `./backend/public/profiles/${user_id}`;

    fs.mkdir(basePath, (err) => {
      if (err) {
        console.error("Failed to create directory:", err);
      } else {
        console.log("Directory created successfully!");
      }
    });

    const dirname = process.cwd();
    const imagePath = path.join(
      dirname,
      `/backend/public/profiles/${user_id}/${profile.name}`
    );

    const imageUpload = await profile.mv(imagePath);
    // await profile.mv(imagePath);

    if (imageUpload) {
      const userDP = await UserProfile.create({
        image: imagePath,
        path: `/profiles/${profile.name}`,
        user_id: user_id,
      });

      res.status(200).json({
        profile: userDP,
        message: "Profile uploaded successfully",
      });
    }
    // res.status(200).json({
    //   image: `/profiles/${profile.name}`,
    //   message: "Done...",
    // });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

const fileReading = (req, res) => {
  // const fileI = fs.createReadStream("/profiles/CEST3574.JPG");
  fs.createReadStream("../middle/backend/public/profiles/CEST3574.JPG").pipe(
    res
  );
};

export { saveProfile, fileReading };
