import express from "express";
import {
  register,
  login,
  refresh,
  logout,
  me,
  resetPassword,
} from "../controllers/auth.controller.js";
import requireAuth from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/refresh", refresh);
authRouter.post("/logout", logout);
authRouter.get("/me", requireAuth, me);
authRouter.put("/reset-password", requireAuth, resetPassword);

export default authRouter;
