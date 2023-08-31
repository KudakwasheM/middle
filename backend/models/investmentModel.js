import mongoose from "mongoose";

const investmetSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    remaining: {
      type: Number,
    },
    project_types: {
      type: [String],
    },
    investor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Investment = mongoose.model("Investment", investmetSchema);

export default Investment;
