// src/pages/Home.js

import React from "react";
import headshot from "../assets/headshot.png"; // Ensure your headshot image is placed correctly
import siteContent from "../content/siteContent"; // Import centralized site content

function Home() {
    const { heading, subheading, resumeLink } = siteContent.home;

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4">
            {/* Headshot */}
            <div className="avatar">
                <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={headshot} alt="Headshot" />
                </div>
            </div>

            {/* Text Content */}
            <div className="mt-6 lg:mt-0 lg:ml-10 text-center lg:text-left">
                <h1 className="text-5xl font-bold">{heading}</h1>
                <p className="py-6">{subheading}</p>

                {/* Download Resume Button */}
                <a
                    href={resumeLink}
                    download
                    className="btn btn-primary border-2 border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-300"
                    aria-label="Download my resume"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
}

export default Home;
