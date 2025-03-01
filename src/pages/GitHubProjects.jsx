import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import { ReactComponent as GitCode } from "../assets/icons/git-code.svg";
import { ReactComponent as GitStar } from '../assets/icons/git-star.svg';
import { ReactComponent as GitFork } from '../assets/icons/git-fork.svg';
import Slider from "react-slick";

import GitHubProjectsHeading from "../components/headers/GitHubProjectsHeading";
import EarlyTraceSlide from "../components/SpotlightProjectSlides/EarlyTraceSlide";
import MandelbrotSlide from "../components/SpotlightProjectSlides/MandelbrotSlide";
import {RefCallback} from "react";

function GitHubProjects() {
    const [repoProjects, setRepoProjects] = useState([]);

    useEffect(() => {
        fetch('/api/repos')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setRepoProjects(data))
            .catch((error) => console.error('Error fetching repo data:', error));
    }, []);

    const slideRefs = useRef([]);
    const [maxHeight, setMaxHeight] = useState(0);
    const observerRef = useRef(null);

    const slides = [
        <EarlyTraceSlide key={1} />,
        <MandelbrotSlide key={2} />,
        <EarlyTraceSlide key={3} />,
    ];

    useEffect(() => {
        observerRef.current = new ResizeObserver(entries => {
            const heights = entries.map(entry => {
                const contentDiv = entry.target.querySelector('.bg-base-100');
                return contentDiv ? contentDiv.offsetHeight + 32 : 0; // Add padding compensation
            });
            setMaxHeight(Math.max(...heights));
        });

        return () => observerRef.current?.disconnect();
    }, []);

    useEffect(() => {
        slideRefs.current.forEach(ref => {
            if (ref) observerRef.current.observe(ref);
        });
    }, [slides]);


    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 20000,
        lazyLoad: true,
        cssEase: "ease-out",
    };

    const [scaleFactor, setScaleFactor] = useState(1);
    const baseWidth = 1920; // Reference width

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            const scale = Math.min(currentWidth / baseWidth, 1); // Never scale beyond 100%
            setScaleFactor(scale);
        };

        // Initial calculation
        handleResize();

        // Add resize listener
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <div style={{
            transform: `scale(${scaleFactor})`,
            transformOrigin: 'top left',
            width: `${baseWidth}px`,
            height: 'auto', // Or specific height if needed
            position: 'relative',
            margin: '0 auto',
            overflow: 'hidden'
        }}>
            <div style={{
                width: `${baseWidth}px`,
                transformOrigin: 'top left',
                position: 'relative'
            }}>

            <div className="min-h-screen p-4 mx-auto w-3/4"
            >
                <GitHubProjectsHeading/>
                <div className="relative mb-8 fade-edges" >
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                ref={el => slideRefs.current[index] = el}
                                className="transition-all duration-300"
                                style={{
                                    minHeight: maxHeight > 0 ? `${maxHeight}px` : 'auto',
                                    padding: '0.75rem' // Match your px-3 class
                                }}
                            >
                                {React.cloneElement(slide, {
                                    className: `${slide.props.className || ''} h-full`
                                })}
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* All Projects Grid */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {repoProjects.map((project, index) => (
                        <div
                            key={index}
                            className="card bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                        >
                            <div className="card-body flex flex-col">
                                <h3 className="card-title text-2xl font-semibold">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {project.name}
                                    </a>
                                </h3>
                                <p className="flex-grow mt-2 light:text-gray-600 dark:text-gray-400">{project.description}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex space-x-4">
                                        <div className="flex items-center space-x-1">
                                            <GitStar className="h-5 w-5 stoke-current"/>
                                            <span>{project.stars}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <GitFork className="h-5 w-5 fill-current"/>
                                            <span>{project.forks}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <GitCode className="h-5 w-5 fill-current"/>
                                        <span>{project.language}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
}

export default GitHubProjects;
