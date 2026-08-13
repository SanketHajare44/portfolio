const express = require("express");
const { getPortfolioStatus } = require("../controllers/status-controller");

const router = express.Router();

router.get("/status", getPortfolioStatus);

module.exports = router;