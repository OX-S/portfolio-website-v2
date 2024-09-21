// src/content/jobs.js

import techCompanyLogo from "../assets/paycom.png";
// import startupIncLogo from "../assets/startup-inc.png";
import placeholderLogo from "../assets/placeholder.png"; // Optional

const jobs = [
    {
        title: "Software Developer",
        company: "Tech Company",
        duration: "Jan 2020 - Present",
        description:
            "Worked on developing scalable web applications, collaborating with cross-functional teams to deliver high-quality software solutions.",
        logo: techCompanyLogo, // Optional
    },
    {
        title: "VC Analyst",
        company: "Venture Capital Firm",
        duration: "Jan 2017 - Feb 2018",
        description:
            "Analyzed startup opportunities, conducted due diligence, and assisted in investment decisions to support emerging businesses in the technology space.",
        // No logo provided for this job
    },
    // Add more job objects as needed
];

export default jobs;
