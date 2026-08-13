require("dotenv").config();

const app = require("./app");
const { connectDB } = require("./config/database");

const PORT = process.env.PORT || 5000;

connectDB()
    .then(() => {
        console.log("Database connection is established...");

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server is running on port ${PORT}...`);
        });
    })
    .catch((err) => {
        console.error(
            "Database connection error:",
            err.message
        );

        process.exit(1);
    });