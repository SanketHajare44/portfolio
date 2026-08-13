const projects = [
    // =========================================================
    // MERN / FULL STACK
    // =========================================================

    {
        id: "devtinder",
        title: "DevTinder",
        slug: "devtinder",
        category: "MERN",
        year: 2026,
        order: 1,
        featured: true,
        visible: true,

        shortDescription:
            "Developer networking platform with authentication, connections, and real-time one-to-one chat.",

        description: [
            "Full-stack developer networking platform for discovering and connecting with developers.",
            "Implemented user authentication, profile management, connection requests, and developer matching.",
            "Built real-time one-to-one chat functionality using Socket.IO.",
        ],

        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.IO",
            "REST API",
        ],

        githubUrl: "https://github.com/SanketHajare44/Kernel-Interface-Utility-Suite",
        liveUrl: "https://github.com/SanketHajare44/Kernel-Interface-Utility-Suite",
        imageUrl: "/projects/devtinder.png",

        caseStudy: {
            intro:
                "A full-stack developer networking platform designed to help developers discover, connect, and communicate with other developers.",

            story: [
                "DevTinder is a full-stack developer networking platform that allows developers to create profiles, discover other developers, and build professional connections.",

                "The application provides user authentication, profile management, developer discovery, and connection functionality through a REST-based backend.",

                "Real-time one-to-one communication was implemented using Socket.IO, allowing connected developers to exchange messages without continuously polling the server.",
            ],

            highlights: [
                "Developer profile creation and management",
                "User authentication and protected APIs",
                "Developer discovery and connection requests",
                "Real-time one-to-one chat using Socket.IO",
                "RESTful backend architecture",
                "MongoDB-based data persistence",
            ],

            builtWith: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Socket.IO",
                "REST API",
            ],
        },
    },


    // =========================================================
    // JAVA / BACKEND
    // =========================================================

    {
        id: "edutrack",
        title: "EduTrack",
        slug: "edutrack",
        category: "Java",
        year: 2026,
        order: 2,
        featured: true,
        visible: true,

        shortDescription:
            "Classroom and student management platform built with Spring Boot REST APIs and MongoDB.",

        description: [
            "Classroom and student management portal designed to simplify academic management.",
            "Developed REST APIs for managing students, courses, classrooms, and academic information.",
            "Implemented backend services using Spring Boot with MongoDB for data persistence.",
        ],

        technologies: [
            "Java",
            "Spring Boot",
            "REST API",
            "MongoDB",
            "Maven",
        ],

        githubUrl: "https://github.com/SanketHajare44/Kernel-Interface-Utility-Suite",
        liveUrl: "https://github.com/SanketHajare44/Kernel-Interface-Utility-Suite",
        imageUrl: "/projects/devtinder.png",

        caseStudy: {
            intro:
                "A backend-focused classroom and student management platform designed to simplify academic data and classroom operations.",

            story: [
                "EduTrack was developed as a classroom and student management portal for organizing academic information and simplifying common management operations.",

                "The application exposes REST APIs for working with students, courses, classrooms, and related academic information.",

                "Spring Boot was used to structure the backend application and MongoDB was used for persistent data storage.",
            ],

            highlights: [
                "Student management",
                "Course and classroom management",
                "RESTful API development",
                "Spring Boot backend architecture",
                "MongoDB data persistence",
            ],

            builtWith: [
                "Java",
                "Spring Boot",
                "REST API",
                "MongoDB",
                "Maven",
            ],
        },
    },


    // =========================================================
    // C / C++ / SYSTEM PROGRAMMING
    // =========================================================

    {
        id: "custom-virtual-file-system",
        title: "Custom Virtual File System",
        slug: "custom-virtual-file-system",
        category: "C/C++",
        year: 2025,
        order: 3,
        featured: true,
        visible: true,

        shortDescription:
            "Linux-based virtual file system exploring file descriptors, inodes, permissions, and system calls.",

        description: [
            "Implemented a virtual file system inspired by Linux file-system concepts.",
            "Worked with system calls, file descriptors, inodes, file permissions, and file operations.",
            "Built command-line operations for creating, reading, writing, listing, and managing files.",
        ],

        technologies: [
            "C",
            "C++",
            "Linux",
            "System Programming",
            "File Systems",
            "System Calls",
        ],

        githubUrl: "https://github.com/SanketHajare44/Kernel-Interface-Utility-Suite",
        liveUrl: "https://github.com/SanketHajare44/Kernel-Interface-Utility-Suite",
        imageUrl: "/projects/devtinder.png",

        caseStudy: {
            intro:
                "A systems programming project that explores Linux file-system concepts through a custom virtual file system implemented using C/C++.",

            story: [
                "The Custom Virtual File System project was developed to understand file-system concepts and low-level system programming in Linux.",

                "The project works with concepts such as file descriptors, inodes, file permissions, system calls, and file operations.",

                "A command-line interface provides operations for creating, reading, writing, listing, and managing files.",
            ],

            highlights: [
                "Custom virtual file-system implementation",
                "File descriptors and inodes",
                "Linux system calls",
                "File permissions",
                "Command-line file operations",
                "Low-level systems programming",
            ],

            builtWith: [
                "C",
                "C++",
                "Linux",
                "System Programming",
                "File Systems",
                "System Calls",
            ],
        },
    },


    // =========================================================
    // AI / MACHINE LEARNING
    // =========================================================

    {
        id: "intelligent-document-qa",
        title: "Intelligent Document QA",
        slug: "intelligent-document-qa",
        category: "AI/ML",
        year: 2026,
        order: 4,
        featured: true,
        visible: true,

        shortDescription:
            "RAG-based document question-answering system using embeddings, FAISS, and an LLM.",

        description: [
            "Built an intelligent document question-answering system using Retrieval-Augmented Generation.",
            "Implemented document processing, text chunking, embeddings, and vector similarity search.",
            "Integrated an LLM to generate contextual answers from retrieved document information.",
        ],

        technologies: [
            "Python",
            "RAG",
            "FAISS",
            "Sentence Transformers",
            "Llama 3",
            "Ollama",
            "Streamlit",
        ],

        githubUrl: "",
        liveUrl: "",
        imageUrl: "/projects/devtinder.png",

        caseStudy: {
            intro:
                "An intelligent document question-answering application that combines document retrieval, embeddings, vector search, and an LLM.",

            story: [
                "The Intelligent Document QA system was developed to allow users to ask questions about information contained in documents.",

                "The pipeline processes documents, divides their content into chunks, generates embeddings, and stores them for similarity-based retrieval.",

                "Relevant document content is retrieved and provided to an LLM so that the system can generate contextual answers based on the available information.",
            ],

            highlights: [
                "Retrieval-Augmented Generation pipeline",
                "Document processing and chunking",
                "Embedding generation",
                "FAISS vector similarity search",
                "LLM-based answer generation",
                "Streamlit interface",
            ],

            builtWith: [
                "Python",
                "RAG",
                "FAISS",
                "Sentence Transformers",
                "Llama 3",
                "Ollama",
                "Streamlit",
            ],
        },
    },


    // =========================================================
    // KEEP YOUR OTHER PROJECTS BELOW
    // =========================================================

    // Chat Messenger
    // Linux File Utilities
    // Command Executor
    // Emotion Detection
    // Titanic Survival Predictor
    // Diabetes Detection
    // Breast Cancer Detection
    // House Price Prediction
    // Duplicate File Cleaner
    // Log Automation
];


export default projects;