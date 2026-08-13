import { Download, ExternalLink } from "lucide-react";


const Resume = () => {

    return (

        <main className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white">


            {/* =====================================================
                RESUME HEADER
            ====================================================== */}

            <section className="border-b border-zinc-200 dark:border-white/10">

                <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">


                    {/* =================================================
                        SECTION NAME
                    ================================================== */}

                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                        ____ RESUME
                    </p>



                    <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">


                        {/* =================================================
                            RESUME INFORMATION
                        ================================================== */}

                        <div className="max-w-2xl">


                            <h1
                                className="text-4xl font-semibold tracking-[-0.035em] text-zinc-900 sm:text-5xl dark:text-zinc-100"
                                style={{
                                    textShadow:
                                        "0 0 18px rgba(249, 115, 22, 0.12)",
                                }}
                            >
                                Sanket Hajare
                            </h1>


                            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">
                                Computer Engineering graduate focused on
                                backend development, full-stack applications,
                                systems programming, and AI/ML.
                            </p>


                        </div>



                        {/* =================================================
                            PDF ACTIONS
                        ================================================== */}

                        <div className="flex flex-wrap items-center gap-6">


                            {/* =================================================
                                DOWNLOAD
                            ================================================== */}

                            <a
                                href="/Sanket_Hajare.pdf"
                                download="Sanket_Hajare.pdf"
                                className="inline-flex items-center gap-2 rounded-md border border-orange-500/50 px-4 py-2.5 text-sm font-medium text-orange-500 transition hover:border-orange-400 hover:bg-orange-500/10 hover:text-orange-400"
                            >

                                <Download size={15} />

                                Download PDF

                            </a>



                            {/* =================================================
                                OPEN
                            ================================================== */}

                            <a
                                href="/Sanket_Hajare.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                            >

                                Open in new tab

                                <ExternalLink
                                    size={14}
                                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />

                            </a>


                        </div>


                    </div>


                </div>

            </section>



            {/* =====================================================
                RESUME PREVIEW
            ====================================================== */}

            <section>

                <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">


                    {/* =================================================
                        RESUME WINDOW
                    ================================================== */}

                    <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-2xl dark:border-white/10 dark:bg-zinc-950">


                        {/* =================================================
                            TOP BAR
                        ================================================== */}

                        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-white/10">


                            {/* Window Controls */}

                            <div className="flex items-center gap-2">

                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />

                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />

                                <span className="h-2.5 w-2.5 rounded-full bg-orange-500/70" />

                            </div>


                            {/* File Name */}

                            <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-600">
                                Sanket_Hajare.pdf
                            </span>


                        </div>



                        {/* =================================================
                            ACTUAL RESUME IMAGE
                        ================================================== */}

                        <div className="bg-zinc-100 p-4 sm:p-6 dark:bg-zinc-900">


                            <img
                                src="/Sanket_Hajare.png"
                                alt="Sanket Hajare Resume Preview"
                                className="mx-auto h-auto w-full max-w-4xl rounded-sm bg-white shadow-xl"
                            />


                        </div>


                    </div>


                </div>

            </section>


        </main>

    );
};


export default Resume;