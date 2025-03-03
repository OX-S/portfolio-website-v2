import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import siteContent from "../content/siteContent";
import { ThemeContext } from '../context/ThemeContext';
import { ReactComponent as DarkThemeIcon } from '../assets/icons/dark-theme.svg';
import { ReactComponent as LightThemeIcon } from '../assets/icons/light-theme.svg';

function Navbar() {
    const { brand, links } = siteContent.navbar;
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            {/* Desktop Brand */}
            <div className="absolute top-0 left-0 mt-4 ml-4 hidden lg:block">
                <span className="text-lg font-semibold">{brand}</span>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="absolute top-0 left-0 mt-4 ml-4 lg:hidden">
                <label
                    tabIndex="0"
                    className="btn btn-ghost swap swap-rotate"
                >
                    <input
                        type="checkbox"
                        checked={isMobileMenuOpen}
                        onChange={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="hidden"
                    />
                    {/* Hamburger Icon */}
                    <svg
                        className="swap-off h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* Close Icon */}
                    <svg
                        className="swap-on h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </label>
            </div>

            {/* Centered Links (Desktop) */}
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

            {/* Theme Toggle (Right Side) */}
            <div className="absolute top-0 right-0 mt-4 mr-4">
                <label className="grid cursor-pointer place-items-center">
                    <input
                        type="checkbox"
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                        aria-label="Toggle Dark/Light Theme"
                    />
                    <LightThemeIcon className="stroke-base-100 fill-base-100 col-start-1 row-start-1" />
                    <DarkThemeIcon className="stroke-base-100 fill-base-100 col-start-2 row-start-1" />
                </label>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 top-full w-52 mt-2 bg-base-100 shadow rounded-box z-50 lg:hidden">
                    <ul className="menu p-2">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
