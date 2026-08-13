import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ParallaxImage from "../ui/ParallaxImage";

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
                        className="
                            block
                            overflow-hidden
                            rounded-xl
                            border
                            border-zinc-200
                            bg-zinc-100
                            dark:border-white/10
                            dark:bg-zinc-950
                        "
                    >

                        {project.imageUrl ? (

                            <ParallaxImage
                                src={project.imageUrl}
                                alt={`${project.title} project preview`}
                                className="
                                    aspect-[16/10]
                                    w-full
                                    transition-transform
                                    duration-500
                                    group-hover:scale-[1.02]
                                "
                            />

                        ) : (

                            <div
                                className="
                                    flex
                                    aspect-[16/10]
                                    items-center
                                    justify-center
                                    bg-gradient-to-br
                                    from-zinc-100
                                    to-zinc-200
                                    dark:from-zinc-900
                                    dark:to-zinc-950
                                "
                            >

                                <div className="text-center">

                                    <p
                                        className="
                                            text-xs
                                            uppercase
                                            tracking-[0.25em]
                                            text-zinc-500
                                            dark:text-zinc-600
                                        "
                                    >
                                        Project Preview
                                    </p>

                                    <p
                                        className="
                                            mt-3
                                            text-xl
                                            font-medium
                                            text-zinc-700
                                            dark:text-zinc-400
                                        "
                                    >
                                        {project.title}
                                    </p>

                                </div>

                            </div>

                        )}

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
                                        {point}
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
                                    text-sm
                                    text-zinc-500
                                    transition-colors
                                    hover:text-orange-500
                                    dark:text-zinc-400
                                    dark:hover:text-orange-400
                                "
                            >
                                GitHub ↗
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
                                    text-zinc-500
                                    transition-colors
                                    hover:text-orange-500
                                    dark:text-zinc-400
                                    dark:hover:text-orange-400
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