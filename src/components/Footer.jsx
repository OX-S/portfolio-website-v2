// src/components/Footer.js
import React from "react";

import siteContent from "../content/siteContent";
import { ReactComponent as EmailIcon} from "../assets/icons/email.svg";
import { ReactComponent as PhoneIcon} from "../assets/icons/phone-call.svg";


function Footer() {
    return (
        <footer className="bg-base-300">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold">{siteContent.navbar.brand}</h2>
                    </div>

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

                <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a
                            href="mailto:finn.kliewer@gmail.com"
                            className="hover:text-white transition-colors duration-300 flex items-center"
                            aria-label="Email"
                        >
                            <EmailIcon className={"h-6 w-6 mr-2"} />
                            finn.kliewer@gmail.com
                        </a>
                        <a
                            href="tel:+12017472660"
                            className="hover:text-white transition-colors duration-300 flex items-center"
                            aria-label="Phone"
                        >
                            <PhoneIcon className={'mr-2 h-6 w-6 '}/>
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
