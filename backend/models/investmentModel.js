import mongoose from "mongoose";

const investmetSchema = mongoose.Schema({
  amount: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  project_types: {
    type: [String],
  },
  investor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Investment = mongoose.model("Investment", investmetSchema);

export default Investment;
