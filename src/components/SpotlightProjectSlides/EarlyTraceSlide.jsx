import React from 'react';
import { ReactComponent as Trophy } from '../../assets/icons/trophy.svg';
import ClassificationFlow from "../ClassificationFlow";

const EarlyTraceSlide = () => {
    return (
        <div className="px-3">
            <div className="bg-base-100 p-6 my-6 rounded-xl shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between items-start">
                    {/* Left Column */}
                    <div className="w-full md:w-1/2 pr-0 md:pr-4">
                        <div className="flex items-center mb-2">
                            <Trophy className="w-8 h-8 mr-1 "
                                    style={{stroke: 'gold'}}/>
                            <span className="font-bold text-xl">
                                Runner-Up at Spring 2025 Rutgers Hackathon
                              </span>
                        </div>
                        <div className="text-left">
                            <h2 className="text-6xl font-bold mb-2 sm:mb-3">
                                EarlyTrace.ai
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
                                AI agent that can predict dementia in text samples.
                            </p>
                            <p className="text-xs sm:text-sm md:text-base lg:text-md mb-2 sm:mb-3 text-gray-600 dark:text-gray-400">
                                Inspired by a 2023 study, we developed an AI model that analyzes personal writings to
                                detect dementia.
                                By collecting 1.4 million tokens from blogs of individuals with and without dementia, we
                                trained the model using the
                                BGE-large-en-v1.5 transformer for sentence embeddings and XGBoost for classification.
                                The model achieved an F1 score
                                of 0.95 in detecting dementia-related text patterns.
                            </p>
                        </div>


                        <div className="mt-8 text-center ">
                            <a
                                href="https://github.com/OX-S/early-trace"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-md text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 transform hover:scale-105"
                            >
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.42-1.304.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.921.432.37.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                          clipRule="evenodd"/>
                                </svg>
                                See on GitHub
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex md:w-2/6 justify-center items-center my-6 md:my-0">
                        <ClassificationFlow className={"self-center"}/>
                    </div>

                    <div
                        className="hidden md:flex md:w-1/6 pl-2 mr-2 flex-shrink-0 min-w-[200px] justify-center items-center self-center">
                        <div className="stats stats-vertical">
                            <div className="stat">
                                <div className="stat-title">Posts Used</div>
                                <div className="stat-value">5K+</div>
                                <div className="stat-desc">Text Samples</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title">F1 Score</div>
                                <div className="stat-value">0.95</div>
                                <div className="stat-desc">Total Support: 606</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title">Response Time</div>
                                <div className="stat-value">&lt;1s</div>
                                <div className="stat-desc">Real-Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EarlyTraceSlide;
