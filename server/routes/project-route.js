const express = require("express");

const { getProjects, getProjectBySlug } = require("../controllers/project-controller");

const router = express.Router();

router.get("/", getProjects);
router.get("/:slug", getProjectBySlug);

module.exports = router;
