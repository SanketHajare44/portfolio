import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import profile from "../content/profile";

import {
    ArrowRight,
    Mail,
    MapPin,
} from "lucide-react";


const Contact = () => {

    const form = useRef();

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");


    // ============================================================
    // SEND EMAIL
    // ============================================================

    const handleSubmit = (event) => {

        event.preventDefault();

        setIsSending(true);
        setStatus("");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey:
                        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {

                    setIsSending(false);

                    setStatus(
                        "Message sent successfully. I'll get back to you soon."
                    );

                    form.current.reset();

                    setTimeout(() => {
                        setStatus("");
                    }, 4000);

                },
                (error) => {

                    console.error("EmailJS Error:", error);

                    setIsSending(false);

                    setStatus(
                        "Something went wrong. Please try again."
                    );

                }
            );
    };


    return (

        <main className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white">

            {/* =====================================================
                CONTACT
            ====================================================== */}

            <section>

                <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

                    {/* =================================================
                        SECTION NAME
                    ================================================== */}

                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                        ____ CONTACT
                    </p>


                    {/* =================================================
                        HEADING
                    ================================================== */}

                    <h1
                        className="mt-8 max-w-4xl text-5xl font-medium tracking-[-0.045em] text-zinc-900 sm:text-6xl dark:text-zinc-100 lg:text-7xl"
                        style={{
                            textShadow:
                                "0 0 20px rgba(249, 115, 22, 0.10)",
                        }}
                    >
                        Let's build something.
                    </h1>


                    {/* =================================================
                        MAIN CONTENT
                    ================================================== */}

                    <div className="mt-14 grid gap-16 lg:grid-cols-2">


                        {/* =================================================
                            LEFT SIDE
                        ================================================== */}

                        <div>

                            <p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
                                Open to entry-level software engineering
                                opportunities, interesting technical problems,
                                and projects worth building.
                            </p>


                            {/* =================================================
                                EMAIL
                            ================================================== */}

                            <a
                                href={`mailto:${profile.email}`}
                                className="group mt-10 flex w-fit items-center gap-3 text-lg text-zinc-800 transition-colors hover:text-orange-500 sm:text-xl dark:text-zinc-200 dark:hover:text-orange-400"
                            >

                                <Mail
                                    size={20}
                                    strokeWidth={1.6}
                                    className="text-orange-500"
                                />

                                <span>
                                    {profile.email}
                                </span>

                            </a>


                            {/* =================================================
                                SOCIAL LINKS
                            ================================================== */}

                            <div className="mt-8 space-y-5">

                                {/* GitHub */}

                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex w-fit items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                                >

                                    <span>
                                        GitHub
                                    </span>

                                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                                        ↗
                                    </span>

                                </a>


                                {/* LinkedIn */}

                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex w-fit items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
                                >

                                    <span>
                                        LinkedIn
                                    </span>

                                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                                        ↗
                                    </span>

                                </a>


                                {/* LOCATION */}

                                <div className="flex items-center gap-3 font-mono text-sm text-zinc-500">

                                    <MapPin
                                        size={17}
                                        strokeWidth={1.6}
                                        className="text-zinc-500 dark:text-zinc-500"
                                    />

                                    <span>
                                        Pune, Maharashtra, India
                                    </span>

                                </div>

                            </div>


                            {/* =================================================
                                CURRENT STATUS
                            ================================================== */}

                            <div className="mt-14 border-l border-orange-500/40 pl-4">

                                <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600">
                                    CURRENTLY
                                </p>

                                <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                    Looking for entry-level software
                                    engineering opportunities.
                                </p>

                            </div>

                        </div>


                        {/* =================================================
                            RIGHT SIDE — FORM
                        ================================================== */}

                        <div>

                            <form
                                ref={form}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >

                                {/* =================================================
                                    NAME
                                ================================================== */}

                                <div>

                                    <label
                                        htmlFor="name"
                                        className="mb-2 block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500"
                                    >
                                        NAME
                                    </label>


                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                        className="w-full rounded-md border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-orange-500/60 dark:border-white/20 dark:bg-white/[0.02] dark:text-zinc-200 dark:placeholder:text-zinc-600"
                                    />

                                </div>


                                {/* =================================================
                                    EMAIL
                                ================================================== */}

                                <div>

                                    <label
                                        htmlFor="email"
                                        className="mb-2 block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500"
                                    >
                                        EMAIL
                                    </label>


                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                        className="w-full rounded-md border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-orange-500/60 dark:border-white/20 dark:bg-white/[0.02] dark:text-zinc-200 dark:placeholder:text-zinc-600"
                                    />

                                </div>


                                {/* =================================================
                                    MESSAGE
                                ================================================== */}

                                <div>

                                    <label
                                        htmlFor="message"
                                        className="mb-2 block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500"
                                    >
                                        MESSAGE
                                    </label>


                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="7"
                                        placeholder="Tell me what you're building..."
                                        required
                                        className="w-full resize-none rounded-md border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm leading-6 text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-orange-500/60 dark:border-white/20 dark:bg-white/[0.02] dark:text-zinc-200 dark:placeholder:text-zinc-600"
                                    />

                                </div>


                                {/* =================================================
                                    SEND BUTTON
                                ================================================== */}

                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="group inline-flex items-center gap-3 rounded-md border border-orange-500/60 px-5 py-3 text-sm font-medium text-orange-500 transition-all duration-200 hover:border-orange-400 hover:bg-orange-500/10 hover:text-orange-400 disabled:cursor-not-allowed disabled:opacity-50 dark:text-zinc-200 dark:hover:text-white"
                                >

                                    <span>
                                        {isSending
                                            ? "Sending..."
                                            : "Send message"}
                                    </span>


                                    {!isSending && (

                                        <ArrowRight
                                            size={16}
                                            strokeWidth={1.8}
                                            className="transition-transform duration-200 group-hover:translate-x-1"
                                        />

                                    )}

                                </button>


                                {/* =================================================
                                    STATUS
                                ================================================== */}

                                {status && (

                                    <p
                                        className={`text-sm leading-6 ${status.includes("successfully")
                                            ? "text-green-500 dark:text-green-400"
                                            : "text-red-500 dark:text-red-400"
                                            }`}
                                    >
                                        {status}
                                    </p>

                                )}

                            </form>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};


export default Contact;