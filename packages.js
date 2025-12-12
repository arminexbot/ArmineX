export const activatePackage = (req, res) => {
    const { userId, packageName, price } = req.body;

    res.json({
        success: true,
        message: `${packageName} Activated Successfully`,
        dailyProfit: price * 0.01
    });
};