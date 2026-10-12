import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";

/*
 * Renders text with support for:
 * **important text**
 *
 * Example:
 * "Built **real-time chat** using **Socket.IO**."
 *
 * Only the text between ** ** will be rendered in bold.
 */
const FormattedText = ({ text }) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return (
        <>
            {parts.map((part, index) => {
                if (
                    part.startsWith("**") &&
                    part.endsWith("**") &&
                    part.length > 4
                ) {
                    return (
                        <strong
                            key={index}
                            className="font-normal text-black dark:text-white"
                        >
                            {part.slice(2, -2)}
                        </strong>
                    );
                }

                return <span key={index}>{part}</span>;
            })}
        </>
    );
};

const ProjectShowcase = ({ project, index }) => {
    const isReversed = index % 2 !== 0;

    return (
        <article
            className="
                group
                border-t
                border-zinc-200
                py-16
                sm:py-20
                lg:py-28
                dark:border-white/10
            "
        >

            <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${isReversed
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                    }`}
            >

                {/* =====================================================
                    PROJECT PREVIEW
                ====================================================== */}

                <div className="relative">
                    <Link
                        to={`/projects/${project.slug}`}
                        className="group/preview block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-black"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-orange-50 via-white to-zinc-100 p-2 shadow-[0_14px_42px_-24px_rgba(24,24,27,0.42)] transition-all duration-500 group-hover/preview:-translate-y-1 group-hover/preview:border-orange-300 group-hover/preview:shadow-[0_24px_50px_-24px_rgba(249,115,22,0.36)] sm:p-3 dark:border-white/10 dark:from-zinc-900 dark:via-zinc-950 dark:to-black dark:group-hover/preview:border-orange-500/40">
                            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200/80 bg-white dark:border-white/10 dark:bg-zinc-950">
                                <div className="flex h-8 shrink-0 items-center justify-between border-b border-zinc-200/80 bg-white/90 px-3 dark:border-white/10 dark:bg-zinc-900/90">
                                    <div className="flex items-center gap-1.5" aria-hidden="true">
                                        <span className="h-2 w-2 rounded-full bg-orange-400" />
                                        <span className="h-2 w-2 rounded-full bg-amber-300" />
                                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    </div>
                                    <span className="ml-3 truncate font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-400">
                                        {project.title} · preview
                                    </span>
                                    <span className="ml-3 shrink-0 font-mono text-[9px] text-orange-500">
                                        OPEN ↗
                                    </span>
                                </div>

                                {project.imageUrl ? (
                                    <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-zinc-100/70 dark:bg-black/50">
                                        <img
                                            src={project.imageUrl}
                                            alt={`${project.title} project preview`}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-contain transition-transform duration-700 group-hover/preview:scale-[1.025]"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex min-h-0 flex-1 items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950">
                                        <div className="px-4 text-center">
                                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-600">
                                                Project Preview
                                            </p>
                                            <p className="mt-3 text-xl font-medium text-zinc-700 dark:text-zinc-300">
                                                {project.title}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Link>

                </div>


                {/* =====================================================
                    PROJECT INFORMATION
                ====================================================== */}

                <div>

                    {/* =================================================
                        PROJECT METADATA
                    ================================================== */}

                    <div
                        className="
                            mb-4
                            flex
                            flex-wrap
                            items-center
                            gap-3
                            text-xs
                            uppercase
                            tracking-[0.18em]
                        "
                    >

                        <span className="text-zinc-500">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-zinc-300 dark:text-zinc-700">
                            /
                        </span>

                        <span className="text-zinc-500">
                            {project.year}
                        </span>

                        <span className="text-zinc-300 dark:text-zinc-700">
                            /
                        </span>

                        <span className="text-zinc-500">
                            {project.category}
                        </span>

                    </div>


                    {/* =================================================
                        PROJECT TITLE
                    ================================================== */}

                    <Link to={`/projects/${project.slug}`}>

                        <h2
                            className="
                                text-3xl
                                font-semibold
                                tracking-tight
                                text-zinc-900
                                transition-colors
                                group-hover:text-orange-500
                                sm:text-4xl
                                dark:text-zinc-100
                                dark:group-hover:text-orange-400
                            "
                        >
                            {project.title}
                        </h2>

                    </Link>


                    {/* =================================================
                        PROJECT DESCRIPTION
                    ================================================== */}

                    <ul
                        className="
                            mt-6
                            space-y-3
                            text-sm
                            leading-7
                            text-zinc-600
                            sm:text-base
                            dark:text-zinc-400
                        "
                    >

                        {project.description.map(
                            (point, pointIndex) => (

                                <li
                                    key={pointIndex}
                                    className="flex gap-3"
                                >

                                    <span
                                        className="
                                            mt-3
                                            h-1
                                            w-1
                                            shrink-0
                                            rounded-full
                                            bg-zinc-400
                                            dark:bg-zinc-600
                                        "
                                    />

                                    <span>
                                        <FormattedText text={point} />
                                    </span>

                                </li>

                            )
                        )}

                    </ul>


                    {/* =================================================
                        TECHNOLOGIES
                    ================================================== */}

                    <div className="mt-10">

                        <p
                            className="
                                mb-3
                                font-mono
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-zinc-500
                                dark:text-zinc-600
                            "
                        >
                            Technologies
                        </p>


                        <div className="flex flex-wrap gap-2">

                            {project.technologies.map(
                                (technology) => (

                                    <span
                                        key={technology}
                                        className="
                                            rounded-md
                                            border
                                            border-zinc-200
                                            bg-zinc-50
                                            px-2.5
                                            py-1.5
                                            text-xs
                                            text-zinc-600
                                            transition-colors
                                            hover:border-orange-500/40
                                            hover:text-orange-500
                                            dark:border-white/10
                                            dark:bg-white/[0.03]
                                            dark:text-zinc-400
                                            dark:hover:border-orange-500/40
                                            dark:hover:text-orange-400
                                        "
                                    >
                                        {technology}
                                    </span>

                                )
                            )}

                        </div>

                    </div>


                    {/* =================================================
                        PROJECT LINKS
                    ================================================== */}

                    <div className="mt-8 flex flex-wrap items-center gap-5">

                        {/* Case Study */}

                        <Link
                            to={`/projects/${project.slug}`}
                            className="
                                text-sm
                                font-medium
                                text-zinc-800
                                transition-colors
                                hover:text-orange-500
                                dark:text-zinc-200
                                dark:hover:text-orange-400
                            "
                        >
                            Case Study ↗
                        </Link>


                        {/* GitHub */}

                        {project.githubUrl && (

                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    group/link
                                            inline-flex
                                            items-center
                                            gap-1.5
                                            font-mono
                                            text-[10px]
                                            text-zinc-900
                                            transition-colors
                                            hover:text-orange-500
                                            dark:text-white
                                            dark:hover:text-orange-400
                                "
                            >
                                <FaGithub size={15} />

                                GitHub

                                <ExternalLink size={14} />
                            </a>

                        )}


                        {/* Live Demo */}

                        {project.liveUrl && (

                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                inline-flex
                                items-center
                                gap-1.5
                                text-sm
                                text-orange-500
                                transition-colors
                                hover:text-zinc-400
                                dark:text-orange-500
                                dark:hover:text-zinc-400
                            "
                            >

                                Live

                                <ExternalLink size={14} />

                            </a>

                        )}

                    </div>

                </div>

            </div>

        </article>
    );
};

export default ProjectShowcase;