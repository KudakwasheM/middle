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
});

const Fund = mongoose.model("Fund", fundSchema);

export default Fund;
