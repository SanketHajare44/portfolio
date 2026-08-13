import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


const Work = () => {
    return (
        <main className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white">

            {/* =====================================================
                HEADER
            ====================================================== */}

            <section className="border-b border-zinc-200 dark:border-white/10">

                <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">

                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                        ____ WORK
                    </p>


                    <h1
                        className="mt-7 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-zinc-900 sm:text-5xl dark:text-zinc-100 lg:text-6xl"
                        style={{
                            textShadow:
                                "0 0 20px rgba(249, 115, 22, 0.10)",
                        }}
                    >
                        Building software with
                        <br />

                        <span className="text-orange-500">
                            curiosity and purpose.
                        </span>
                    </h1>


                    <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
                        I'm interested in software engineering roles where
                        I can work on real systems, solve meaningful
                        problems, and continue growing as an engineer.
                    </p>

                </div>

            </section>


            {/* =====================================================
                CURRENT STATUS
            ====================================================== */}

            <section className="border-b border-zinc-200 dark:border-white/10">

                <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">

                    <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr]">

                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                            ____ CURRENT STATUS
                        </p>


                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-2 w-2 rounded-full bg-orange-500" />

                                <span className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
                                    Open to opportunities
                                </span>

                            </div>


                            <h2
                                className="mt-6 text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100"
                                style={{
                                    textShadow:
                                        "0 0 15px rgba(249, 115, 22, 0.08)",
                                }}
                            >
                                Looking for my first software engineering role.
                            </h2>


                            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                I'm looking for an entry-level opportunity
                                where I can contribute to production
                                software, learn from experienced engineers,
                                and build strong foundations in software
                                engineering.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                AREAS I'M INTERESTED IN
            ====================================================== */}

            <section className="border-b border-zinc-200 dark:border-white/10">

                <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">

                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                        ____ AREAS I'M INTERESTED IN
                    </p>


                    <div className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-white/10 dark:border-white/10">


                        {/* =================================================
                            BACKEND
                        ================================================== */}

                        <div className="grid gap-5 py-7 sm:grid-cols-[180px_1fr]">

                            <div className="flex items-start gap-4">

                                <span className="font-mono text-xs text-orange-500">
                                    01
                                </span>

                                <h3 className="font-medium text-zinc-900 dark:text-zinc-200">
                                    Backend
                                </h3>

                            </div>


                            <p className="max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-500">
                                Java, Spring Boot, REST APIs, Node.js,
                                Express, databases, authentication, and
                                scalable backend services.
                            </p>

                        </div>


                        {/* =================================================
                            FULL STACK
                        ================================================== */}

                        <div className="grid gap-5 py-7 sm:grid-cols-[180px_1fr]">

                            <div className="flex items-start gap-4">

                                <span className="font-mono text-xs text-orange-500">
                                    02
                                </span>

                                <h3 className="font-medium text-zinc-900 dark:text-zinc-200">
                                    Full Stack
                                </h3>

                            </div>


                            <p className="max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-500">
                                React, JavaScript, MongoDB, Socket.IO,
                                and building complete applications
                                from frontend to backend.
                            </p>

                        </div>


                        {/* =================================================
                            SYSTEMS
                        ================================================== */}

                        <div className="grid gap-5 py-7 sm:grid-cols-[180px_1fr]">

                            <div className="flex items-start gap-4">

                                <span className="font-mono text-xs text-orange-500">
                                    03
                                </span>

                                <h3 className="font-medium text-zinc-900 dark:text-zinc-200">
                                    Systems
                                </h3>

                            </div>


                            <p className="max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-500">
                                C, C++, Linux system programming,
                                operating-system concepts, file systems,
                                processes, and low-level software.
                            </p>

                        </div>


                        {/* =================================================
                            AI / ML
                        ================================================== */}

                        <div className="grid gap-5 py-7 sm:grid-cols-[180px_1fr]">

                            <div className="flex items-start gap-4">

                                <span className="font-mono text-xs text-orange-500">
                                    04
                                </span>

                                <h3 className="font-medium text-zinc-900 dark:text-zinc-200">
                                    AI / ML
                                </h3>

                            </div>


                            <p className="max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-500">
                                Python, machine learning, computer vision,
                                RAG systems, LLM applications, and
                                intelligent software.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHAT I BRING
            ====================================================== */}

            <section className="border-b border-zinc-200 dark:border-white/10">

                <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">

                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                        ____ WHAT I BRING
                    </p>


                    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">


                        {/* PROBLEM SOLVING */}

                        <div className="border-l border-orange-500/60 pl-5">

                            <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-200">
                                Problem solving
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-500">
                                I enjoy breaking complex problems into
                                smaller, understandable pieces.
                            </p>

                        </div>


                        {/* SYSTEM THINKING */}

                        <div className="border-l border-zinc-300 pl-5 dark:border-white/10">

                            <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-200">
                                System thinking
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-500">
                                I like understanding how components,
                                processes, APIs, and data work together.
                            </p>

                        </div>


                        {/* CONTINUOUS LEARNING */}

                        <div className="border-l border-zinc-300 pl-5 dark:border-white/10">

                            <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-200">
                                Continuous learning
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-500">
                                I continuously build projects and strengthen
                                my fundamentals through hands-on practice.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}

            <section>

                <div className="mx-auto max-w-6xl px-6 py-28 text-center sm:px-8 lg:px-10 lg:py-36">

                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                        ____ LET'S CONNECT
                    </p>


                    <h2
                        className="mt-6 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100 lg:text-5xl"
                        style={{
                            textShadow:
                                "0 0 18px rgba(249, 115, 22, 0.10)",
                        }}
                    >
                        Have an opportunity?
                    </h2>


                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-500">
                        I'm always interested in discussing software,
                        engineering opportunities, and challenging problems.
                    </p>


                    <div className="mt-8">

                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-2 rounded-md border border-orange-500/50 px-5 py-2.5 text-sm text-orange-500 transition-colors hover:bg-orange-500/10 hover:text-orange-400"
                        >

                            Get in touch

                            <ArrowUpRight
                                size={15}
                                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />

                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
};


export default Work;