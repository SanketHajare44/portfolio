const { connectDB } = require("../config/database");
const Project = require("../models/project-model");

const projects = [{
    title: "DevTinder",
    slug: "devtinder",
    description:
        "A developer networking platform where developers can discover, connect, and communicate with other developers.",
    technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
    ],
    githubUrl: "",
    liveUrl: "",
    imageUrl: "",
    featured: true,
},];

const seedProjects = async (req, res) => {
    try {
        await connectDB();

        await Project.deleteMany();

        await Project.insertMany(projects);

        console.log("Projects seeded successfully..");
    } catch (err) {
        console.error("Failed to send the projects :", err.message);
    }
    finally {
        process.exit(1);
    }
};

seedProjects();

