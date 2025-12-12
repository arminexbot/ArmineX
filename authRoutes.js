import express from "express";
import { sendOTP, login, getUser } from "../controllers/auth.js";

const router = express.Router();

router.post("/send-otp", sendOTP);
router.post("/login", login);
router.get("/:id", getUser);

export default router;