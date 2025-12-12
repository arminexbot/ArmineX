import fs from "fs";
import { v4 as uuid } from "uuid";
const DB = "./db.json";

function loadDB() {
    return JSON.parse(fs.readFileSync(DB));
}

function saveDB(data) {
    fs.writeFileSync(DB, JSON.stringify(data, null, 2));
}

export const sendOTP = (req, res) => {
    const { phone } = req.body;
    const otp = "123456";

    res.json({
        success: true,
        otp,
        message: "OTP sent (demo only)"
    });
};

export const login = (req, res) => {
    const { phone } = req.body;

    let db = loadDB();
    let user = db.users.find(u => u.phone === phone);

    if (!user) {
        user = {
            id: uuid(),
            phone,
            referral: "armineX_" + Math.floor(Math.random() * 999999999),
            createdAt: Date.now()
        };
        db.users.push(user);
        saveDB(db);
    }

    res.json({
        success: true,
        user
    });
};

export const getUser = (req, res) => {
    const { id } = req.params;
    let db = loadDB();

    let user = db.users.find(u => u.id === id);
    res.json(user || {});
};