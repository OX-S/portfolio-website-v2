import React from 'react';

const ArrowDownIcon = () => (
    <svg
        className="w-4 h-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const ClassificationFlow = () => {
    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="card bg-base-200 shadow-md w-full max-w-sm py-2 px-6 text-center">
                <h3 className="text-lg font-bold">Input Data</h3>
                <p className="text-xs light:text-gray-600 dark:text-gray-400">Raw blog posts or text samples</p>
            </div>

            <ArrowDownIcon />

            <div className="card bg-base-200 shadow-md w-full max-w-sm py-2 px-6 text-center">
                <h3 className="text-lg font-bold">BGE Hugging Face Transformer</h3>
                <p className="text-xs light:text-gray-600 dark:text-gray-400">
                    Generates 1024-d sentence embeddings efficiently
                </p>
            </div>

            <ArrowDownIcon />

            <div className="card bg-base-200 shadow-md w-full max-w-sm py-2 px-6 text-center">
                <h3 className="text-lg font-bold">XGBoost Classifier</h3>
                <p className="text-xs light:text-gray-600 dark:text-gray-400">
                    Classifies texts as "likely dementia" or "not likely dementia"
                </p>
            </div>

            <ArrowDownIcon />

            <div className="card bg-base-200 shadow-md w-full max-w-sm py-2 px-6 text-center">
                <h3 className="text-lg font-bold">Classification Output</h3>
                <p className="text-xs light:text-gray-600 dark:text-gray-400">
                    Final prediction: Likely Dementia or Not
                </p>
            </div>
        </div>
    );
};

export default ClassificationFlow;
