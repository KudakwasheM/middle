import asyncHandler from "express-async-handler";
import InvestorDetails from "../models/investorModel.js";
import User from "../models/userModel.js";

// @desc    Get detail on investor
// Route    Get /api/users/investors/details/:investor
// Access   Private
const getInvestorDetail = asyncHandler(async (req, res) => {
  const detail = await InvestorDetails.find({
    investor_id: req.params.investor,
  });

  if (!detail) {
    res.status(400);
    throw new Error("Details not found");
  }

  res.status(200).json({
    detail: detail,
    message: "Details found successfully",
  });
});

// @desc    Get investor details
// Route    Get /api/users/investors/details/:id
// Access   Private
const getDetail = asyncHandler(async (req, res) => {
  const details = await InvestorDetails.findById(req.params.id);

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
// Route    Post /api/users/investors/details
// Access   Private
const setDetail = asyncHandler(async (req, res) => {
  const {
    description,
    minimum,
    maximum,
    locations,
    industries,
    country,
    mobile,
    investor_id,
  } = req.body;

  if (req.body.minimum === "") {
    res.status(401);
    throw new Error("Please add minimum amount");
  } else if (req.body.description === "") {
    res.status(401);
    throw new Error("Please add description");
  } else if (req.body.maximum === "") {
    res.status(401);
    throw new Error("Please add maximum amount");
  } else if (req.body.investor_id === "") {
    res.status(401);
    throw new Error("Please add investor");
  }

  const exists = await InvestorDetails.findOne({
    investor_id: req.body.investor_id,
  });

  if (exists) {
    res.status(400);
    throw new Error("Details for this investor already exist");
  }

  try {
    const detail = await InvestorDetails.create({
      description,
      country,
      minimum,
      maximum,
      locations,
      mobile,
      industries,
      investor_id,
    });

    if (detail) {
      const project = await User.findByIdAndUpdate(
        req.body.investor_id,
        { details: detail._id },
        { new: true }
      );

      if (project) {
        res.status(201).json({
          id: detail._id,
          description: detail.description,
          country: detail.country,
          minimum: detail.minimum,
          maximum: detail.maximum,
          locations: detail.locations,
          mobile: detail.mobile,
          industries: detail.industries,
          investor_id: detail.investor_id,
        });
      }
    }
  } catch (err) {
    await InvestorDetails.deleteOne();

    // res.status(401);
    // throw new Error("Failed to add details");
    res.status(500).json({ error: err.message });
  }
});

// @desc    Update user
// Route    Put /api/users/investors/details/:id
// Access   Private
const updateDetail = asyncHandler(async (req, res) => {
  const detail = await InvestorDetails.findById(req.params.id);

  if (detail) {
    detail.description = req.body.description || detail.description;
    detail.country = req.body.country || detail.country;
    detail.minimum = req.body.minimum || detail.minimum;
    detail.maximum = req.body.maximum || detail.maximum;
    detail.locations = req.body.locations || detail.locations;
    detail.mobile = req.body.mobile || detail.mobile;
    detail.industries = req.body.industries || detail.industries;

    const updatedDetail = await detail.save();

    res.status(200).json({
      id: updatedDetail._id,
      description: updatedDetail.description,
      country: updatedDetail.country,
      minimum: updatedDetail.minimum,
      maximum: updatedDetail.maximum,
      locations: updatedDetail.locations,
      mobile: updatedDetail.mobile,
      industries: updatedDetail.industries,
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
  const detail = await InvestorDetails.findById(req.params.id);

  if (!detail) {
    res.status(400);
    throw new Error("Details not found");
  }

  const investor = await User.findByIdAndUpdate(
    { _id: detail.investor_id },
    { details: null },
    { new: true }
  );

  if (investor) {
    await InvestorDetails.deleteOne({ _id: req.params.id });

    const details = await InvestorDetails.find();
    res.status(200).json({
      id: req.params.id,
      details: details,
      message: "Details deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Failed to delete details");
  }
});

export { getInvestorDetail, getDetail, setDetail, updateDetail, deleteDetail };
