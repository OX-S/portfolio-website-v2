// src/pages/GitHubProjects.js

import React, { useEffect, useState } from 'react';
import gitCode from '../assets/icons/git-code.svg';
import gitStar from '../assets/icons/git-star.svg';
import gitFork from '../assets/icons/git-fork.svg';

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

    return (
        <div className="min-h-screen p-4 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">GitHub Projects</h2>
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
                            <p className="flex-grow mt-2 text-gray-700">{project.description}</p>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex space-x-4">
                                    <div className="flex items-center space-x-1">
                                        <img src={gitStar} alt="Stars" className="h-5 w-5" />
                                        <span>{project.stars}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <img src={gitFork} alt="Forks" className="h-5 w-5" />
                                        <span>{project.forks}</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <img src={gitCode} alt="Language"  className="h-5 w-5 fill-current text-black dark:text-white" />
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
//     return (
//         <div className="min-h-screen p-4 max-w-6xl mx-auto">
//             <h2 className="text-4xl font-bold mb-8 text-center">GitHub Projects</h2>
//             <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//                 {repoProjects.map((project, index) => (
//                     <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl hover:bg-base-300 hover:scale-105 transition-all duration-300">
//                         <div className="card-body flex flex-col">
//                             <h3 className="card-title text-2xl font-semibold">
//                                 <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
//                                     {project.name}
//                                 </a>
//                             </h3>
//                             <p className="flex-grow mt-2 text-gray-700">{project.description}</p>
//                             <div className="mt-4 flex items-center justify-between">
//                                 <div className="flex space-x-4">
//                                     <div className="flex items-center space-x-1">
//                                         {/*<StarIcon className="h-5 w-5 text-yellow-500" />*/}
//                                         <span>{project.stars}</span>
//                                     </div>
//                                     <div className="flex items-center space-x-1">
//                                         {/*<ForkIcon className="h-5 w-5 text-gray-500" />*/}
//                                         <span>{project.forks}</span>
//                                     </div>
//                                 </div>
//                                 <span className="badge badge-outline">{project.language}</span>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

export default GitHubProjects;
