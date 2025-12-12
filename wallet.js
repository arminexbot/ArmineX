import fs from "fs";
const DB = "./db.json";

function loadDB() {
    return JSON.parse(fs.readFileSync(DB));
}

function saveDB(data) {
    fs.writeFileSync(DB, JSON.stringify(data, null, 2));
}

export const getWallet = (req, res) => {
    let db = loadDB();
    let wallet = db.wallets.find(w => w.userId === req.params.userId);

    if (!wallet) wallet = { userId: req.params.userId, balance: 0 };
    res.json(wallet);
};

export const deposit = (req, res) => {
    const { userId, amount } = req.body;
    let db = loadDB();

    let wallet = db.wallets.find(w => w.userId === userId);
    if (!wallet) {
        wallet = { userId, balance: 0 };
        db.wallets.push(wallet);
    }

    wallet.balance += Number(amount);
    saveDB(db);

    res.json({ success: true, wallet });
};

export const withdraw = (req, res) => {
    const { userId, amount } = req.body;
    let db = loadDB();

    let wallet = db.wallets.find(w => w.userId === userId);

    if (!wallet || wallet.balance < amount) {
        return res.json({ success: false, message: "Insufficient balance" });
    }

    wallet.balance -= amount;
    saveDB(db);

    res.json({ success: true, wallet });
};