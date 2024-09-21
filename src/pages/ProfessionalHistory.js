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
                <title>Professional History - [Your Name]</title>
                <meta
                    name="description"
                    content="Explore the professional journey of [Your Name], including roles as a Software Developer, Entrepreneur, and VC Analyst."
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
                            className="card bg-base-200 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full"
                        >
                            {/* Card Body */}
                            <div className="card-body flex flex-row items-center">
                                {/* Logo Section */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={job.logo || placeholderLogo}
                                        alt={`${job.company} logo`}
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="ml-6">
                                    <h3 className="text-xl font-semibold">
                                        {job.title} at {job.company}
                                    </h3>
                                    <p className="text-sm text-gray-500">{job.duration}</p>
                                    <hr className="my-2 border-gray-300" />
                                    <p className="text-base">{job.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProfessionalHistory;
