// src/content/contactInfo.js

import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const contactInfo = [
    {
        id: 1,
        href: "mailto:finn.kliewer@gmail.com",
        icon: <FaEnvelope size={24} />,
        label: "Email",
        text: "finn.kliewer@gmail.com",
    },
    {
        id: 2,
        href: "tel:+12017472660",
        icon: <FaPhone size={24} />,
        label: "Phone",
        text: "+1 (201) 747-2660",
    },
    {
        id: 3,
        href: "https://linkedin.com/in/finn-kliewer-82346a227",
        icon: <FaLinkedin size={24} />,
        label: "LinkedIn",
        text: "LinkedIn",
    },
    {
        id: 4,
        href: "https://github.com/OX-S",
        icon: <FaGithub size={24} />,
        label: "GitHub",
        text: "GitHub",
    },
];

export default contactInfo;
