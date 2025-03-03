import React, {useContext, useEffect, useRef, useState} from 'react';
import NET from 'vanta/dist/vanta.net.min';
import {ThemeContext} from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiPython, SiTensorflow, SiScikitlearn, SiTableau, SiReact } from "react-icons/si";
import headshotImage from '../assets/headshot.webp';
import siteContent from "../content/siteContent";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        { icon: <SiPython />, name: "Python" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiScikitlearn />, name: "Scikit-learn" },
        { icon: <SiTableau />, name: "Tableau" },
        { icon: <SiReact />, name: "ReactJS" }
    ];

    useEffect(() => {
        const backgroundColor = theme === 'light' ? 0xe8e8e8 : 0x1b2431;
        const color = theme === 'light' ? 0x6366f1 : 0x8b5cf6;

        const initVanta = () => {
            return NET({
                el: vantaRef.current,
                backgroundColor: backgroundColor,
                color: color,
                points: 12.0,
                maxDistance: 20.0,
                spacing: 15.0,
            });
        };

        if (!vantaEffect) {
            const effect = initVanta();
            setVantaEffect(effect);
        } else {
            vantaEffect.destroy();
            const effect = initVanta();
            setVantaEffect(effect);
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [theme]);

    return (
        <div className="vanta-container min-h-screen w-full" ref={vantaRef}>
            <div className="backdrop-blur-sm min-h-screen w-full">
                <div className="container mx-auto px-4 py-16">
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex flex-col lg:flex-row items-center justify-end gap-12">
                            <div className="flex-shrink-0">
                                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-1 shadow-2xl">
                                    <img
                                        src={headshotImage}
                                        alt="Profile Picture"
                                        className="w-full h-full rounded-full"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="text-center lg:text-left w-full lg:w-1/2">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">{siteContent.name}</h1>
                                <h2 className="text-2xl md:text-3xl mb-6">Data Scientist & ML Engineer</h2>
                                <p className="text-lg mb-8">
                                    Passionate about transforming complex data into actionable insights. Specializing in
                                    machine learning, statistical analysis, and predictive modeling.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                    <button
                                        className="flex items-center btn btn-primary btn-wide border-2 border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-300"
                                        onClick={() => window.open('Finn_Kliewer_Resume.pdf', '_blank')}
                                        aria-label="Download Resume">
                                        <FaDownload className="mr-2"/>Download Resume
                                    </button>
                                    <a
                                        href={siteContent.gitHubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary border-2 border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-300"
                                        aria-label="GitHub Profile">
                                        <FaGithub size={24}/>
                                    </a>
                                    <a
                                        href={siteContent.linkedinLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary border-2 border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-300"
                                        aria-label="LinkedIn Profile">
                                        <FaLinkedin size={24}/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="backdrop-blur-lg bg-black/10 dark:bg-white/10 rounded-xl p-8 my-16 w-full lg:w-3/4 mx-auto">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                                Technical Skills
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center p-4 bg-white/80 dark:bg-white/5 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-colors duration-300"
                                    >
                                        <div className="text-3xl mb-2 text-gray-900 dark:text-white">
                                            {skill.icon}
                                        </div>
                                        <span className="text-gray-900 dark:text-white">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
