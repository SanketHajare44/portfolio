const Project = require("../models/project-model");

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects,
        });
    } catch (error) {
        console.error("Failed to fetch projects:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch projects",
        });
    }
};

const getProjectBySlug = async (req, res) => {
    try {
        const { slug } = req.params;

        const project = await Project.findOne({ slug });

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found",
            });
        }

        res.status(200).json({
            success: true,
            data: project,
        });
    } catch (error) {
        console.error("Failed to fetch project:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch project",
        });
    }
};

module.exports = {
    getProjects,
    getProjectBySlug,
};