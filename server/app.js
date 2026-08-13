const express = require("express");
const cors = require("cors");

const statusRoute = require("./routes/status-route");
const projectRoute = require("./routes/project-route");

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    })
);
app.use(express.json());

app.use("/api", statusRoute);
app.use("/api/projects", projectRoute);

module.exports = app;