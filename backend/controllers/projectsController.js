import asyncHandler from "express-async-handler";
import Project from "../models/projectModel.js";

// @desc        Get all projects
// Router       Get /api/projects
// Access       Public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();

  res.status(200).json({
    projects: projects,
    message: "Successfully retrieved projects",
  });
});

//desc      Set project
//route     Post api/projects
//access    Private
const setProject = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add name");
  } else if (!req.body.industry) {
    res.status(400);
    throw new Error("Please add industry");
  } else if (!req.body.mobile) {
    res.status(400);
    throw new Error("Please add mobile");
  } else if (!req.body.location) {
    res.status(400);
    throw new Error("Please add location");
  } else if (!req.body.stage) {
    res.status(400);
    throw new Error("Please add stage");
  } else if (!req.body.expected_fund) {
    res.status(400);
    throw new Error("Please add an expected fund");
  } else if (!req.body.enterpreneur) {
    res.status(400);
    throw new Error("Please add enterpreneur");
  } else if (!req.body.investor_percentage) {
    res.status(400);
    throw new Error("Please add investor percentage");
  }

  const project = await Project.create({
    name: req.body.name,
    website: req.body.website,
    location: req.body.location,
    mobile: req.body.mobile,
    industry: req.body.industry,
    stage: req.body.stage,
    expected_fund: req.body.expected_fund,
    raised_fund: req.body.raised_fund,
    investor_percentage: req.body.investor_percentage,
    enterpreneur: req.body.enterpreneur,
  });

  res.status(201).json({
    project: project,
    message: "Successfully created project",
  });
});

//desc      Get project
//route     Get api/projects/:id
//access    public
const getProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  }

  res.status(200).json({
    project: project,
    message: "Project found successfully",
  });
});

//desc      Update project
//route     Put api/projects/:id
//access    Private
const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  }

  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json({
    project: updatedProject,
    message: "Project updated successfully",
  });
});

//desc      Delete project
//route     Delete api/projects/:id
//access    Private
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  }

  await Project.deleteOne();

  const projects = await Project.find();
  res.status(200).json({
    id: req.params.id,
    projects: projects,
    message: "Project removed successfully",
  });
});

export { getProjects, setProject, getProject, updateProject, deleteProject };
