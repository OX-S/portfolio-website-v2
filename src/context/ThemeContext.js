import React, { createContext, useState, useEffect } from 'react';

// Default theme is light
export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {

        // Check localStorage for saved theme
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
            document.getElementById("root-theme")?.setAttribute("data-theme", storedTheme);
        } else {
            // If none, use system theme
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
        localStorage.setItem("theme", newTheme); // Save theme to localStorage
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
