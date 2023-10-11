import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  image: {
    data: Buffer,
    contentType: String,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const UserProfile = mongoose.model("UserProfile", profileSchema);

export default UserProfile;
