import mongoose from "mongoose";
// import Double from "@mongoosejs/double";

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
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
      type: Number,
      required: true,
    },
    raised_fund: {
      type: Number,
      default: 0,
    },
    investor_percentage: {
      type: Number,
      default: 0,
    },
    enterpreneur: {
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
