import express from "express";
import { getWallet, deposit, withdraw } from "../controllers/wallet.js";

const router = express.Router();

router.get("/:userId", getWallet);
router.post("/deposit", deposit);
router.post("/withdraw", withdraw);

export default router;