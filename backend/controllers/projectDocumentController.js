import asyncHandler from "express-async-handler";
import Project from "../models/projectModel.js";
import fs from "fs";
import path from "path";
import Document from "../models/projectDocumentModel.js";

const getProjectDocuments = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.project);

  if (!project) {
    res.status(404).json({ message: "Project not found" });
    throw new Error("Project not found");
  }

  const documents = project.documents;

  res
    .status(200)
    .json({ documents: documents, message: "Successfully found documents" });
});

const toBase64 = (filepath) => {
  const file = fs.readFileSync(filepath);

  return Buffer.from(file).toString("base64");
};

const setProjectDocuments = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.project);

  if (!project) {
    res.status(404).json({ message: "Project not found" });
  }
  const { title } = req.body;
  const basePath = `./backend/public/documents/${project._id}`;

  const documents = Array.isArray(req.files.documents)
    ? req.files.documents
    : [req.files.documents];
  console.log(documents);
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
  }

  const uploadedDocuments = [];
  for (const document of documents) {
    if (document.mimetype !== "application/pdf") {
      res.status(400).json({
        success: false,
        message: "Only pdf files are allowed",
      });
    }

    const documentName = `${title}_${project.name}`;
    const filePath = path.join(basePath, documentName);
    await document.mv(filePath);
    const base64Data = toBase64(filePath);

    const newDocument = await Document.create({
      title: title,
      data: base64Data,
      filename: documentName,
      mimetype: document.mimetype,
      project_id: project._id,
    });

    const addDoc = await Project.findByIdAndUpdate(
      req.params.project,
      {
        $push: { documents: newDocument._id },
      },
      { new: true }
    );

    if (!addDoc || !base64Data || !newDocument) {
      fs.unlinkSync(filePath, documentName);
      // await Document.deleteOne({ _id: newDocument._id });
      res.status(500).json({ message: "Failed to save document" });
    }

    fs.unlinkSync(filePath, documentName);
    uploadedDocuments.push(newDocument);
  }

  res.status(200).json({
    documents: uploadedDocuments,
    message: "Document uploaded successfully",
  });
});

const tingTest = asyncHandler(async (req, res) => {
  const { did } = req.body;
  const project = await Project.findById(req.params.project);
  const documentIndex = project.documents.indexOf(did);

  if (documentIndex > -1) {
    project.documents.splice(documentIndex, 1);
  }
  project.save();

  res.send("done");
});

const deleteProjectDocument = asyncHandler(async (req, res) => {
  const document = await Document.findById(req.params.id);

  if (!document) {
    res.status(404).json({
      success: false,
      message: "Document not found",
    });
  }

  try {
    const project = await Project.findById(document.project_id);

    const documentIndex = project.documents.indexOf(document._id);

    if (documentIndex > -1) {
      project.documents.splice(documentIndex, 1);
    }

    await project.save();

    await document.deleteOne({ _id: document._id });

    const otherDocuments = await Document.find({
      project_id: project._id,
    });

    res.status(200).json({
      success: true,
      message: "Deleted document successfully",
      documents: otherDocuments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
    throw new Error("Internal server error");
  }
});

export {
  getProjectDocuments,
  setProjectDocuments,
  deleteProjectDocument,
  tingTest,
};
