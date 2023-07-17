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
  if (
    !req.body.name ||
    !req.body.type ||
    !req.body.location ||
    !req.body.description ||
    !req.body.expected_fund
  ) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const project = await Project.create({
    name: req.body.name,
    type: req.body.type,
    location: req.body.location,
    short_description: req.body.short_description,
    description: req.body.description,
    expected_fund: req.body.expected_fund,
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
