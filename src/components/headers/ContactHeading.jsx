import React from 'react';
import '../../index.css';

const ContactHeading = () => {
    return (

    <div className="flex items-start justify-start mt-6">
        <div className="inline-block">
            <h1 className="text-3xl sm:text-6xl font-extrabold text-left drop-shadow-2xl">
                <span className="block font-extrabold drop-shadow-2xl">
                    Get In{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-shimmer">
                        Touch
                    </span>
                </span>
            </h1>
            <hr className="mt-6 border-t-4 border w-full mb-16"/>
        </div>
    </div>
    );
};

export default ContactHeading;
