import { Router } from "express";
import { contactUsResponse } from "../controllers/contactUs.controller.js";

const router = Router();
router.post("/contact", contactUsResponse);
export default router;
