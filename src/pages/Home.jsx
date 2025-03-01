import React, {useContext, useEffect, useRef, useState} from 'react';
import headshot from "../assets/headshot.webp";
import NET from 'vanta/dist/vanta.net.min';
import {ThemeContext} from "../context/ThemeContext";


const Home = () => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const vantaRef = useRef(null)
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const backgroundColor = theme === 'light' ? 0xe8e8e8 : 0x1f2937;
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
                        href={`${process.env.PUBLIC_URL}/assets/resume.pdf`} // Ensure the path is correct
                        target="_blank"
                        rel="noopener noreferrer"
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

