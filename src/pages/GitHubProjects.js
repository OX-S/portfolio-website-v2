// src/pages/GitHubProjects.js

import React, { useEffect, useState } from "react";
import projects from "../content/projects"; // Import centralized projects data

function GitHubProjects() {
    // Assuming projects are fetched from centralized data, but you might still want to fetch additional data if needed
    const [repoProjects, setRepoProjects] = useState([]);

    useEffect(() => {
        // If you want to merge centralized projects with GitHub API data
        // For simplicity, we'll use centralized projects data here
        setRepoProjects(projects);
    }, []);

    return (
        <div className="min-h-screen p-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">GitHub Projects</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {repoProjects.map((project, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="card-title">{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="mt-4">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-primary mr-4"
                                >
                                    GitHub
                                </a>
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link link-primary"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GitHubProjects;
