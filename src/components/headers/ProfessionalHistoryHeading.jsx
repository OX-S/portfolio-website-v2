import React from 'react';
import '../../index.css';

const ProfessionalHistoryHeading = () => {
    return (
        <div className="flex items-start justify-start mt-6">
            <div className="inline-block">
                <h1 className="text-3xl sm:text-4xl xl:text-6xl font-extrabold text-left drop-shadow-2xl">
                    <span className="block font-extrabold drop-shadow-2xl">
                        Building the{' '}
                        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-shimmer">
                            Future
                        </span>
                        ,
                    </span>
                    <span className="block mt-2  text-3xl sm:text-4xl xl:text-6xl font-light">
                        One Line of Code at a Time
                    </span>
                </h1>
                <hr className="mt-6 border-t-4 border w-full mb-16"/>
            </div>
        </div>
    );
};

export default ProfessionalHistoryHeading;
