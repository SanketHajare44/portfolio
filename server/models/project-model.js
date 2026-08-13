const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true,
    },

    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => value.length > 0,
            message: "At least one description point is required",
        },
    },

    technologies: {
        type: [String],
        default: [],
    },

    githubUrl: {
        type: String,
        trim: true,
    },

    liveUrl: {
        type: String,
        trim: true,
    },

    imageUrl: {
        type: String,
        trim: true,
    },

    featured: {
        type: Boolean,
        default: false,
    },
},

    {
        timestamps: true,
    }

);

const projectModel = mongoose.model("Project", projectSchema);

module.exports = projectModel;