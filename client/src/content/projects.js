const projects = [
    // =========================================================
    // MERN / FULL STACK
    // =========================================================

    {
        id: "pullrequest",
        title: "PullRequest",
        slug: "pullrequest",
        category: "MERN",
        year: 2026,
        order: 1,
        featured: true,
        visible: true,

        shortDescription:
            "Developer networking platform with authentication, connection management, and real-time one-to-one chat.",

        description: [
            "Developed a **developer networking platform** with a complete **connection lifecycle**, including developer discovery, connection requests, acceptance/rejection, and private communication.",

            "Implemented **JWT-based authentication** with **bcrypt password hashing** and **HTTP-only cookies**, using reusable middleware to protect profile, feed, connection, and chat APIs.",

            "Built **real-time one-to-one messaging** with **Socket.IO** using authenticated socket connections, **deterministic private chat rooms**, and **MongoDB persistence** for message history.",
        ],

        technologies: [
            "React",
            "Redux Toolkit",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.IO",
            "JWT",
            "REST API",
        ],

        githubUrl: "https://github.com/SanketHajare44/pullRequest",
        liveUrl: "https://pullrequest-roan.vercel.app/",
        imageUrl: "/projects/pullrequest.png",

        caseStudy: {
            intro:
                "A **full-stack developer networking platform** designed to help developers discover, connect, and communicate with other developers.",

            story: [
                "-> PullRequest is a **full-stack developer networking platform** that allows developers to create profiles, discover other developers, send connection requests, and build professional connections.",

                "-> The application uses a **REST-based backend** for authentication, profile management, developer discovery, and connection workflows. **JWT** authentication with **HTTP-only cookies** protects private APIs and user interactions.",

                "-> Real-time one-to-one communication was implemented using **Socket.IO** with **authenticated socket connections** and deterministic **private chat rooms**. Messages are persisted in **MongoDB** while Socket.IO handles live message delivery.",

                "-> The system separates **request-response operations** from **real-time communication**, using REST APIs for application data and chat history while Socket.IO handles live messaging events.",
            ],

            highlights: [
                "Developer profile creation and management",
                "**JWT** authentication with **HTTP-only cookies**",
                "Protected REST APIs using reusable authentication **middleware**",
                "Developer discovery with relationship-aware filtering",
                "Connection request, acceptance, and rejection workflow",
                "Real-time authenticated **one-to-one chat** using **Socket.IO**",
                "Deterministic **private chat rooms** for user pairs",
                "**MongoDB persistence** for users, connections, and chat history",
            ],

            builtWith: [
                "React",
                "Redux Toolkit",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Socket.IO",
                "JWT",
                "REST API",
            ],
        },
    },


    // =========================================================
    // JAVA / BACKEND
    // =========================================================

    {
        id: "file-packer-unpacker",
        title: "File Packer & Unpacker",
        slug: "file-packer-unpacker",
        category: "Java",
        year: 2026,
        order: 2,
        featured: true,
        visible: true,

        shortDescription:
            "Full-stack file archiving application that packs multiple files into a custom encrypted archive and reconstructs them through a React-based interface.",

        description: [
            "Built a **Java-based file archiving engine** for packing multiple files into a single **custom archive** while preserving file metadata and content.",

            "Designed a **structured archive format** using **file headers** to store metadata such as filename, size, timestamp, and checksum.",

            "Implemented **stream-based file processing**, **encryption/decryption**, archive validation, and file reconstruction during unpacking.",

            "Developed a **React-based frontend** using JavaScript, HTML, CSS, and Bootstrap for interacting with the packing and unpacking workflows.",
        ],

        technologies: [
            "Java",
            "Java I/O",
            "Spring Boot",
            "File Handling",
            "Encryption",
            "Checksum",
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Bootstrap",
        ],

        githubUrl:
            "YOUR_ACTUAL_GITHUB_REPOSITORY_URL",

        liveUrl:
            "YOUR_ACTUAL_DEPLOYED_PROJECT_URL",

        imageUrl: "/projects/FilePacker.png",

        caseStudy: {
            intro:
                "A **full-stack file archiving application** that combines a Java-based file processing engine with a React interface to pack, protect, validate, and extract multiple files through a custom archive format.",

            story: [
                "-> The project was developed to understand how **file archiving utilities** work internally rather than relying entirely on existing ZIP or TAR implementations.",

                "-> During packing, the application processes the selected files, collects their **metadata**, creates **structured file headers**, and writes the headers followed by the corresponding file data into a single archive.",

                "-> The archive format allows the unpacking engine to determine where each file begins and ends, read its metadata, reconstruct the original file, and continue processing the remaining entries **sequentially**.",

                "-> **Java I/O streams** are used to process file data incrementally, avoiding the need to load complete files into memory during packing and extraction.",

                "-> **Encryption and decryption** are integrated into the archive processing workflow to protect packed file contents, while **checksum and header validation** are used to verify archive data before extraction.",

                "-> A **React frontend** was developed using JavaScript, HTML, CSS, and Bootstrap to provide a simple interface for selecting files and interacting with packing and unpacking operations.",
            ],

            highlights: [
                "**Custom archive format**",
                "**Structured file headers**",
                "File metadata preservation",
                "**Stream-based file processing**",
                "**Encryption and decryption**",
                "**Checksum validation**",
                "Archive header validation",
                "**Sequential file parsing**",
                "**File reconstruction during extraction**",
                "**React-based user interface**",
                "JavaScript frontend",
                "Responsive UI with Bootstrap",
            ],

            builtWith: [
                "Java",
                "Java I/O",
                "Spring Boot",
                "File Handling",
                "Encryption",
                "Checksum",
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Bootstrap",
            ],

            architecture: [
                "React frontend handles file selection and user interactions.",
                "Java processing layer manages packing, unpacking, file traversal, metadata handling, and archive processing.",
                "The packing engine creates file headers and writes file data sequentially into the custom archive.",
                "Encryption is applied during archive processing to protect packed data.",
                "The unpacking engine validates the archive, reads each header, decrypts the corresponding data, and reconstructs the original files.",
            ],

            packingWorkflow: [
                "Select input files.",
                "Traverse and read the selected files.",
                "Collect file metadata.",
                "Create a structured file header.",
                "Read file content through Java I/O streams.",
                "Apply encryption during archive processing.",
                "Write the header and file data into the archive.",
                "Repeat for each selected file.",
            ],

            unpackingWorkflow: [
                "Select the packed archive.",
                "Validate the archive header or magic number.",
                "Read the next file header.",
                "Extract the stored file metadata.",
                "Read the corresponding file data.",
                "Decrypt the data.",
                "Recreate the original file.",
                "Restore the stored metadata where supported.",
                "Continue until the end of the archive.",
            ],

            challenges: [
                {
                    title: "Designing the Archive Format",
                    description:
                        "Multiple files cannot simply be concatenated because the unpacking process needs to identify each file and determine how much data belongs to it. A **structured header** was used to store the metadata required for reconstruction."
                },

                {
                    title: "Processing Large Files",
                    description:
                        "Loading an entire file into memory can increase memory consumption. **Stream-based Java I/O** allows file content to be processed incrementally during packing and extraction."
                },

                {
                    title: "File Reconstruction",
                    description:
                        "The unpacker must understand the metadata and boundaries of every stored file. The **header** provides the information required to recreate each file sequentially."
                },

                {
                    title: "Archive Validation",
                    description:
                        "The application validates the packed archive before processing it so that arbitrary or invalid files are not treated as valid archives."
                },

                {
                    title: "Data Integrity",
                    description:
                        "**Checksum validation** provides a mechanism for detecting corrupted or altered archive data during the extraction workflow."
                },
            ],

            learningOutcomes: [
                "Understanding Java byte streams and file handling APIs.",
                "Designing and parsing a custom archive format.",
                "Working with file metadata and structured file headers.",
                "Understanding stream-based processing and memory usage.",
                "Implementing encryption and decryption workflows.",
                "Using checksums for data integrity validation.",
                "Handling sequential binary data processing.",
                "Building a web interface using React and JavaScript.",
                "Integrating frontend interactions with backend file-processing functionality.",
            ],

            engineeringConcepts: [
                "File I/O",
                "Stream Processing",
                "Binary File Formats",
                "Serialization",
                "Metadata Management",
                "Sequential Parsing",
                "Data Integrity",
                "Encryption / Decryption",
                "Archive Validation",
                "File Reconstruction",
                "Exception Handling",
                "Frontend-Backend Integration",
            ],
        },
    },

    // =========================================================
    // C / C++ / SYSTEM PROGRAMMING
    // =========================================================

    {
        id: "custom-virtual-file-system",
        title: "Custom Virtual File System (CVFS)",
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
        // liveUrl: "https://github.com/SanketHajare44/Kernel-Interface-Utility-Suite",
        imageUrl: "/projects/CVFS.svg",

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
