import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
  {
    nameusuario: { type: String, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default mongoose.model("User", UserSchema);