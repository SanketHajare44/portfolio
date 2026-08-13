import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import projects from "../content/projects";


const ProjectDetails = () => {

    const { slug } = useParams();

    const project = projects.find(
        (item) => item.slug === slug
    );


    // ============================================================
    // PROJECT NOT FOUND
    // ============================================================

    if (!project) {

        return (

            <main className="min-h-[70vh] bg-white text-zinc-900 dark:bg-black dark:text-white">

                <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">

                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                    >
                        <ArrowLeft size={15} />

                        All Projects
                    </Link>


                    <div className="mt-20">

                        <p className="text-xs uppercase tracking-[0.25em] text-orange-500">
                            Error 404
                        </p>


                        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
                            Project not found
                        </h1>


                        <p className="mt-5 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-500">
                            The project you're looking for doesn't
                            exist or may have been removed.
                        </p>

                    </div>

                </div>

            </main>

        );
    }


    const caseStudy = project.caseStudy;


    return (

        <main className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white">

            <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-24">


                {/* =====================================================
                    BACK TO PROJECTS
                ====================================================== */}

                <Link
                    to="/projects"
                    className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                >

                    <ArrowLeft
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />

                    <span>
                        All Projects
                    </span>

                </Link>


                {/* =====================================================
                    PROJECT HEADER
                ====================================================== */}

                <header className="mt-14 sm:mt-16 lg:mt-20">


                    {/* =================================================
                        METADATA
                    ================================================== */}

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.2em] sm:text-xs">

                        <span className="text-zinc-500">
                            {project.year}
                        </span>


                        <span className="text-zinc-300 dark:text-zinc-700">
                            /
                        </span>


                        <span className="text-zinc-500">
                            {project.category}
                        </span>


                        {project.featured && (

                            <>

                                <span className="text-zinc-300 dark:text-zinc-700">
                                    /
                                </span>


                                <span className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400">

                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />

                                    Featured

                                </span>

                            </>

                        )}

                    </div>


                    {/* =================================================
                        TITLE
                    ================================================== */}

                    <h1
                        className="mt-6 max-w-5xl text-4xl font-semibold tracking-[-0.03em] text-zinc-900 sm:text-5xl dark:text-zinc-100 md:text-6xl lg:text-7xl"
                        style={{
                            textShadow:
                                "0 0 18px rgba(249, 115, 22, 0.10)",
                        }}
                    >
                        {project.title}
                    </h1>


                    {/* =================================================
                        INTRODUCTION
                    ================================================== */}

                    <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:mt-7 sm:text-lg sm:leading-8 dark:text-zinc-400 lg:text-xl lg:leading-9">

                        {caseStudy?.intro ||
                            project.description?.[0]}

                    </p>


                    {/* =================================================
                        LINKS
                    ================================================== */}

                    {(project.liveUrl ||
                        project.githubUrl) && (

                            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">


                                {/* LIVE */}

                                {project.liveUrl && (

                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 transition-colors hover:text-orange-400 dark:text-orange-400 dark:hover:text-orange-300"
                                    >

                                        Live

                                        <ExternalLink size={14} />

                                    </a>

                                )}


                                {/* GITHUB */}

                                {project.githubUrl && (

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                                    >

                                        Source ↗

                                    </a>

                                )}

                            </div>

                        )}

                </header>


                {/* =====================================================
                    HERO IMAGE
                ====================================================== */}

                {project.imageUrl && (

                    <section className="mt-12 sm:mt-16 lg:mt-20">

                        <div className="group overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-zinc-950">

                            <img
                                src={project.imageUrl}
                                alt={`${project.title} project screenshot`}
                                className="block aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                            />

                        </div>

                    </section>

                )}


                {/* =====================================================
                    PROJECT STORY + HIGHLIGHTS
                ====================================================== */}

                <section className="mt-16 grid gap-14 sm:mt-20 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">


                    {/* =================================================
                        STORY
                    ================================================== */}

                    <div className="min-w-0">

                        <div className="mb-8 flex items-center gap-3">

                            <span className="h-px w-7 bg-zinc-300 dark:bg-zinc-700" />


                            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-600 sm:text-xs">
                                Project Overview
                            </h2>

                        </div>


                        <div className="max-w-3xl">

                            {caseStudy?.story?.length ? (

                                caseStudy.story.map(
                                    (paragraph, index) => (

                                        <p
                                            key={index}
                                            className="mb-7 text-base leading-8 text-zinc-600 sm:text-lg sm:leading-9 dark:text-zinc-400"
                                        >
                                            {paragraph}
                                        </p>

                                    )
                                )

                            ) : (

                                project.description?.map(
                                    (paragraph, index) => (

                                        <p
                                            key={index}
                                            className="mb-7 text-base leading-8 text-zinc-600 sm:text-lg sm:leading-9 dark:text-zinc-400"
                                        >
                                            {paragraph}
                                        </p>

                                    )
                                )

                            )}

                        </div>

                    </div>


                    {/* =================================================
                        HIGHLIGHTS
                    ================================================== */}

                    {caseStudy?.highlights?.length > 0 && (

                        <aside className="lg:border-l lg:border-zinc-200 lg:pl-7 dark:lg:border-white/10">

                            <div className="flex items-center gap-3">

                                <span className="h-px w-7 bg-zinc-300 dark:bg-zinc-700" />


                                <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-600 sm:text-xs">
                                    Highlights
                                </h2>

                            </div>


                            <ul className="mt-7 space-y-5">

                                {caseStudy.highlights.map(
                                    (highlight, index) => (

                                        <li
                                            key={index}
                                            className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                                        >

                                            <span className="mt-3 h-px w-3 shrink-0 bg-zinc-400 dark:bg-zinc-600" />

                                            <span>
                                                {highlight}
                                            </span>

                                        </li>

                                    )
                                )}

                            </ul>

                        </aside>

                    )}

                </section>


                {/* =====================================================
                    BUILT WITH
                ====================================================== */}

                <section className="mt-8 border-t border-zinc-200 pt-10 sm:mt-12 sm:pt-12 lg:mt-16 lg:border-zinc-200 lg:pt-16 dark:border-white/10">

                    <div className="flex items-center gap-3">

                        <span className="h-px w-7 bg-zinc-300 dark:bg-zinc-700" />


                        <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-600 sm:text-xs">
                            Built With
                        </h2>

                    </div>


                    <div className="mt-6 flex flex-wrap gap-2">

                        {(
                            caseStudy?.builtWith ||
                            project.technologies ||
                            []
                        ).map((technology) => (

                            <span
                                key={technology}
                                className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-600 transition-colors hover:border-orange-500/40 hover:text-orange-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-orange-500/40 dark:hover:text-orange-400"
                            >
                                {technology}
                            </span>

                        ))}

                    </div>

                </section>


                {/* =====================================================
                    BOTTOM NAVIGATION
                ====================================================== */}

                <footer className="mt-20 border-t border-zinc-200 pt-8 sm:mt-24 dark:border-white/10">

                    <Link
                        to="/projects"
                        className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                    >

                        <ArrowLeft
                            size={15}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />

                        <span>
                            Back to all projects
                        </span>

                    </Link>

                </footer>

            </div>

        </main>
    );
};


export default ProjectDetails;