import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true, minlenght: 6 },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 8, trim: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  isKycVerified: { type: Boolean, default: false },
});
