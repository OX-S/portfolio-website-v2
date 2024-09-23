import React, {useEffect, useRef, useState} from 'react';
import headshot from "../assets/headshot.png";
import NET from 'vanta/dist/vanta.net.min';
import useScript from '../hooks/useScript';


const Home = () => {
    // useScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js');

    const [vantaEffect, setVantaEffect] = useState(null)
    const vantaRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: vantaRef.current,
                backgroundAlpha: 0
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])


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
