import asyncHandler from "express-async-handler";
import Fund from "../models/fundModel.js";

// @desc        Get all funds
// Router       Get /api/funds
// Access       Private
const getFunds = asyncHandler(async (req, res) => {
  const funds = await Fund.find();

  res.status(200).json({
    funds: funds,
    message: "Successfully retrieved funds",
  });
});

//desc      Set fund
//route     Post api/funds
//access    Private
const setFund = asyncHandler(async (req, res) => {
  if (!req.body.amount || !req.body.investor) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const fund = await Fund.create({
    amount: req.body.amount,
    investor: req.body.investor,
  });

  res.status(201).json({
    fund: fund,
    message: "Successfully created fund",
  });
});

//desc      Get fund
//route     Get api/funds/:id
//access    Private
const getFund = asyncHandler(async (req, res) => {
  const fund = await Fund.findById(req.params.id);

  if (!fund) {
    res.status(400);
    throw new Error("Fund not found");
  }

  res.status(200).json({
    fund: fund,
    message: "Fund found successfully",
  });
});

//desc      Update fund
//route     Put api/funds/:id
//access    Private
const updateFund = asyncHandler(async (req, res) => {
  const fund = await Fund.findById(req.params.id);

  if (!fund) {
    res.status(400);
    throw new Error("Fund not found");
  }

  const updatedFund = await Fund.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    fund: updatedFund,
    message: "Fund updated successfully",
  });
});

//desc      Delete fund
//route     Delete api/funds/:id
//access    Private
const deleteFund = asyncHandler(async (req, res) => {
  const fund = await Fund.findById(req.params.id);
  if (!fund) {
    res.status(400);
    throw new Error("Fund not found");
  }

  await Fund.deleteOne();

  const funds = await Fund.find();
  res.status(200).json({
    id: req.params.id,
    funds: funds,
    message: "Fund removed successfully",
  });
});

export { getFunds, setFund, getFund, updateFund, deleteFund };
