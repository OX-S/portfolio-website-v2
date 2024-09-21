// src/context/ContentContext.js

import React, { createContext } from "react";
import jobs from "../content/jobs";
import projects from "../content/projects";
import siteContent from "../content/siteContent";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
    const content = {
        jobs,
        projects,
        siteContent,
    };

    return (
        <ContentContext.Provider value={content}>
            {children}
        </ContentContext.Provider>
    );
};
