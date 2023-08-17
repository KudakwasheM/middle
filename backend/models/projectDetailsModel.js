import mongoose from "mongoose";

const projectDetailsSchema = mongoose.Schema(
  {
    short_summary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
