// src/components/Navbar.js

import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import siteContent from "../content/siteContent";
import { ThemeContext } from '../context/ThemeContext';
import { ReactComponent as DarkThemeIcon } from '../assets/icons/dark-theme.svg';
import { ReactComponent as LightThemeIcon } from '../assets/icons/light-theme.svg';


function Navbar() {
    const { brand, links } = siteContent.navbar;
    const { theme, toggleTheme } = useContext(ThemeContext);

    const prefetch = (link) => {
        if (link.component && link.component.preload) {
            link.component.preload()
                .then(() => {
                    console.log(`${link.name} component prefetched`);
                })
                .catch((err) => {
                    console.error(`Error prefetching ${link.name}:`, err);
                });
        }
    };

    return (
        <div className="navbar bg-base-100 px-4 relative">
            <div className="absolute top-0 left-0 mt-4 ml-4">
                <span className="text-lg font-semibold">{brand}</span>

            </div>
            {/* Centered Navigation Items */}
            <div className="flex flex-1 justify-center items-center">
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
            </div>
            <div className="absolute top-0 right-0 mt-4 mr-4">
                <label className="grid cursor-pointer place-items-center">
                    <input
                        type="checkbox"
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                        aria-label="Toggle Dark/Light Theme"
                    />
                    <LightThemeIcon className="stroke-base-100 fill-base-100 col-start-1 row-start-1"/>
                    <DarkThemeIcon className="stroke-base-100 fill-base-100 col-start-2 row-start-1"/>
                </label>
            </div>
        </div>
    );
}

export default Navbar;