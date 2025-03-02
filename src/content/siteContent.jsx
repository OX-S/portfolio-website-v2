// src/content/siteContent.js
import {lazyWithPreload} from "../utils/lazyWithPreload";

const siteContent = {
    name: "Finn Kliewer",
    gitHubLink: "https://github.com/OX-S",
    linkedinLink: "https://www.linkedin.com/in/finnkliewer/",
    home: {
        heading: "Hello, I'm Finn",
        subheading:
            "I'm a software developer and entrepreneur working in venture capital on the side.",
        resumeLink: "/resume.pdf",
    },
    navbar: {
        brand: "Finn Kliewer",
        links: [
            {
                name: "Home",
                path: "/",
                component:  lazyWithPreload(() => import(/* webpackPrefetch: true */ '../pages/Home')),
            },
            {
                name: "Professional History",
                path: "/professional-history",
                component:  lazyWithPreload(() => import(/* webpackPrefetch: true */ '../pages/ProfessionalHistory')),
            },
            {
                name: "GitHub Projects",
                path: "/github-projects",
                component:  lazyWithPreload(() => import(/* webpackPrefetch: true */ '../pages/GitHubProjects')),
            },
            {
                name: "Contact",
                path: "/contact",
                component:  lazyWithPreload(() => import(/* webpackPrefetch: true */ '../pages/Contact')),
            },
        ],
    },
};

export default siteContent;
