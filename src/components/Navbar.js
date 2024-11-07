// src/components/Navbar.js

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import siteContent from "../content/siteContent";
import { ThemeContext } from '../context/ThemeContext';


function Navbar() {
    const { brand, links } = siteContent.navbar;
    const { theme, toggleTheme } = useContext(ThemeContext);

    const prefetch = (link) => {
        if (link.component && link.component.preload) {
            link.component.preload()
                .then(() => {
                    console.log(`${link.name} component prefetched`);
                })
                .catch(err => {
                    console.error(`Error prefetching ${link.name}:`, err);
                });
        }
    };



    return (
        <div className="navbar bg-base-100 px-4">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    {brand}
                </Link>
            </div>
            <div className="flex items-center space-x-6">
                <div className="hidden lg:flex space-x-4">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="btn btn-ghost"
                            onMouseEnter={() => prefetch(link)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                {/* Theme Toggle using daisyUI's swap component */}
                <label className="grid cursor-pointer place-items-center">
                    <input
                        type="checkbox"
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                    onChange={toggleTheme}
                        checked={theme === "dark"}
                        aria-label="Toggle Dark/Light Theme"
                    />

                    <svg
                        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"/>
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
        </div>
    );
}

export default Navbar;
