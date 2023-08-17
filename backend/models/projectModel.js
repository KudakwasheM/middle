import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    industry: [String],
    stage: {
      type: String,
      required: true,
    },
    expected_fund: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    raised_fund: {
      type: mongoose.Types.Decimal128,
      default: 0,
    },
    investor_percentage: {
      type: mongoose.Types.Decimal128,
      default: 0,
    },
    enterprenuer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
