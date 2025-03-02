// src/pages/ProfessionalHistory.js
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import jobs from "../content/jobs";
import placeholderLogo from "../assets/placeholder.png";
import ProfessionalHistoryHeading from "../components/headers/ProfessionalHistoryHeading";

function ProfessionalHistory() {
    const sortedJobs = jobs.sort((a, b) => {
        const [aMonth, aYear] = a.startDate.split("/").map(Number);
        const [bMonth, bYear] = b.startDate.split("/").map(Number);
        return bYear - aYear || bMonth - aMonth;
    });

    const initialVisibleCount = 2;

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,

            transition: {
                duration: 0.5,
                delay: i < initialVisibleCount ? i * 0.2 : (i - initialVisibleCount) * 0.2,
            }
        }),
    };

    return (
        <>
            <Helmet>
                <title>Professional History - Finn Kliewer</title>
                <meta
                    name="description"
                    content="Explore the professional journey of Finn Kliewer, including roles as a Software Developer, Entrepreneur, and VC Analyst."
                />
            </Helmet>

            <div className="min-h-screen p-4 max-w-[75%] mx-auto">
                <ProfessionalHistoryHeading />
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {sortedJobs.map((job, index) => {
                        const isEven = index % 2 === 0;
                        const contentClass = isEven
                            ? "timeline-start mb-10 md:text-end"
                            : "timeline-end mb-10 md:text-start";

                        return (
                            <motion.li
                                key={index}
                                className={!isEven ? "timeline-inverted" : ""}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={cardVariants}
                            >
                                <div className="timeline-middle mx-4">
                                    <div className="p-1 border-2 border-primary">
                                        <img
                                            src={job.logo || placeholderLogo}
                                            alt={`${job.company} logo`}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>
                                </div>
                                <div className={contentClass}>
                                    <time className="font-mono italic">{job.startDate}</time>
                                    <div className="mt-2">
                                        <h3 className="text-xl font-semibold">{job.title}</h3>
                                        <h4 className="text-lg font-medium text-gray-700">
                                            {job.company}
                                        </h4>
                                    </div>
                                    <p className="text-sm text-gray-500">{job.duration}</p>
                                    <p className="mt-2 text-base">{job.description}</p>
                                </div>
                                <hr />
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default ProfessionalHistory;
