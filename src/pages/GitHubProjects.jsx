import React, { useEffect, useState } from 'react';
import { ReactComponent as GitCode } from "../assets/icons/git-code.svg";
import { ReactComponent as GitStar } from '../assets/icons/git-star.svg';
import { ReactComponent as GitFork } from '../assets/icons/git-fork.svg';
import Slider from "react-slick";

import GitHubProjectsHeading from "../components/headers/GitHubProjectsHeading";

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

    // Hard-coded hero projects with custom layout
    const heroProjects = [
        {
            id: 1,
            name: 'Hero Project One',
            description: 'A standout project featuring custom design and functionality.',
            url: 'https://example.com/hero1'
        },
        {
            id: 2,
            name: 'Hero Project Two',
            description: 'Another exemplary project that showcases unique features.',
            url: 'https://example.com/hero2'
        },
        {
            id: 3,
            name: 'Hero Project Three',
            description: 'An innovative project with a custom hero layout.',
            url: 'https://example.com/hero3'
        },
    ];
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,            // Show pagination dots
        infinite: true,        // Enables infinite looping
        speed: 500,            // Transition speed in ms
        slidesToShow: 1,       // How many slides to show at once
        slidesToScroll: 1,     // How many slides to scroll on each transition
        arrows: false,
        autoplay: true,
        autoplaySpeed: 20000,
        lazyLoad: true,
        cssEase: "ease-out",
    };

    return (
        <div className="min-h-screen p-4 max-w-[75%] mx-auto">
            <GitHubProjectsHeading/>
            <div className="relative mb-8 fade-edges">
                <Slider {...settings}>
                    {heroProjects.map((project) => (
                        <div key={project.id} className="px-3">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
                                <p className="mb-4">{project.description}</p>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Learn More
                                </a>
                            </div>
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
                            <p className="flex-grow mt-2 text-gray-500">{project.description}</p>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex space-x-4">
                                    <div className="flex items-center space-x-1">
                                        <GitStar className="h-5 w-5 fill-current"/>
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
    );
}

export default GitHubProjects;
