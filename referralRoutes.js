import express from "express";
import { getReferral } from "../controllers/referrals.js";

const router = express.Router();

router.get("/:userId", getReferral);

export default router;