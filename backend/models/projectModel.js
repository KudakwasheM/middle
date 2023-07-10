import mongoose from "mongoose";

const projectSchema = mongoose.Schema({});

const Project = mongoose.model("Project", projectSchema);

export default Project;
