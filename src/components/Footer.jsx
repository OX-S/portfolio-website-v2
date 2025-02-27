// src/components/Footer.js
import React from "react";

import siteContent from "../content/siteContent";

function Footer() {
    return (
        <footer className="bg-base-300">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Top Section: Branding and Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Site Branding */}
                    <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold">{siteContent.navbar.brand}</h2>
                        {/* Optional: Add a logo image instead of text */}
                        {/* <img src="/path-to-logo.png" alt="Logo" className="h-10" /> */}
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-6">
                        {siteContent.navbar.links.map((link) => (
                                    <a
                                key={link.name}
                                href={link.path}
                                className="hover:text-white transition-colors duration-300"
                                aria-label={link.name}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Middle Section: Social Media Icons */}
                <div className="mt-8 flex justify-center space-x-6">
                    <a
                        href="https://twitter.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="Twitter"
                    >
                        {/*<FaXTwitter size={20} />*/}
                    </a>
                    <a
                        href="https://www.instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        {/*<FaInstagram size={20} />*/}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        {/*<FaLinkedinIn size={20} />*/}
                    </a>
                    <a
                        href="https://github.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        {/*TODO add back React icons as they load too slow*/}
                        {/*<FaGithub size={20} />*/}
                    </a>
                </div>

                {/* Bottom Section: Contact Information and Copyright */}
                <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
                    {/* Contact Information */}
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a
                            href="mailto:finn.kliewer@gmail.com"
                            className="hover:text-white transition-colors duration-300 flex items-center"
                            aria-label="Email"
                        >
                            {/* Email SVG Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline-block mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 12h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h2m4-4v4m0 0l-4-4m4 4l4-4"
                                />
                            </svg>
                            finn.kliewer@gmail.com
                        </a>
                        <a
                            href="tel:+12017472660"
                            className="hover:text-white transition-colors duration-300 flex items-center"
                            aria-label="Phone"
                        >
                            {/* Phone SVG Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline-block mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5h2l3.29 7.38a2 2 0 001.94 1.22h.5a2 2 0 001.94-1.22L14 5h2M7 5v2a2 2 0 002 2h4a2 2 0 002-2V5m-6 0a2 2 0 110 4 2 2 0 010-4z"
                                />
                            </svg>
                            +1 (201) 747-2660
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Finn Kliewer. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
