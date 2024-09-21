import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProfessionalHistory from "./pages/ProfessionalHistory";
import GitHubProjects from "./pages/GitHubProjects";

function App() {
    return (
        <Router>
            <div data-theme="light" id="root-theme">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/professional-history" element={<ProfessionalHistory />} />
                    <Route path="/github-projects" element={<GitHubProjects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
