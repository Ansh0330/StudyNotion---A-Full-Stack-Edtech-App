import { Router } from "express";
const router = Router();

import {
  login,
  signUp,
  sendOtp,
  changePassword,
} from "../controllers/auth.controller.js";

import {
  resetPasswordToken,
  resetPassword,
} from "../controllers/resetPassword.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login);

// Route for user signup
router.post("/signup", signUp);

// Route for sending OTP to the user's email
router.post("/sendOtp", sendOtp);

// Route for Changing the password
router.post("/changePassword", auth, changePassword);

// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken);

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword);

export default router;
