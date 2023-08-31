import asyncHandler from "express-async-handler";
import TeamMember from "../models/teamMember.js";

// @desc    Get members on project
// Route    Get /api/members/project/:id
// Access   Private
const getTeamMembers = asyncHandler(async (req, res) => {
  const members = await TeamMember.find({ project_id: req.params.project });

  if (!members) {
    res.status(400);
    throw new Error("Members not found");
  }

  res.status(200).json({
    members: members,
    message: "Team members found successfully",
  });
});

// @desc    Get detail on project
// Route    Get /api/members/:id
// Access   Private
const getMember = asyncHandler(async (req, res) => {
  const member = await TeamMember.findById(req.params.id);

  if (!member) {
    res.status(400);
    throw new Error("Member not found");
  }

  res.status(200).json({
    member: member,
    message: "Member found successfully",
  });
});

// @desc    Set member
// Route    Post /api/members
// Access   Private
const setMember = asyncHandler(async (req, res) => {
  const { name, position, description, project_id } = req.body;

  if (req.body.name === "") {
    res.status(401);
    throw new Error("Please add name");
  } else if (req.body.position === "") {
    res.status(401);
    throw new Error("Please add position");
  } else if (req.body.description === "") {
    res.status(401);
    throw new Error("Please add description");
  } else if (req.body.project_id === "") {
    res.status(401);
    throw new Error("Please add project");
  }

  const member = await TeamMember.create({
    name,
    position,
    description,
    project_id,
  });

  if (member) {
    res.status(201).json({
      name: member.name,
      position: member.position,
      description: member.description,
      project_id: member.project_id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid project details");
  }
});

// @desc    Update member
// Route    Put /api/member/:id
// Access   Private
const updateMember = asyncHandler(async (req, res) => {
  const member = await TeamMember.findById(req.params.id);

  if (member) {
    member.name = req.body.name || member.name;
    member.description = req.body.description || member.description;
    member.position = req.body.position || member.position;

    const updatedMember = await member.save();

    res.status(200).json({
      name: updatedMember.name,
      description: updatedMember.description,
      position: updatedMember.position,
    });
  } else {
    res.status(404);
    throw new Error("Member not found");
  }
});

//desc      Delete member
//route     Delete api/members/:id
//access    Private
const deleteMember = asyncHandler(async (req, res) => {
  const member = await TeamMember.findById(req.params.id);

  if (!member) {
    res.status(400);
    throw new Error("User not found");
  }

  await TeamMember.deleteOne();

  const members = await TeamMember.find();
  res.status(200).json({
    id: req.params.id,
    members: members,
    message: "Team member deleted successfully",
  });
});

export { getTeamMembers, setMember, getMember, updateMember, deleteMember };