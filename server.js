import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import packageRoutes from "./routes/packagesRoutes.js";
import referralRoutes from "./routes/referralRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/wallet", walletRoutes);
app.use("/packages", packageRoutes);
app.use("/referrals", referralRoutes);

app.get("/", (req, res) => {
    res.send("Arminex Backend Running Successfully ✔");
});

app.listen(5000, () => console.log("Server running on port 5000"));
