// src/content/siteContent.js

const siteContent = {
    home: {
        heading: "Hello, I'm Finn",
        subheading:
            "I'm a software developer and entrepreneur working in venture capital on the side.",
        resumeLink: "/resume.pdf", // Path to resume in the public folder
    },
    navbar: {
        brand: "Finn Kliewer",
        links: [
            { name: "Home", path: "/" },
            { name: "Professional History", path: "/professional-history" },
            { name: "GitHub Projects", path: "/github-projects" },
            { name: "Contact", path: "/contact" },
        ],
    },
    // Add more site-wide content as needed
};

export default siteContent;
