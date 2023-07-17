import mongoose from "mongoose";

const fundSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  investor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Project",
  },
});

const Fund = mongoose.model("Fund", fundSchema);

export default Fund;
