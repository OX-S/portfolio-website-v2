// LinkedInBadge.jsx
import React, { useEffect } from 'react';

const LinkedInBadge = () => {
    useEffect(() => {

        const existingScript = document.getElementById('linkedin-profile-script');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://platform.linkedin.com/badges/js/profile.js';
            script.async = true;
            script.defer = true;
            script.type = 'text/javascript';
            script.id = 'linkedin-profile-script';
            document.body.appendChild(script);

            // Cleanup
            return () => {
                document.body.removeChild(script);
            };
        }
    }, []);

    return (
        <div>
            <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme="dark"
                data-type="VERTICAL"
                data-vanity="finnkliewer"
                data-version="v1"
            >
                <a
                    className="badge-base__link LI-simple-link"
                    href="https://www.linkedin.com/in/finnkliewer?trk=profile-badge"
                />
            </div>
        </div>

    );
};

export default LinkedInBadge;
