import asyncHandler from "express-async-handler";
import fs from "fs";
import Test from "../models/testModel.js";
import Datauri from "datauri";

const uploadConvert = asyncHandler(async (req, res) => {});

const saveFileToDB = asyncHandler(async (req, res) => {
  const auth = req.user._id;

  const basePath = `./backend/public/test/${auth}`;
  try {
    const file = req.files.file;

    if (!fs.existsSync(basePath)) {
      fs.mkdirSync(basePath, { recursive: true });
    } else {
      const files = fs.readdirSync(basePath);

      for (const file of files) {
        fs.unlinkSync(path.join(basePath, file));
      }
    }

    const imagePath = path.join(basePath, file.name);

    await file.mv(imagePath);

    const newFile = await Test.create({
      data: base64Data,
      filename: `${Date.now()}_${file.name}`,
      mimetype: file.mimetype,
    });

    // await newFile.save();
    console.log("File saved to MongoDB");
    res
      .status(200)
      .json({ success: true, file: newFile, message: "File saved to MongoDB" });
  } catch (err) {
    res.status(500);
    throw new Error("Error saving file to MongoDB:", err);
  }
});

// Function to retrieve a file from MongoDB by its filename
const retrieveFileFromDB = async (filename) => {
  try {
    const file = await File.findOne({ filename });

    if (!file) {
      throw new Error("File not found");
    }

    const fileData = Buffer.from(file.data, "base64");

    // Write the file data to a desired location
    fs.writeFileSync(`./downloads/${file.filename}`, fileData);

    console.log("File retrieved from MongoDB");
  } catch (err) {
    console.error("Error retrieving file from MongoDB:", err);
  }
};

export { saveFileToDB };
