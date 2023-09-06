import mongoose from "mongoose";

const investorSchema = mongoose.Schema(
  {
    investor_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    country: {
      type: String,
    },
    mobile: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    minimum: {
      type: Number,
      required: true,
    },
    maximum: {
      type: Number,
      required: true,
    },
    locations: {
      type: [String],
    },
    industries: {
      type: [String],
    },
  },
  {
    timestamp: true,
  }
);

const InvestorDetails = mongoose.model("InvestorDetail", investorSchema);

export default InvestorDetails;
