import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    expected_fund: {
      type: mongoose.Types.Decimal128,
      required: true,
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
