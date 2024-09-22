// src/pages/ProfessionalHistory.js

import React from "react";
import { Helmet } from "react-helmet";
import jobs from "../content/jobs"; // Import centralized jobs data
import placeholderLogo from "../assets/placeholder.png"; // Optional placeholder

function ProfessionalHistory() {
    return (
        <>
            {/* SEO Enhancements */}
            <Helmet>
                <title>Professional History - Finn Kliewer</title>
                <meta
                    name="description"
                    content="Explore the professional journey of Finn Kliewer, including roles as a Software Developer, Entrepreneur, and VC Analyst."
                />
            </Helmet>

            {/* Container */}
            <div className="min-h-screen p-4 max-w-4xl mx-auto">
                {/* Page Header */}
                <h2 className="text-3xl font-bold mb-6">Professional History</h2>

                {/* Jobs List */}
                <div className="space-y-6">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="collapse collapse-arrow border border-base-300 bg-base-200 rounded-lg"
                            tabIndex={0} // Make the collapse focusable
                        >
                            {/* Collapse Title: Header Section */}
                            <div className="collapse-title flex items-center space-x-4">
                                {/* Logo Section */}
                                <img
                                    src={job.logo || placeholderLogo}
                                    alt={`${job.company} logo`}
                                    className="w-16 h-16 object-contain"
                                />

                                {/* Text Section */}
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {job.title} at {job.company}
                                    </h3>
                                    <p className="text-sm text-gray-500">{job.duration}</p>
                                </div>
                            </div>

                            {/* Collapse Content: Description Section */}
                            <div className="collapse-content">
                                <hr className="my-2 border-gray-300" />
                                <p className="text-base">{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProfessionalHistory;
