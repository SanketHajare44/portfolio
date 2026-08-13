const express = require("express");
const {
    getPortfolioStatus,
} = require("../controllers/portfolioController");

const router = express.Router();

router.get("/status", getPortfolioStatus);

module.exports = router;