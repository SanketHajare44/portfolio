import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error(
            "ErrorBoundary caught an error:",
            error,
            errorInfo
        );
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <main
                    className="
                        flex
                        min-h-screen
                        items-center
                        justify-center
                        bg-white
                        px-6
                        text-zinc-900
                        dark:bg-black
                        dark:text-white
                    "
                >
                    <div
                        className="
                            w-full
                            max-w-lg
                            text-center
                        "
                    >

                        {/* ERROR LABEL */}

                        <p
                            className="
                                font-mono
                                text-[10px]
                                uppercase
                                tracking-[0.25em]
                                text-orange-500
                            "
                        >
                            ERROR 500
                        </p>


                        {/* HEADING */}

                        <h1
                            className="
                                mt-5
                                text-3xl
                                font-medium
                                tracking-tight
                                text-zinc-900
                                dark:text-zinc-100
                                sm:text-4xl
                            "
                        >
                            Something went wrong.
                        </h1>


                        {/* DESCRIPTION */}

                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-md
                                text-sm
                                leading-7
                                text-zinc-600
                                dark:text-zinc-500
                            "
                        >
                            An unexpected error occurred while
                            loading this page. You can try again
                            or return to the homepage.
                        </p>


                        {/* ACTIONS */}

                        <div
                            className="
                                mt-8
                                flex
                                flex-wrap
                                items-center
                                justify-center
                                gap-4
                            "
                        >

                            {/* TRY AGAIN */}

                            <button
                                type="button"
                                onClick={this.handleReload}
                                className="
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
                                Try again
                            </button>


                            {/* HOME */}

                            <Link
                                to="/"
                                className="
                                    rounded-md
                                    border
                                    border-zinc-200
                                    px-5
                                    py-2.5
                                    text-sm
                                    text-zinc-600
                                    transition-colors
                                    hover:border-zinc-400
                                    hover:text-zinc-900
                                    dark:border-white/10
                                    dark:text-zinc-400
                                    dark:hover:border-white/20
                                    dark:hover:text-white
                                "
                            >
                                Go home
                            </Link>

                        </div>

                    </div>
                </main>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;