import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import profile from "../../content/profile";


const Footer = () => {

    return (

        <footer className="border-t border-zinc-200 bg-white text-zinc-900 dark:border-white/10 dark:bg-black dark:text-white">

            <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10">


                {/* =====================================================
                    TOP FOOTER
                ====================================================== */}

                <div className="grid gap-12 md:grid-cols-[1fr_auto]">


                    {/* =================================================
                        BRAND
                    ================================================== */}

                    <div>

                        <Link
                            to="/"
                            className="font-mono text-sm font-medium tracking-tight text-zinc-800 transition-colors hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-400"
                        >
                            sanket.hajare
                        </Link>


                        <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-500">
                            Computer Engineering graduate building
                            software across systems, backend,
                            full-stack applications, and AI/ML.
                        </p>


                        <p className="mt-4 font-mono text-xs text-zinc-500 dark:text-zinc-600">
                            Pune, India
                        </p>

                    </div>


                    {/* =================================================
                        LINKS
                    ================================================== */}

                    <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">


                        {/* =================================================
                            NAVIGATION
                        ================================================== */}

                        <div>

                            <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                                ____ NAVIGATE
                            </p>


                            <div className="flex flex-col gap-3">

                                <Link
                                    to="/projects"
                                    className="text-sm text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                                >
                                    Projects
                                </Link>


                                <Link
                                    to="/about"
                                    className="text-sm text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                                >
                                    About
                                </Link>


                                <Link
                                    to="/resume"
                                    className="text-sm text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                                >
                                    Resume
                                </Link>


                                <Link
                                    to="/contact"
                                    className="text-sm text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                                >
                                    Get in touch
                                </Link>

                            </div>

                        </div>


                        {/* =================================================
                            PROFILES
                        ================================================== */}

                        <div>

                            <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                                ____ PROFILES
                            </p>


                            <div className="flex flex-col gap-3">


                                {/* GitHub */}

                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                                >

                                    GitHub

                                    <ArrowUpRight
                                        size={12}
                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />

                                </a>


                                {/* LinkedIn */}

                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                                >

                                    LinkedIn

                                    <ArrowUpRight
                                        size={12}
                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />

                                </a>


                                {/* LeetCode */}

                                <a
                                    href={profile.leetcode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                                >

                                    LeetCode

                                    <ArrowUpRight
                                        size={12}
                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />

                                </a>


                                {/* HackerRank */}

                                <a
                                    href={profile.hackerrank}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                                >

                                    HackerRank

                                    <ArrowUpRight
                                        size={12}
                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />

                                </a>

                            </div>

                        </div>


                        {/* =================================================
                            CONTACT
                        ================================================== */}

                        <div>

                            <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                                ____ CONTACT
                            </p>


                            <a
                                href={`mailto:${profile.email}`}
                                className="group inline-flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                            >

                                Email

                                <ArrowUpRight
                                    size={12}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />

                            </a>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    DIVIDER
                ====================================================== */}

                <div className="my-10 h-px bg-zinc-200 dark:bg-white/10" />


                {/* =====================================================
                    BOTTOM FOOTER
                ====================================================== */}

                <div className="flex flex-col gap-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-600">

                    <p>
                        © 2026 Sanket Hajare
                    </p>


                    <p className="font-mono">
                        Built with React · Tailwind CSS
                    </p>


                    <p>
                        Designed & built from scratch.
                    </p>

                </div>

            </div>

        </footer>

    );
};


export default Footer;