import express from "express";
import { activatePackage } from "../controllers/packages.js";

const router = express.Router();

router.post("/activate", activatePackage);

export default router;