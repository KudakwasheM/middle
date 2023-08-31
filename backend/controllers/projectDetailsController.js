import asyncHandler from "express-async-handler";
import ProjectDetails from "../models/projectDetailsModel.js";
import Project from "../models/projectModel.js";

// @desc    Get detail on project
// Route    Get /api/details/project/:id
// Access   Private
const getProjectDetail = asyncHandler(async (req, res) => {
  const detail = await ProjectDetails.find({ project_id: req.params.project });

  if (!detail) {
    res.status(400);
    throw new Error("Details not found");
  }

  res.status(200).json({
    detail: detail,
    message: "Details found successfully",
  });
});

// @desc    Get detail
// Route    Get /api/details/:id
// Access   Private
const getDetail = asyncHandler(async (req, res) => {
  const details = await ProjectDetails.findById(req.params.id);

  if (!details) {
    res.status(400);
    throw new Error("Details not found");
  }

  res.status(200).json({
    details: details,
    message: "Details found successfully",
  });
});

// @desc    Set detail
// Route    Post /api/details
// Access   Private
const setDetail = asyncHandler(async (req, res) => {
  const { short_summary, description, progress, advantages, deal, project_id } =
    req.body;

  if (req.body.short_summary === "") {
    res.status(401);
    throw new Error("Please add short summary");
  } else if (req.body.description === "") {
    res.status(401);
    throw new Error("Please add description");
  } else if (req.body.deal === "") {
    res.status(401);
    throw new Error("Please add deal");
  } else if (req.body.project_id === "") {
    res.status(401);
    throw new Error("Please add project");
  }

  const exists = await ProjectDetails.findOne({
    project_id: req.body.project_id,
  });

  if (exists) {
    res.status(400);
    throw new Error("Details for this proposal already exist");
  }

  try {
    const detail = await ProjectDetails.create({
      short_summary,
      description,
      progress,
      advantages,
      deal,
      project_id,
    });

    if (detail) {
      const project = await Project.findByIdAndUpdate(
        req.body.project_id,
        {
          $push: { details: detail._id },
        },
        { new: true }
      );

      if (project) {
        res.status(201).json({
          id: detail._id,
          short_summary: detail.short_summary,
          description: detail.description,
          progress: detail.progress,
          email: detail.email,
          advantages: detail.advantages,
          deal: detail.deal,
          project_id: detail.project_id,
        });
      }
    }
  } catch (err) {
    await ProjectDetails.deleteOne();

    res.status(401);
    throw new Error("Failed to add details");
  }
});

// @desc    Update user
// Route    Put /api/users/:id
// Access   Private
const updateDetail = asyncHandler(async (req, res) => {
  const detail = await ProjectDetails.findById(req.params.id);

  if (detail) {
    detail.short_summary = req.body.short_summary || detail.short_summary;
    detail.description = req.body.description || detail.description;
    detail.progress = req.body.progress || detail.progress;
    detail.advantages = req.body.advantages || detail.advantages;
    detail.deal = req.body.deal || detail.deal;

    const updatedDetail = await detail.save();

    res.status(200).json({
      id: updatedDetail._id,
      short_summary: updatedDetail.short_summary,
      description: updatedDetail.description,
      progress: updatedDetail.progress,
      advantages: updatedDetail.advantages,
      deal: updatedDetail.deal,
    });
  } else {
    res.status(404);
    throw new Error("Details not found");
  }
});

//desc      Delete detail
//route     Delete api/details/:id
//access    Private
const deleteDetail = asyncHandler(async (req, res) => {
  const detail = await ProjectDetails.findById(req.params.id);

  if (!detail) {
    res.status(400);
    throw new Error("User not found");
  }

  await ProjectDetails.deleteOne();

  const details = await ProjectDetails.find();
  res.status(200).json({
    id: req.params.id,
    details: details,
    message: "Details deleted successfully",
  });
});

export { getProjectDetail, getDetail, setDetail, updateDetail, deleteDetail };
