import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
    },
    password_hash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    token_version: {
      type: Number,
      default: 0,
    },
    profile: {
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
      },
      dob: {
        type: Date,
      },
      phone: {
        type: String,
      },
      summary: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);

export default User;
