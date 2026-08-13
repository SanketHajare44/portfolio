import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
    ArrowUpRight,
    Menu,
    Moon,
    Search,
    Sun,
    X,
} from "lucide-react";

import CommandPalette from "../ui/CommandPalette";
import { useTheme } from "../../context/ThemeContext";


// ============================================================
// NAVIGATION ITEMS
// ============================================================

const navigationItems = [
    {
        number: "01",
        label: "Projects",
        path: "/projects",
    },
    {
        number: "02",
        label: "Work",
        path: "/work",
    },
    {
        number: "03",
        label: "About",
        path: "/about",
    },
    {
        number: "04",
        label: "Resume",
        path: "/resume",
    },
];


// ============================================================
// NAVBAR
// ============================================================

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCommandOpen, setIsCommandOpen] = useState(false);

    const { theme, toggleTheme } = useTheme();


    // ============================================================
    // MOBILE MENU
    // ============================================================

    const handleMenuToggle = () => {
        setIsMenuOpen((previousState) => !previousState);
    };


    const handleNavigation = () => {
        setIsMenuOpen(false);
    };


    // ============================================================
    // SEARCH
    // ============================================================

    const handleSearchOpen = () => {
        setIsCommandOpen(true);
        setIsMenuOpen(false);
    };


    const handleCommandClose = () => {
        setIsCommandOpen(false);
    };


    const handleCommandToggle = () => {
        setIsCommandOpen(
            (previousState) => !previousState
        );
    };


    // ============================================================
    // THEME
    // ============================================================

    const handleThemeToggle = () => {
        toggleTheme();
    };


    return (
        <>
            {/* =====================================================
                NAVBAR
            ====================================================== */}

            <header
                className="
                    sticky
                    top-0
                    z-50
                    border-b
                    border-zinc-200
                    bg-white/95
                    backdrop-blur-md
                    dark:border-white/10
                    dark:bg-black/95
                "
            >

                <nav
                    className="
                        mx-auto
                        flex
                        h-16
                        max-w-6xl
                        items-center
                        justify-between
                        px-6
                        sm:px-8
                        lg:px-10
                    "
                >

                    {/* =================================================
                        LOGO
                    ================================================== */}

                    <NavLink
                        to="/"
                        onClick={handleNavigation}
                        className="
                            font-mono
                            text-sm
                            font-medium
                            tracking-tight
                            text-zinc-800
                            transition-colors
                            hover:text-orange-500
                            dark:text-zinc-200
                            dark:hover:text-orange-400
                        "
                    >
                        sanket.hajare
                    </NavLink>


                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================== */}

                    <div className="hidden items-center md:flex">

                        {navigationItems.map((item) => (

                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={handleNavigation}
                                className={({ isActive }) => `
                                    group
                                    relative
                                    flex
                                    items-center
                                    gap-2
                                    px-4
                                    py-2
                                    font-mono
                                    text-[11px]
                                    font-medium
                                    tracking-wide
                                    transition-colors
                                    ${isActive
                                        ? "text-zinc-900 dark:text-zinc-100"
                                        : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300"
                                    }
                                `}
                            >

                                {({ isActive }) => (

                                    <>
                                        {/* Number */}

                                        <span
                                            className={
                                                isActive
                                                    ? "font-semibold text-orange-500"
                                                    : "text-zinc-400 dark:text-zinc-700"
                                            }
                                        >
                                            {item.number}
                                        </span>


                                        {/* Label */}

                                        <span>
                                            {item.label}
                                        </span>


                                        {/* Active underline */}

                                        {isActive && (

                                            <span
                                                className="
                                                    absolute
                                                    bottom-0
                                                    left-4
                                                    right-4
                                                    h-px
                                                    bg-orange-500
                                                "
                                            />

                                        )}

                                    </>

                                )}

                            </NavLink>

                        ))}

                    </div>


                    {/* =================================================
                        DESKTOP ACTIONS
                    ================================================== */}

                    <div className="hidden items-center gap-5 lg:flex">


                        {/* =================================================
                            SEARCH
                        ================================================== */}

                        <button
                            type="button"
                            onClick={handleSearchOpen}
                            aria-label="Open search"
                            className="
                                flex
                                h-8
                                w-40
                                items-center
                                justify-between
                                rounded-md
                                border
                                border-zinc-300/70
                                bg-white/20
                                px-3
                                font-mono
                                text-[10px]
                                font-medium
                                text-zinc-500
                                transition-colors
                                hover:border-orange-500/30
                                hover:text-zinc-800
                                dark:border-white/10
                                dark:bg-white/[0.02]
                                dark:text-zinc-500
                                dark:hover:border-white/20
                                dark:hover:text-zinc-300
                            "
                        >

                            <span className="flex items-center gap-2">

                                <Search size={13} />

                                <span>
                                    Search
                                </span>

                            </span>


                            <kbd
                                className="
                                    rounded
                                    border
                                    border-zinc-200
                                    px-1.5
                                    py-0.5
                                    font-mono
                                    text-[8px]
                                    text-zinc-400
                                    dark:border-white/10
                                    dark:text-zinc-600
                                "
                            >
                                Ctrl K
                            </kbd>

                        </button>


                        {/* =================================================
                            GET IN TOUCH
                        ================================================== */}

                        <NavLink
                            to="/contact"
                            onClick={handleNavigation}
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                rounded-md
                                border
                                border-orange-500/60
                                bg-orange-500/5
                                px-3.5
                                py-2
                                font-mono
                                text-[10px]
                                font-medium
                                tracking-wide
                                text-orange-500
                                shadow-[0_0_12px_rgba(249,115,22,0.08)]
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:border-orange-400
                                hover:bg-orange-500/10
                                hover:text-orange-400
                                hover:shadow-[0_0_18px_rgba(249,115,22,0.18)]
                                dark:border-orange-500/60
                                dark:bg-orange-500/5
                                dark:text-orange-400
                                dark:hover:border-orange-400
                                dark:hover:bg-orange-500/10
                                dark:hover:text-orange-300
                            "
                        >

                            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                                Get in touch
                            </span>

                            <ArrowUpRight
                                size={12}
                                strokeWidth={1.8}
                                className="
                                    transition-transform
                                    duration-200
                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                "
                            />

                        </NavLink>


                        {/* =================================================
                            THEME TOGGLE
                        ================================================== */}

                        <button
                            type="button"
                            onClick={handleThemeToggle}
                            aria-label={
                                theme === "dark"
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                            title={
                                theme === "dark"
                                    ? "Light mode"
                                    : "Dark mode"
                            }
                            className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-md
                                border
                                border-zinc-200/70
                                bg-white/20
                                text-zinc-500
                                transition-colors
                                hover:border-orange-500/40
                                hover:text-orange-500
                                dark:border-white/10
                                dark:bg-white/[0.02]
                                dark:text-zinc-500
                                dark:hover:text-orange-400
                            "
                        >

                            {theme === "dark" ? (

                                <Sun
                                    size={14}
                                    strokeWidth={1.7}
                                />

                            ) : (

                                <Moon
                                    size={14}
                                    strokeWidth={1.7}
                                />

                            )}

                        </button>

                    </div>


                    {/* =================================================
                        MOBILE ACTIONS
                    ================================================== */}

                    <div className="flex items-center gap-2 md:hidden">


                        {/* Theme */}

                        <button
                            type="button"
                            onClick={handleThemeToggle}
                            aria-label={
                                theme === "dark"
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-md
                                border
                                border-zinc-200/70
                                bg-white/20
                                text-zinc-500
                                transition-colors
                                hover:border-orange-500/40
                                hover:text-orange-500
                                dark:border-white/10
                                dark:bg-white/[0.02]
                                dark:text-zinc-400
                                dark:hover:text-orange-400
                            "
                        >

                            {theme === "dark" ? (
                                <Sun size={17} />
                            ) : (
                                <Moon size={17} />
                            )}

                        </button>


                        {/* Menu */}

                        <button
                            type="button"
                            onClick={handleMenuToggle}
                            aria-label={
                                isMenuOpen
                                    ? "Close menu"
                                    : "Open menu"
                            }
                            aria-expanded={isMenuOpen}
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-md
                                border
                                border-zinc-200/70
                                bg-white/20
                                text-zinc-600
                                transition-colors
                                hover:text-orange-500
                                dark:border-white/10
                                dark:bg-white/[0.02]
                                dark:text-zinc-400
                                dark:hover:text-white
                            "
                        >

                            {isMenuOpen ? (
                                <X size={18} />
                            ) : (
                                <Menu size={18} />
                            )}

                        </button>

                    </div>

                </nav>


                {/* =====================================================
                    MOBILE NAVIGATION
                ====================================================== */}

                {isMenuOpen && (

                    <div
                        className="
                            border-t
                            border-zinc-200/70
                            bg-white/80
                            px-6
                            py-5
                            backdrop-blur-md
                            dark:border-white/10
                            dark:bg-black/80
                            md:hidden
                        "
                    >

                        <div className="mx-auto max-w-6xl">

                            <div className="flex flex-col">

                                {navigationItems.map((item) => (

                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={handleNavigation}
                                        className={({ isActive }) => `
                                            flex
                                            items-center
                                            gap-3
                                            border-b
                                            border-zinc-200/70
                                            py-4
                                            font-mono
                                            text-sm
                                            font-medium
                                            transition-colors
                                            dark:border-white/5
                                            ${isActive
                                                ? "text-orange-500"
                                                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200"
                                            }
                                        `}
                                    >

                                        <span className="text-xs text-zinc-400 dark:text-zinc-700">
                                            {item.number}
                                        </span>

                                        <span>
                                            {item.label}
                                        </span>

                                    </NavLink>

                                ))}


                                {/* =================================================
                                    MOBILE GET IN TOUCH
                                ================================================== */}

                                <NavLink
                                    to="/contact"
                                    onClick={handleNavigation}
                                    className="
                                        group
                                        mt-5
                                        inline-flex
                                        w-fit
                                        items-center
                                        gap-2
                                        rounded-md
                                        border
                                        border-orange-500/60
                                        bg-orange-500/5
                                        px-4
                                        py-2.5
                                        font-mono
                                        text-xs
                                        font-medium
                                        tracking-wide
                                        text-orange-500
                                        shadow-[0_0_12px_rgba(249,115,22,0.08)]
                                        transition-all
                                        duration-200
                                        hover:-translate-y-0.5
                                        hover:border-orange-400
                                        hover:bg-orange-500/10
                                        hover:text-orange-400
                                        hover:shadow-[0_0_18px_rgba(249,115,22,0.18)]
                                        dark:border-orange-500/60
                                        dark:bg-orange-500/5
                                        dark:text-orange-400
                                        dark:hover:border-orange-400
                                        dark:hover:bg-orange-500/10
                                        dark:hover:text-orange-300
                                    "
                                >

                                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                                        Get in touch
                                    </span>

                                    <ArrowUpRight
                                        size={14}
                                        strokeWidth={1.8}
                                        className="
                                            transition-transform
                                            duration-200
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                        "
                                    />

                                </NavLink>


                                {/* =================================================
                                    SEARCH
                                ================================================== */}

                                <button
                                    type="button"
                                    onClick={handleSearchOpen}
                                    className="
                                        mt-6
                                        flex
                                        items-center
                                        gap-3
                                        border-t
                                        border-zinc-200
                                        pt-5
                                        text-left
                                        font-mono
                                        text-sm
                                        font-medium
                                        text-zinc-500
                                        transition-colors
                                        hover:text-orange-500
                                        dark:border-white/10
                                        dark:text-zinc-500
                                        dark:hover:text-orange-400
                                    "
                                >

                                    <Search size={16} />

                                    Search

                                </button>

                            </div>

                        </div>

                    </div>

                )}

            </header>


            {/* =====================================================
                COMMAND PALETTE
            ====================================================== */}

            <CommandPalette
                isOpen={isCommandOpen}
                onClose={handleCommandClose}
                onToggle={handleCommandToggle}
            />

        </>
    );
};


export default Navbar;