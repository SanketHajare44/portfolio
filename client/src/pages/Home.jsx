import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import projects from "../content/projects";

const sectionLabel =
    "font-mono text-xs uppercase tracking-[0.2em] text-orange-500";

const headingGlow = {
    textShadow:
        "0 0 18px rgba(249, 115, 22, 0.12)",
};

const Home = () => {
    const featuredProjects = projects
        .filter(
            (project) =>
                project.visible &&
                project.featured
        )
        .sort(
            (a, b) =>
                a.order - b.order
        )
        .slice(0, 4);

    return (
        <main
            className="
                min-h-screen
                bg-white
                text-zinc-900
                dark:bg-black
                dark:text-white
            "
        >

            {/* =====================================================
                HERO
            ====================================================== */}

            <section
                className="
                    border-b
                    border-zinc-200
                    dark:border-white/10
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-6xl
                        px-6
                        py-24
                        sm:px-8
                        lg:px-10
                        lg:py-32
                    "
                >

                    <div className="max-w-5xl">

                        {/* EYEBROW */}

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            className="
                                font-mono
                                text-[11px]
                                uppercase
                                tracking-[0.25em]
                                text-orange-500
                            "
                        >
                            COMPUTER ENGINEERING GRADUATE
                        </motion.p>


                        {/* MAIN HEADING */}

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.15,
                                ease: "easeOut",
                            }}
                            style={headingGlow}
                            className="
                                mt-7
                                max-w-4xl
                                text-4xl
                                font-medium
                                leading-[1.05]
                                tracking-[-0.035em]
                                text-zinc-900
                                sm:text-5xl
                                dark:text-zinc-100
                                lg:text-6xl
                            "
                        >
                            I build across the layers

                            <br />

                            <span className="text-orange-500">
                                of software —
                            </span>

                            <br />

                            <span className="text-zinc-600 dark:text-zinc-500">
                                from systems to intelligent applications.
                            </span>

                        </motion.h1>


                        {/* DESCRIPTION */}

                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                mt-8
                                max-w-2xl
                                text-base
                                leading-7
                                text-zinc-600
                                sm:text-lg
                                sm:leading-8
                                dark:text-zinc-400
                            "
                        >
                            I enjoy understanding software from the
                            low-level system underneath it to the
                            application people use.

                            <span className="text-zinc-800 dark:text-zinc-300">
                                {" "}
                                My projects span C/C++, Linux,
                                Java backend development, MERN
                                applications, and AI/ML.
                            </span>

                        </motion.p>


                        {/* CTA */}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.45,
                                ease: "easeOut",
                            }}
                            className="
                                mt-10
                                flex
                                flex-wrap
                                items-center
                                gap-6
                            "
                        >

                            {/* VIEW PROJECTS */}

                            <Link
                                to="/projects"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    border-b
                                    border-orange-500/60
                                    pb-1.5
                                    text-sm
                                    font-medium
                                    text-orange-500
                                    transition-colors
                                    hover:border-orange-400
                                    hover:text-orange-400
                                "
                            >
                                View projects

                                <ArrowUpRight
                                    size={15}
                                    className="
                                        transition-transform
                                        duration-200
                                        group-hover:translate-x-0.5
                                        group-hover:-translate-y-0.5
                                    "
                                />
                            </Link>


                            {/* RESUME */}

                            <a
                                href="/Sanket_Hajare.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    border-b
                                    border-zinc-300
                                    pb-1.5
                                    text-sm
                                    text-zinc-600
                                    transition-colors
                                    hover:border-zinc-500
                                    hover:text-zinc-900
                                    dark:border-white/20
                                    dark:text-zinc-400
                                    dark:hover:border-white/40
                                    dark:hover:text-white
                                "
                            >
                                Resume

                                <ArrowUpRight
                                    size={15}
                                    className="
                                        transition-transform
                                        duration-200
                                        group-hover:translate-x-0.5
                                        group-hover:-translate-y-0.5
                                    "
                                />
                            </a>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                TECHNOLOGY STRIP
            ====================================================== */}

            <section
                className="
                    border-b
                    border-zinc-200
                    dark:border-white/10
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-6xl
                        px-6
                        sm:px-8
                        lg:px-10
                    "
                >

                    <div
                        className="
                            grid
                            divide-y
                            divide-zinc-200
                            sm:grid-cols-2
                            sm:divide-x
                            sm:divide-y-0
                            dark:divide-white/10
                            lg:grid-cols-4
                        "
                    >

                        {/* =================================================
                            SYSTEMS
                        ================================================== */}

                        <div
                            className="
                                py-7
                                sm:px-8
                                lg:px-7
                                lg:first:pl-0
                            "
                        >

                            <p
                                className="
                                    font-mono
                                    text-[10px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-zinc-500
                                    dark:text-zinc-600
                                "
                            >
                                SYSTEMS
                            </p>

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    text-zinc-800
                                    dark:text-zinc-300
                                "
                                style={{
                                    textShadow:
                                        "0 0 10px rgba(249, 115, 22, 0.10)",
                                }}
                            >
                                C · C++ · Linux
                            </p>

                        </div>


                        {/* =================================================
                            BACKEND
                        ================================================== */}

                        <div
                            className="
                                py-7
                                sm:px-8
                                lg:px-7
                            "
                        >

                            <p
                                className="
                                    font-mono
                                    text-[10px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-zinc-500
                                    dark:text-zinc-600
                                "
                            >
                                BACKEND
                            </p>

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    text-zinc-800
                                    dark:text-zinc-300
                                "
                                style={{
                                    textShadow:
                                        "0 0 10px rgba(249, 115, 22, 0.10)",
                                }}
                            >
                                Java · Spring Boot · Express.js · REST APIs
                            </p>

                        </div>


                        {/* =================================================
                            FRONTEND
                        ================================================== */}

                        <div
                            className="
                                py-7
                                sm:px-8
                                lg:px-7
                            "
                        >

                            <p
                                className="
                                    font-mono
                                    text-[10px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-zinc-500
                                    dark:text-zinc-600
                                "
                            >
                                FRONTEND
                            </p>

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    text-zinc-800
                                    dark:text-zinc-300
                                "
                                style={{
                                    textShadow:
                                        "0 0 10px rgba(249, 115, 22, 0.10)",
                                }}
                            >
                                React · JavaScript · Tailwind CSS
                            </p>

                        </div>


                        {/* =================================================
                            AI / ML
                        ================================================== */}

                        <div
                            className="
                                py-7
                                sm:px-8
                                lg:px-7
                                lg:last:pr-0
                            "
                        >

                            <p
                                className="
                                    font-mono
                                    text-[10px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-zinc-500
                                    dark:text-zinc-600
                                "
                            >
                                AI / ML
                            </p>

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    text-zinc-800
                                    dark:text-zinc-300
                                "
                                style={{
                                    textShadow:
                                        "0 0 10px rgba(249, 115, 22, 0.10)",
                                }}
                            >
                                Python · RAG · LLM
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                SELECTED WORK
            ====================================================== */}

            <section
                className="
                    border-b
                    border-zinc-200
                    dark:border-white/10
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-6xl
                        px-6
                        py-24
                        sm:px-8
                        lg:px-10
                        lg:py-28
                    "
                >

                    {/* SECTION HEADER */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-5
                            sm:flex-row
                            sm:items-end
                            sm:justify-between
                        "
                    >

                        <div>

                            <p className={sectionLabel}>
                                ____ SELECTED WORK
                            </p>

                            <h2
                                style={headingGlow}
                                className="
                                    mt-5
                                    text-3xl
                                    font-medium
                                    tracking-tight
                                    text-zinc-900
                                    sm:text-4xl
                                    dark:text-zinc-100
                                "
                            >
                                Things I've built.
                            </h2>

                            <p
                                className="
                                    mt-4
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-zinc-600
                                    sm:text-base
                                    dark:text-zinc-500
                                "
                            >
                                Projects across systems programming,
                                backend engineering, full-stack development,
                                and intelligent applications.
                            </p>

                        </div>


                        <Link
                            to="/projects"
                            className="
                                group
                                inline-flex
                                shrink-0
                                items-center
                                gap-2
                                font-mono
                                text-xs
                                text-zinc-600
                                transition-colors
                                hover:text-orange-500
                                dark:text-zinc-500
                                dark:hover:text-white
                            "
                        >
                            View all projects

                            <ArrowUpRight
                                size={14}
                                className="
                                    transition-transform
                                    group-hover:translate-x-0.5
                                    group-hover:-translate-y-0.5
                                "
                            />

                        </Link>

                    </div>


                    {/* PROJECT GRID */}

                    <div
                        className="
                            mx-auto
                            mt-14
                            grid
                            max-w-5xl
                            gap-x-10
                            gap-y-16
                            md:grid-cols-2
                        "
                    >

                        {featuredProjects.map(
                            (project, index) => (

                                <article
                                    key={project.id}
                                    className="group block"
                                >

                                    {/* PROJECT IMAGE */}

                                    <Link
                                        to={`/projects/${project.slug}`}
                                        className="block"
                                    >

                                        <div
                                            className="
                                                mx-auto
                                                w-full
                                                max-w-[520px]
                                                overflow-hidden
                                                rounded-xl
                                                border
                                                border-zinc-200
                                                bg-zinc-100
                                                dark:border-white/10
                                                dark:bg-zinc-950
                                            "
                                        >

                                            <img
                                                src={project.imageUrl}
                                                alt={`${project.title} project preview`}
                                                className="
                                                    aspect-[16/10]
                                                    w-full
                                                    object-cover
                                                    transition-transform
                                                    duration-500
                                                    group-hover:scale-[1.02]
                                                "
                                            />

                                        </div>

                                    </Link>


                                    {/* PROJECT INFORMATION */}

                                    <div
                                        className="
                                            mx-auto
                                            mt-5
                                            max-w-[520px]
                                        "
                                    >

                                        {/* TITLE + NUMBER */}

                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-between
                                                gap-4
                                            "
                                        >

                                            <Link
                                                to={`/projects/${project.slug}`}
                                                className="
                                                    text-xl
                                                    font-medium
                                                    tracking-tight
                                                    text-zinc-900
                                                    transition-colors
                                                    hover:text-orange-500
                                                    dark:text-zinc-100
                                                    dark:hover:text-orange-400
                                                "
                                            >
                                                {project.title}
                                            </Link>

                                            <span
                                                className="
                                                    font-mono
                                                    text-xs
                                                    text-zinc-500
                                                    dark:text-zinc-600
                                                "
                                            >
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                        </div>


                                        {/* DESCRIPTION + YEAR */}

                                        <div
                                            className="
                                                mt-2
                                                flex
                                                items-start
                                                justify-between
                                                gap-5
                                            "
                                        >

                                            <p
                                                className="
                                                    text-sm
                                                    leading-6
                                                    text-zinc-600
                                                    dark:text-zinc-500
                                                "
                                            >
                                                {project.shortDescription ||
                                                    project.description?.[0]}
                                            </p>

                                            <span
                                                className="
                                                    shrink-0
                                                    font-mono
                                                    text-xs
                                                    text-zinc-500
                                                    dark:text-zinc-600
                                                "
                                            >
                                                {project.year}
                                            </span>

                                        </div>


                                        {/* TECHNOLOGIES */}

                                        <div
                                            className="
                                                mt-4
                                                flex
                                                flex-wrap
                                                gap-2
                                            "
                                        >

                                            {project.technologies
                                                ?.slice(0, 5)
                                                .map(
                                                    (technology) => (

                                                        <span
                                                            key={technology}
                                                            className="
                                                                rounded-md
                                                                border
                                                                border-zinc-200
                                                                px-2
                                                                py-1
                                                                font-mono
                                                                text-[10px]
                                                                text-zinc-600
                                                                transition-all
                                                                hover:border-orange-500/40
                                                                hover:text-orange-500
                                                                dark:border-white/10
                                                                dark:text-zinc-500
                                                                dark:hover:border-orange-500/40
                                                                dark:hover:text-orange-400
                                                            "
                                                            style={{
                                                                textShadow:
                                                                    "0 0 10px rgba(249, 115, 22, 0.12)",
                                                            }}
                                                        >
                                                            {technology}
                                                        </span>

                                                    )
                                                )}

                                        </div>


                                        {/* CATEGORY + PROJECT LINKS */}

                                        <div
                                            className="
                                                mt-5
                                                flex
                                                items-center
                                                justify-between
                                            "
                                        >

                                            {/* CATEGORY */}

                                            <p
                                                className="
                                                    font-mono
                                                    text-[10px]
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-orange-500/80
                                                "
                                            >
                                                {project.category}
                                            </p>


                                            {/* LINKS */}

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    gap-5
                                                "
                                            >

                                                {/* GITHUB */}

                                                {project.githubUrl && (

                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(event) =>
                                                            event.stopPropagation()
                                                        }
                                                        aria-label={`${project.title} GitHub repository`}
                                                        className="
                                                            group/link
                                                            inline-flex
                                                            items-center
                                                            gap-1.5
                                                            font-mono
                                                            text-[10px]
                                                            text-zinc-500
                                                            transition-colors
                                                            hover:text-orange-500
                                                            dark:text-zinc-500
                                                            dark:hover:text-orange-400
                                                        "
                                                    >
                                                        GitHub

                                                        <ArrowUpRight
                                                            size={13}
                                                            className="
                                                                transition-transform
                                                                duration-200
                                                                group-hover/link:-translate-y-0.5
                                                                group-hover/link:translate-x-0.5
                                                            "
                                                        />

                                                    </a>

                                                )}


                                                {/* LIVE DEMO */}

                                                {project.liveUrl && (

                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(event) =>
                                                            event.stopPropagation()
                                                        }
                                                        aria-label={`${project.title} live demo`}
                                                        className="
                                                            group/link
                                                            inline-flex
                                                            items-center
                                                            gap-1.5
                                                            font-mono
                                                            text-[10px]
                                                            text-orange-500
                                                            transition-colors
                                                            hover:text-orange-400
                                                        "
                                                    >
                                                        Live

                                                        <ArrowUpRight
                                                            size={13}
                                                            className="
                                                                transition-transform
                                                                duration-200
                                                                group-hover/link:-translate-y-0.5
                                                                group-hover/link:translate-x-0.5
                                                            "
                                                        />

                                                    </a>

                                                )}


                                                {/* PROJECT DETAILS */}

                                                <Link
                                                    to={`/projects/${project.slug}`}
                                                    aria-label={`View ${project.title}`}
                                                    className="
                                                        inline-flex
                                                        items-center
                                                        text-zinc-400
                                                        transition-colors
                                                        hover:text-orange-500
                                                        dark:text-zinc-700
                                                        dark:hover:text-orange-500
                                                    "
                                                >

                                                    <ArrowUpRight
                                                        size={16}
                                                    />

                                                </Link>

                                            </div>

                                        </div>

                                    </div>

                                </article>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHAT I WORK WITH
            ====================================================== */}

            <section
                className="
                    border-b
                    border-zinc-200
                    dark:border-white/10
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-6xl
                        px-6
                        py-24
                        sm:px-8
                        lg:px-10
                        lg:py-28
                    "
                >

                    <p className={sectionLabel}>
                        ____ WHAT I WORK WITH
                    </p>


                    <div
                        className="
                            mt-10
                            grid
                            gap-10
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >

                        {/* SYSTEMS */}

                        <div>

                            <h3
                                style={headingGlow}
                                className="
                                    text-lg
                                    font-medium
                                    text-zinc-800
                                    dark:text-zinc-200
                                "
                            >
                                Systems
                            </h3>

                            <ul
                                className="
                                    mt-5
                                    space-y-2
                                    text-sm
                                    text-zinc-600
                                    dark:text-zinc-500
                                "
                            >
                                <li>C</li>
                                <li>C++</li>
                                <li>Linux</li>
                                <li>System Programming</li>
                                <li>File Systems</li>
                            </ul>

                        </div>


                        {/* BACKEND */}

                        <div>

                            <h3
                                style={headingGlow}
                                className="
                                    text-lg
                                    font-medium
                                    text-zinc-800
                                    dark:text-zinc-200
                                "
                            >
                                Backend
                            </h3>

                            <ul
                                className="
                                    mt-5
                                    space-y-2
                                    text-sm
                                    text-zinc-600
                                    dark:text-zinc-500
                                "
                            >
                                <li>Java</li>
                                <li>Spring Boot</li>
                                <li>REST APIs</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                            </ul>

                        </div>


                        {/* FRONTEND */}

                        <div>

                            <h3
                                style={headingGlow}
                                className="
                                    text-lg
                                    font-medium
                                    text-zinc-800
                                    dark:text-zinc-200
                                "
                            >
                                Frontend
                            </h3>

                            <ul
                                className="
                                    mt-5
                                    space-y-2
                                    text-sm
                                    text-zinc-600
                                    dark:text-zinc-500
                                "
                            >
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>HTML / CSS</li>
                                <li>Tailwind CSS</li>
                                <li>Socket.IO</li>
                            </ul>

                        </div>


                        {/* AI / ML */}

                        <div>

                            <h3
                                style={headingGlow}
                                className="
                                    text-lg
                                    font-medium
                                    text-zinc-800
                                    dark:text-zinc-200
                                "
                            >
                                AI / ML
                            </h3>

                            <ul
                                className="
                                    mt-5
                                    space-y-2
                                    text-sm
                                    text-zinc-600
                                    dark:text-zinc-500
                                "
                            >
                                <li>Python</li>
                                <li>Machine Learning</li>
                                <li>RAG</li>
                                <li>LLMs</li>
                                <li>OpenCV</li>
                            </ul>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CERTIFICATIONS
            ====================================================== */}

            <section
                className="
                    border-b
                    border-zinc-200
                    dark:border-white/10
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-6xl
                        px-6
                        py-24
                        sm:px-8
                        lg:px-10
                        lg:py-28
                    "
                >

                    <p className={sectionLabel}>
                        ____ CERTIFICATIONS
                    </p>

                    <h2
                        style={headingGlow}
                        className="
                            mt-5
                            text-3xl
                            font-medium
                            tracking-tight
                            text-zinc-900
                            sm:text-4xl
                            dark:text-zinc-100
                        "
                    >
                        Credentials & learning.
                    </h2>


                    <div
                        className="
                            mt-10
                            divide-y
                            divide-zinc-200
                            border-y
                            border-zinc-200
                            dark:divide-white/10
                            dark:border-white/10
                        "
                    >

                        {/* JAVA FULL STACK */}

                        <div
                            className="
                                flex
                                flex-col
                                gap-5
                                py-7
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >

                            <div className="flex gap-5">

                                <span
                                    className="
                                        font-mono
                                        text-xs
                                        text-zinc-500
                                        dark:text-zinc-600
                                    "
                                >
                                    01
                                </span>

                                <div>

                                    <h3
                                        style={headingGlow}
                                        className="
                                            text-base
                                            font-medium
                                            text-zinc-800
                                            dark:text-zinc-200
                                        "
                                    >
                                        Java Full Stack Development
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-zinc-600
                                            dark:text-zinc-500
                                        "
                                    >
                                        Marvellous Infosystem · Pune
                                    </p>

                                </div>

                            </div>

                            <p
                                className="
                                    font-mono
                                    text-xs
                                    text-zinc-500
                                    dark:text-zinc-600
                                "
                            >
                                2025
                            </p>

                        </div>


                        {/* AI / ML & DATA SCIENCE */}

                        <div
                            className="
                                flex
                                flex-col
                                gap-5
                                py-7
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >

                            <div className="flex gap-5">

                                <span
                                    className="
                                        font-mono
                                        text-xs
                                        text-zinc-500
                                        dark:text-zinc-600
                                    "
                                >
                                    02
                                </span>

                                <div>

                                    <h3
                                        style={headingGlow}
                                        className="
                                            text-base
                                            font-medium
                                            text-zinc-800
                                            dark:text-zinc-200
                                        "
                                    >
                                        AI / ML and Data Science
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-zinc-600
                                            dark:text-zinc-500
                                        "
                                    >
                                        Marvellous Infosystem · Pune
                                    </p>

                                </div>

                            </div>

                            <p
                                className="
                                    font-mono
                                    text-xs
                                    text-zinc-500
                                    dark:text-zinc-600
                                "
                            >
                                2026
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CURRENTLY
            ====================================================== */}

            <section
                className="
                    border-b
                    border-zinc-200
                    dark:border-white/10
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-6xl
                        px-6
                        py-24
                        sm:px-8
                        lg:px-10
                        lg:py-28
                    "
                >

                    <div
                        className="
                            grid
                            gap-10
                            lg:grid-cols-[0.3fr_0.7fr]
                        "
                    >

                        <p className={sectionLabel}>
                            ____ CURRENTLY
                        </p>


                        <div>

                            <h2
                                style={headingGlow}
                                className="
                                    text-2xl
                                    font-medium
                                    tracking-tight
                                    text-zinc-800
                                    sm:text-3xl
                                    dark:text-zinc-200
                                "
                            >
                                Building. Learning. Preparing.
                            </h2>


                            <div
                                className="
                                    mt-7
                                    grid
                                    gap-4
                                    sm:grid-cols-3
                                "
                            >

                                {/* BUILDING PROJECTS */}

                                <div
                                    className="
                                        border-l
                                        border-orange-500/60
                                        pl-4
                                    "
                                >

                                    <p
                                        className="
                                            text-sm
                                            text-zinc-800
                                            dark:text-zinc-300
                                        "
                                    >
                                        Building projects
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            leading-5
                                            text-zinc-500
                                            dark:text-zinc-600
                                        "
                                    >
                                        Turning concepts into working
                                        software.
                                    </p>

                                </div>


                                {/* STRENGTHENING DSA */}

                                <div
                                    className="
                                        border-l
                                        border-zinc-300
                                        pl-4
                                        dark:border-white/10
                                    "
                                >

                                    <p
                                        className="
                                            text-sm
                                            text-zinc-800
                                            dark:text-zinc-300
                                        "
                                    >
                                        Strengthening DSA
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            leading-5
                                            text-zinc-500
                                            dark:text-zinc-600
                                        "
                                    >
                                        Improving problem solving and
                                        core programming skills.
                                    </p>

                                </div>


                                {/* SEEKING OPPORTUNITIES */}

                                <div
                                    className="
                                        border-l
                                        border-zinc-300
                                        pl-4
                                        dark:border-white/10
                                    "
                                >

                                    <p
                                        className="
                                            text-sm
                                            text-zinc-800
                                            dark:text-zinc-300
                                        "
                                    >
                                        Seeking opportunities
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            leading-5
                                            text-zinc-500
                                            dark:text-zinc-600
                                        "
                                    >
                                        Looking for an entry-level
                                        software engineering role.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CONTACT CTA
            ====================================================== */}

            <section>

                <div
                    className="
                        mx-auto
                        max-w-6xl
                        px-6
                        py-28
                        text-center
                        sm:px-8
                        lg:px-10
                        lg:py-36
                    "
                >

                    <p className={sectionLabel}>
                        ____ LET'S BUILD
                    </p>

                    <h2
                        style={headingGlow}
                        className="
                            mt-5
                            text-2xl
                            font-medium
                            tracking-tight
                            text-zinc-900
                            sm:text-4xl
                            dark:text-zinc-100
                            lg:text-5xl
                        "
                    >
                        Have something worth building?
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-xl
                            text-sm
                            leading-7
                            text-zinc-600
                            sm:text-base
                            dark:text-zinc-500
                        "
                    >
                        Open to entry-level software engineering
                        opportunities and challenging problems.
                    </p>

                    <div className="mt-8">

                        <Link
                            to="/contact"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                rounded-md
                                border
                                border-orange-500/50
                                px-5
                                py-2.5
                                text-sm
                                text-orange-500
                                transition-colors
                                hover:bg-orange-500/10
                                hover:text-orange-400
                            "
                        >
                            Get in touch

                            <ArrowUpRight
                                size={15}
                                className="
                                    transition-transform
                                    group-hover:translate-x-0.5
                                    group-hover:-translate-y-0.5
                                "
                            />

                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Home;