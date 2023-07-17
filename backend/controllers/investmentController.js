import asyncHandler from "express-async-handler";
import Investment from "../models/investmentModel.js";

const getInvestments = asyncHandler(async (req, res) => {
  const investments = await Investment.find();

  res.status(200).json({
    investments: investments,
    message: "Successfully retrieved investments",
  });
});

const setInvestment = asyncHandler(async (req, res) => {
  if (!req.body.amount) {
    res.status(400);
    throw new Error("Please add amount field");
  } else if (!req.body.investor) {
    res.status(400);
    throw new Error("Please add investor field");
  }

  const investment = await Investment.find({
    name: req.body.amount,
    investor: req.body.investor,
    project_types: req.body.project_types,
  });

  res.status(201).json({
    investment: investment,
    message: "Successfully created project",
  });
});

const getInvestment = asyncHandler(async (req, res) => {
  const investment = await Investment.findById(req.params.id);

  if (!investment) {
    res.status(400);
    throw new Error("Investment not found");
  }

  res.status(200).json({
    investment: investment,
    message: "Investment found successfully",
  });
});

const updateInvestment = asyncHandler(async (req, res) => {
  const investment = await Investment.findById(req.params.id);

  if (!investment) {
    res.status(400);
    throw new Error("Investment not found");
  }

  const updatedInvestment = await Investment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json({
    investment: updatedInvestment,
    message: "Investment updated successfully",
  });
});

const deleteInvestment = asyncHandler(async (req, res) => {
  const investment = await Investment.findById(req.params.id);
  if (!investment) {
    res.status(400);
    throw new Error("investment not found");
  }

  await Investment.deleteOne();

  const investments = await Investment.find();
  res.status(200).json({
    id: req.params.id,
    investments: investments,
    message: "Investment removed successfully",
  });
});

export {
  getInvestments,
  setInvestment,
  getInvestment,
  updateInvestment,
  deleteInvestment,
};
