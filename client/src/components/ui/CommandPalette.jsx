import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import projects from "../../content/projects";


// ================================================================
// NAVIGATION
// ================================================================

const navigationItems = [
    {
        id: "home",
        label: "Home",
        path: "/",
        category: "GO TO",
        type: "navigation",
    },
    {
        id: "work",
        label: "Work",
        path: "/work",
        category: "GO TO",
        type: "navigation",
    },
    {
        id: "projects",
        label: "Projects",
        path: "/projects",
        category: "GO TO",
        type: "navigation",
    },
    {
        id: "about",
        label: "About",
        path: "/about",
        category: "GO TO",
        type: "navigation",
    },
    {
        id: "blog",
        label: "Blog",
        path: "/blog",
        category: "GO TO",
        type: "navigation",
    },
    {
        id: "resume",
        label: "Resume",
        path: "/resume",
        category: "GO TO",
        type: "navigation",
    },
    {
        id: "contact",
        label: "Contact",
        path: "/contact",
        category: "GO TO",
        type: "navigation",
    },
];


// ================================================================
// EXTERNAL PROFILES
// ================================================================

const profileItems = [
    {
        id: "leetcode",
        label: "LeetCode",
        url: "https://leetcode.com/",
        category: "COMPETITIVE PROGRAMMING",
        type: "external",
    },
    {
        id: "hackerrank",
        label: "HackerRank",
        url: "https://www.hackerrank.com/",
        category: "COMPETITIVE PROGRAMMING",
        type: "external",
    },
    {
        id: "github",
        label: "GitHub",
        url: "https://github.com/",
        category: "LINKS",
        type: "external",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        url: "https://www.linkedin.com/",
        category: "LINKS",
        type: "external",
    },
];


// ================================================================
// COMPONENT
// ================================================================

