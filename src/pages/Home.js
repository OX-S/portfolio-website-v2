import React, { useEffect, useRef } from 'react';
import headshot from "../assets/headshot.png";

const Home = () => {
    const vantaRef = useRef(null);

    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => resolve();
                script.onerror = () => reject();
                document.body.appendChild(script);
            });
        };

        const initVanta = async () => {
            try {
                await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js');
                await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');

                if (window.VANTA) {
                    window.VANTA.NET({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                    });
                }
            } catch (error) {
                console.error('Failed to load scripts:', error);
            }
        };

        initVanta();

        return () => {
            if (vantaRef.current && window.VANTA) {
                window.VANTA.NET().destroy(); // Cleanup the Vanta effect when the component is unmounted
            }
        };
    }, []);

    return (
        <div className="vanta-container" ref={vantaRef} style={{ height: '100vh', width: '100%' }}>
            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4">
                <div className="avatar">
                    <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={headshot} alt="Headshot" />
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:ml-10 text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Hello, I'm Finn Kliewer</h1>
                    <p className="py-6">
                        I'm a software developer and entrepreneur working in venture capital on the side.
                    </p>
                    <a
                        href={`${process.env.PUBLIC_URL}../assets/resume.pdf`} without rel="noopener noreferrer" // Ensure the path is correct. If using Create React App, place resume.pdf in the public/assets folder.
                        target="_blank"

                        className="btn btn-primary btn-wide border-2 border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-300"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;

// import React from "react";
//
// function Home() {
//     return (

//     );
// }
//
// export default Home;
