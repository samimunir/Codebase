import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { generateAT, generateRT } from "../utils/tokens.js";
import ENV from "../config/env.js";

const set_refresh_token_cookie = (res, token) => {
  res.cookie("refresh_token", token, {
    httpOnly: true,
    secure: ENV.NODE_ENV === "production",
    sameSite: "strict",
    path: "/api/auth",
  });
};

export const register = async (req, res, next) => {
  try {
    const { email, password, first_name, last_name } = req.body;

    if (!email || !password || !first_name || !last_name) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const db_user = await User.findOne({ email });
    if (db_user) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      email: email,
      password_hash: password_hash,
      profile: {
        first_name: first_name,
        last_name: last_name,
      },
    });

    return res.status(201).json({ user });
  } catch (e) {
    next(e);
  }
};