const CommandPalette = ({
    isOpen,
    onClose,
    onToggle,
}) => {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);


    // ============================================================
    // PROJECTS
    // ============================================================

    const projectItems = useMemo(() => {
        return projects
            .filter((project) => project.visible)
            .sort((a, b) => a.order - b.order)
            .map((project) => ({
                id: project.id,
                label: project.title,
                category: "PROJECTS",
                projectCategory: project.category,
                type: "project",
                path: `/projects/${project.slug}`,
            }));
    }, []);


    // ============================================================
    // ALL COMMANDS
    // ============================================================

    const commandItems = useMemo(() => {
        return [
            ...navigationItems,
            ...projectItems,
            ...profileItems,
        ];
    }, [projectItems]);


    // ============================================================
    // FILTER
    // ============================================================

    const filteredItems = useMemo(() => {
        const query = searchQuery
            .trim()
            .toLowerCase();

        if (!query) {
            return commandItems;
        }

        return commandItems.filter((item) => {
            return (
                item.label
                    .toLowerCase()
                    .includes(query) ||
                item.category
                    ?.toLowerCase()
                    .includes(query) ||
                item.projectCategory
                    ?.toLowerCase()
                    .includes(query)
            );
        });
    }, [commandItems, searchQuery]);


    // ============================================================
    // RESET SELECTED INDEX
    // ============================================================

    useEffect(() => {
        setSelectedIndex(0);
    }, [searchQuery]);


    // ============================================================
    // KEYBOARD SHORTCUT
    // ============================================================

    useEffect(() => {
        const handleKeyDown = (event) => {

            // Ctrl + K / Cmd + K

            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {
                event.preventDefault();

                if (typeof onToggle === "function") {
                    onToggle();
                }

                return;
            }


            // Escape

            if (event.key === "Escape") {
                event.preventDefault();

                if (typeof onClose === "function") {
                    onClose();
                }
            }
        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [onToggle, onClose]);


    // ============================================================
    // RESET WHEN CLOSED
    // ============================================================

    useEffect(() => {
        if (!isOpen) {
            setSearchQuery("");
            setSelectedIndex(0);
        }
    }, [isOpen]);


    // ============================================================
    // EXECUTE COMMAND
    // ============================================================

    const handleCommand = (item) => {

        // External link

        if (item.type === "external") {
            window.open(
                item.url,
                "_blank",
                "noopener,noreferrer"
            );

            if (typeof onClose === "function") {
                onClose();
            }

            return;
        }


        // Internal route

        navigate(item.path);

        if (typeof onClose === "function") {
            onClose();
        }
    };


    // ============================================================
    // KEYBOARD NAVIGATION
    // ============================================================

    const handleResultKeyDown = (event) => {

        // Arrow Down

        if (event.key === "ArrowDown") {
            event.preventDefault();

            setSelectedIndex((previousIndex) => {

                if (filteredItems.length === 0) {
                    return 0;
                }

                return Math.min(
                    previousIndex + 1,
                    filteredItems.length - 1
                );
            });

            return;
        }


        // Arrow Up

        if (event.key === "ArrowUp") {
            event.preventDefault();

            setSelectedIndex((previousIndex) =>
                Math.max(
                    previousIndex - 1,
                    0
                )
            );

            return;
        }


        // Enter

        if (
            event.key === "Enter" &&
            filteredItems.length > 0
        ) {
            event.preventDefault();

            handleCommand(
                filteredItems[selectedIndex]
            );
        }
    };


    // ============================================================
    // GROUP COMMANDS
    // ============================================================

    const groupedItems = useMemo(() => {

        const groups = {};

        filteredItems.forEach((item) => {

            if (!groups[item.category]) {
                groups[item.category] = [];
            }

            groups[item.category].push(item);
        });

        return groups;

    }, [filteredItems]);


    // ============================================================
    // DON'T RENDER WHEN CLOSED
    // ============================================================

    if (!isOpen) {
        return null;
    }


    // ============================================================
    // GLOBAL INDEX
    // ============================================================

    let commandIndex = 0;


    // ============================================================
    // UI
    // ============================================================

    return (
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm sm:pt-[15vh]"
            onMouseDown={(event) => {

                if (
                    event.target ===
                    event.currentTarget
                ) {
                    if (
                        typeof onClose ===
                        "function"
                    ) {
                        onClose();
                    }
                }
            }}
        >

            {/* =================================================
                PALETTE
            ================================================== */}

            <div
                className="w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50"
                onMouseDown={(event) =>
                    event.stopPropagation()
                }
                onKeyDown={handleResultKeyDown}
            >

                {/* =================================================
                    SEARCH INPUT
                ================================================== */}

                <div className="flex items-center gap-3 border-b border-white/10 px-4">

                    <Search
                        size={18}
                        className="shrink-0 text-zinc-500"
                    />

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(event) =>
                            setSearchQuery(
                                event.target.value
                            )
                        }
                        autoFocus
                        placeholder="Jump to a page, project, or action..."
                        className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
                    />

                    <kbd className="hidden shrink-0 rounded border border-white/10 px-2 py-1 text-[10px] text-zinc-500 sm:block">
                        ESC
                    </kbd>

                </div>{/* =================================================
                            RESULTS
                        ================================================== */}

                <div
                    data-lenis-prevent
                    className="max-h-[55vh] overflow-y-auto p-2"
                >
                    {filteredItems.length > 0 ? (

                        Object.entries(groupedItems).map(
                            ([category, items]) => (

                                <div
                                    key={category}
                                    className="mb-3 last:mb-0"
                                >

                                    {/* Category */}

                                    <p className="px-3 py-2 text-[10px] font-medium tracking-[0.2em] text-zinc-600">
                                        {category}
                                    </p>

                                    {/* Items */}

                                    {items.map((item) => {

                                        const itemIndex =
                                            commandIndex++;

                                        const isSelected =
                                            itemIndex === selectedIndex;

                                        return (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onMouseEnter={() =>
                                                    setSelectedIndex(
                                                        itemIndex
                                                    )
                                                }
                                                onClick={() =>
                                                    handleCommand(item)
                                                }
                                                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition ${isSelected
                                                    ? "bg-white/10 text-white"
                                                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                                    }`}
                                            >
                                                <div className="min-w-0">

                                                    <p className="truncate text-sm">
                                                        {item.label}
                                                    </p>

                                                    {item.type === "project" &&
                                                        item.projectCategory && (
                                                            <p className="mt-0.5 text-[10px] uppercase tracking-wider text-zinc-600">
                                                                {item.projectCategory}
                                                            </p>
                                                        )}

                                                </div>

                                                {isSelected && (
                                                    <span className="ml-4 shrink-0 text-xs text-zinc-600">
                                                        ↵
                                                    </span>
                                                )}
                                            </button>
                                        );
                                    })}

                                </div>
                            )
                        )

                    ) : (

                        <div className="px-3 py-10 text-center">

                            <p className="text-sm text-zinc-500">
                                No results found.
                            </p>

                            <p className="mt-2 text-xs text-zinc-700">
                                Try another search.
                            </p>

                        </div>

                    )}
                </div>


                {/* =================================================
                    KEYBOARD HINTS
                ================================================== */}

                <div className="hidden items-center gap-4 border-t border-white/10 px-4 py-2 text-[11px] text-zinc-600 sm:flex">

                    <span>
                        ↑ ↓ navigate
                    </span>

                    <span>
                        ↵ select
                    </span>

                    <span>
                        ESC close
                    </span>

                </div>

            </div>

        </div>
    );
};

export default CommandPalette;