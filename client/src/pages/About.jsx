import { ArrowUpRight } from "lucide-react";


const About = () => {

    const profileLabel =
        "font-mono text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400";


    const techCategory =
        "font-mono text-sm font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-300";


    const techBadge =
        "rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 font-mono text-xs font-medium text-zinc-700 transition-colors hover:border-orange-500/30 hover:text-orange-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:border-orange-500/30 dark:hover:text-orange-400";


    const headingGlow = {
        textShadow: "0 0 18px rgba(249, 115, 22, 0.12)",
    };


    return (
        <main className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white">

            {/* =====================================================
                ABOUT HERO
            ====================================================== */}

            <section className="border-b border-zinc-200 dark:border-white/10">

                <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">

                    {/* Section Label */}

                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                        ____ ABOUT
                    </p>


                    <div className="mt-12 grid gap-14 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">

                        {/* =================================================
                            LEFT — PROFILE
                        ================================================== */}

                        <div>

                            {/* Profile Image */}

                            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-zinc-950">

                                <img
                                    src="/devtinde.png"
                                    alt="Sanket Hajare"
                                    className="aspect-[4/5] w-full object-cover"
                                />

                            </div>


                            {/* Profile Information */}

                            <div className="mt-7 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-white/10 dark:border-white/10">

                                {/* BASED IN */}

                                <div className="flex items-center justify-between gap-6 py-4">

                                    <span className={profileLabel}>
                                        BASED IN
                                    </span>

                                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-300">
                                        Pune, India
                                    </span>

                                </div>


                                {/* STATUS */}

                                <div className="flex items-center justify-between gap-6 py-4">

                                    <span className={profileLabel}>
                                        STATUS
                                    </span>

                                    <span className="text-right text-sm font-medium text-zinc-800 dark:text-zinc-300">
                                        Computer Engineering Graduate
                                    </span>

                                </div>


                                {/* EDUCATION */}

                                <div className="flex items-center justify-between gap-6 py-4">

                                    <span className={profileLabel}>
                                        EDUCATION
                                    </span>

                                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-300">
                                        B.E. Computer Engineering
                                    </span>

                                </div>


                                {/* FOCUS */}

                                <div className="flex items-center justify-between gap-6 py-4">

                                    <span className={profileLabel}>
                                        FOCUS
                                    </span>

                                    <span className="text-right text-sm font-medium text-zinc-800 dark:text-zinc-300">
                                        Backend · Full Stack · Systems · AI/ML
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            RIGHT — INTRODUCTION
                        ================================================== */}

                        <div>

                            <h1
                                style={headingGlow}
                                className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.035em] text-zinc-900 sm:text-5xl dark:text-zinc-100"
                            >
                                I build software by understanding what happens underneath it.
                            </h1>


                            <div className="mt-9 max-w-2xl space-y-7 text-base leading-8 text-zinc-600 sm:text-lg dark:text-zinc-400">

                                <p>
                                    I'm a Computer Engineering graduate interested
                                    in backend development, systems programming,
                                    full-stack applications, and AI/ML.
                                </p>


                                <p>
                                    I enjoy going beyond just making an application
                                    work. I want to understand how the pieces
                                    communicate, how data moves through a system,
                                    how operating systems manage resources, and
                                    how software behaves under real conditions.
                                </p>


                                <p>
                                    My projects have taken me from
                                    <span className="text-orange-500 dark:text-orange-400">
                                        {" "}C and Linux system programming
                                    </span>
                                    {" "}to
                                    <span className="text-orange-500 dark:text-orange-400">
                                        {" "}Java and Spring Boot backend development
                                    </span>
                                    , MERN applications, real-time communication,
                                    and RAG/LLM-based systems.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CURRENTLY
            ====================================================== */}

            <section className="border-b border-zinc-200 dark:border-white/10">

                <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">

                    <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr]">

                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                            ____ CURRENTLY
                        </p>


                        <div>

                            <h2
                                style={headingGlow}
                                className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100"
                            >
                                Building. Learning. Preparing.
                            </h2>


                            <div className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-white/10 dark:border-white/10">

                                {/* ITEM 01 */}

                                <div className="flex gap-5 py-6">

                                    <span className="font-mono text-xs text-orange-500">
                                        01
                                    </span>

                                    <div>

                                        <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-200">
                                            Building software projects
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-500">
                                            Building practical backend, full-stack,
                                            systems, and AI-powered applications.
                                        </p>

                                    </div>

                                </div>


                                {/* ITEM 02 */}

                                <div className="flex gap-5 py-6">

                                    <span className="font-mono text-xs text-orange-500">
                                        02
                                    </span>

                                    <div>

                                        <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-200">
                                            Strengthening DSA
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-500">
                                            Improving problem solving, algorithms,
                                            data structures, and core programming.
                                        </p>

                                    </div>

                                </div>


                                {/* ITEM 03 */}

                                <div className="flex gap-5 py-6">

                                    <span className="font-mono text-xs text-orange-500">
                                        03
                                    </span>

                                    <div>

                                        <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-200">
                                            Learning software engineering
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-500">
                                            Exploring system design, APIs, databases,
                                            Linux, Git, and production-oriented practices.
                                        </p>

                                    </div>

                                </div>


                                {/* ITEM 04 */}

                                <div className="flex gap-5 py-6">

                                    <span className="font-mono text-xs text-orange-500">
                                        04
                                    </span>

                                    <div>

                                        <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-200">
                                            Looking for opportunities
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-500">
                                            Open to entry-level software engineering
                                            roles where I can learn, contribute, and grow.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHAT I WORK WITH
            ====================================================== */}

            <section className="border-b border-zinc-200 dark:border-white/10">

                <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">

                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                        ____ WHAT I WORK WITH
                    </p>


                    <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                        {/* SYSTEMS */}

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-5 bg-orange-500/70" />

                                <h3 className={techCategory}>
                                    SYSTEMS
                                </h3>

                            </div>


                            <div className="flex flex-wrap gap-2">

                                {[
                                    "C",
                                    "C++",
                                    "Linux",
                                    "System Programming",
                                    "OS Concepts",
                                ].map((item) => (

                                    <span
                                        key={item}
                                        className={techBadge}
                                    >
                                        {item}
                                    </span>

                                ))}

                            </div>

                        </div>


                        {/* BACKEND */}

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-5 bg-orange-500/70" />

                                <h3 className={techCategory}>
                                    BACKEND
                                </h3>

                            </div>


                            <div className="flex flex-wrap gap-2">

                                {[
                                    "Java",
                                    "Spring Boot",
                                    "REST APIs",
                                    "Node.js",
                                    "Express",
                                    "MongoDB",
                                ].map((item) => (

                                    <span
                                        key={item}
                                        className={techBadge}
                                    >
                                        {item}
                                    </span>

                                ))}

                            </div>

                        </div>


                        {/* FULL STACK */}

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-5 bg-orange-500/70" />

                                <h3 className={techCategory}>
                                    FULL STACK
                                </h3>

                            </div>


                            <div className="flex flex-wrap gap-2">

                                {[
                                    "React",
                                    "JavaScript",
                                    "Socket.IO",
                                    "HTML",
                                    "CSS",
                                    "Git",
                                ].map((item) => (

                                    <span
                                        key={item}
                                        className={techBadge}
                                    >
                                        {item}
                                    </span>

                                ))}

                            </div>

                        </div>


                        {/* AI / ML */}

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-5 bg-orange-500/70" />

                                <h3 className={techCategory}>
                                    AI / ML
                                </h3>

                            </div>


                            <div className="flex flex-wrap gap-2">

                                {[
                                    "Python",
                                    "NumPy",
                                    "Pandas",
                                    "Scikit-learn",
                                    "OpenCV",
                                    "RAG",
                                    "LLMs",
                                ].map((item) => (

                                    <span
                                        key={item}
                                        className={techBadge}
                                    >
                                        {item}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CONTACT CTA
            ====================================================== */}

            <section>

                <div className="mx-auto max-w-6xl px-6 py-28 text-center sm:px-8 lg:px-10 lg:py-36">

                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                        ____ LET'S CONNECT
                    </p>


                    <h2
                        style={headingGlow}
                        className="mx-auto mt-6 max-w-3xl text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100 lg:text-5xl"
                    >
                        Have something worth building?
                    </h2>


                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-500">
                        Open to entry-level software engineering
                        opportunities and challenging problems.
                    </p>


                    <div className="mt-8">

                        <a
                            href="/contact"
                            className="group inline-flex items-center gap-2 rounded-md border border-orange-500/50 px-5 py-2.5 text-sm text-orange-500 transition-colors hover:bg-orange-500/10 hover:text-orange-400"
                        >

                            Get in touch

                            <ArrowUpRight
                                size={15}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />

                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
};


export default About;