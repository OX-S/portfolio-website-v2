import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export const ThemeProvider = ({
    children
}) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {

        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
            document.getElementById("root-theme")?.setAttribute("data-theme", storedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initialTheme = prefersDark ? "dark" : "light";
            setTheme(initialTheme);
            document.getElementById("root-theme")?.setAttribute("data-theme", initialTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.getElementById("root-theme")?.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
