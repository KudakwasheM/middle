import mongoose from "mongoose";

const opportunitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Opportunity = mongoose.model("Opportunity", opportunitySchema);

export default Opportunity;
