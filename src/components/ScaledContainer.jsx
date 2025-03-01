import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const ScaledContainer = ({ children }) => {
    // Consider devices with a min-width of 768px as tablet/laptop/desktop
    const isTabletOrLarger = useMediaQuery({ query: '(min-width: 768px)' });
    const [scaleFactor, setScaleFactor] = useState(1);

    useEffect(() => {
        if (isTabletOrLarger) {
            // Calculate scale factor based on current window width vs. the desired 1920px width
            const factor = window.innerWidth / 1920;
            setScaleFactor(factor);
        } else {
            setScaleFactor(1);
        }
    }, [isTabletOrLarger]);

    if (!isTabletOrLarger) {
        // For mobile devices, render content normally
        return <>{children}</>;
    }

    return (
        <div className="overflow-auto">
            <div

            >
                {children}
            </div>
        </div>
    );
};

export default ScaledContainer;
