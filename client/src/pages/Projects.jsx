import { useMemo, useState } from "react";

import ProjectShowcase from "../components/projects/ProjectShowCase";
import projects from "../content/projects";


const Projects = () => {

    const [activeCategory, setActiveCategory] = useState("All");


    // ============================================================
    // CATEGORIES
    // ============================================================

    const categories = useMemo(() => {

        const uniqueCategories = [
            ...new Set(
                projects
                    .filter((project) => project.visible)
                    .map((project) => project.category)
            ),
        ];

        return ["All", ...uniqueCategories];

    }, []);


    // ============================================================
    // FILTER AND SORT PROJECTS
    // ============================================================

    const visibleProjects = useMemo(() => {

        return projects
            .filter((project) => project.visible)
            .filter((project) => {

                if (activeCategory === "All") {
                    return true;
                }

                return project.category === activeCategory;

            })
            .sort((a, b) => a.order - b.order);

    }, [activeCategory]);


    return (

        <main className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white">


            {/* =====================================================
                HEADER
            ====================================================== */}

            <section className="border-b border-zinc-200 dark:border-white/10">

                <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">

                    <div className="max-w-4xl">


                        {/* =================================================
                            SECTION NAME
                        ================================================== */}

                        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-500">
                            ____ PROJECTS
                        </p>


                        {/* =================================================
                            MAIN HEADING
                        ================================================== */}

                        <h1
                            className="mt-7 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-zinc-900 sm:text-5xl dark:text-zinc-100 lg:text-6xl"
                            style={{
                                textShadow:
                                    "0 0 20px rgba(249, 115, 22, 0.10)",
                            }}
                        >

                            Things I've built across

                            <br />

                            <span className="text-orange-500">
                                different domains.
                            </span>

                        </h1>


                        {/* =================================================
                            DESCRIPTION
                        ================================================== */}

                        <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">

                            From low-level systems programming and CLI tools
                            to AI/ML applications and full-stack software,
                            these projects represent different parts of my
                            software engineering journey.

                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CATEGORY FILTER
            ====================================================== */}

            <section className="border-b border-zinc-200 dark:border-white/10">

                <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

                    <div className="flex gap-2 overflow-x-auto py-5 scrollbar-none">

                        {categories.map((category) => {

                            const isActive =
                                activeCategory === category;


                            return (

                                <button
                                    key={category}
                                    type="button"
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                    className={`relative shrink-0 px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors ${isActive
                                            ? "text-orange-500"
                                            : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-300"
                                        }`}
                                >

                                    {category}


                                    {isActive && (

                                        <span className="absolute bottom-0 left-3 right-3 h-px bg-orange-500" />

                                    )}

                                </button>

                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                PROJECT LIST
            ====================================================== */}

            <section>

                <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

                    {visibleProjects.map((project, index) => (

                        <ProjectShowcase
                            key={project.id}
                            project={project}
                            index={index}
                        />

                    ))}


                    {/* =================================================
                        EMPTY STATE
                    ================================================== */}

                    {visibleProjects.length === 0 && (

                        <div className="border-t border-zinc-200 py-24 text-center dark:border-white/10">

                            <p className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-600">
                                No projects found in this category.
                            </p>

                        </div>

                    )}

                </div>

            </section>


        </main>

    );
};


export default Projects;