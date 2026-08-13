const getPortfolioStatus = (req, res) => {
    res.status(200).json({
        success: true,
        status: "online",
        message: "Sanket's Portfolio API is running successfully.",
    });
};

module.exports = {
    getPortfolioStatus,
};