// src/components/Navbar.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import siteContent from "../content/siteContent"; // Import centralized site content

function Navbar() {
    const [theme, setTheme] = useState("light");
    const { brand, links } = siteContent.navbar;

    useEffect(() => {
        const root = document.documentElement;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = prefersDark ? "dark" : "light";
        setTheme(initialTheme);
        root.setAttribute("data-theme", initialTheme);
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        root.setAttribute("data-theme", newTheme);
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    {brand}
                </Link>
                {/* Navigation Links */}
                {links.map((link, index) => (
                    <Link key={index} to={link.path} className="btn btn-ghost">
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="flex-none">
                <button
                    className="btn btn-square btn-ghost"
                    onClick={toggleTheme}
                    aria-label="Toggle Dark/Light Theme"
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
            </div>
        </div>
    );
}

export default Navbar;
