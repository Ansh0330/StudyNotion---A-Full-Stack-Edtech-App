import { Router } from "express";
const router = Router();

import {
  capturePayment,
  verifySignature,
  sendPaymentSuccessEmail,
} from "../controllers/payments.controller.js";

import {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} from "../middlewares/auth.middleware.js";

router.post("/capturePayment", auth, isStudent, capturePayment);
router.post("/verifyPayment", auth, isStudent, verifySignature);
router.post(
  "/sendPaymentSuccessEmail",
  auth,
  isStudent,
  sendPaymentSuccessEmail,
);

export default router;
