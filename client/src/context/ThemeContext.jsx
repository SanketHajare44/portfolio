import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";


const ThemeContext = createContext(null);


export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });


    useEffect(() => {

        document.documentElement.classList.remove(
            "dark",
            "light"
        );

        document.documentElement.classList.add(theme);

        localStorage.setItem("theme", theme);

    }, [theme]);


    const toggleTheme = () => {

        setTheme((currentTheme) =>
            currentTheme === "dark"
                ? "light"
                : "dark"
        );

    };


    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => {

    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );
    }

    return context;
};