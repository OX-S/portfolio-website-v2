import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProfessionalHistory from "./pages/ProfessionalHistory";
import GitHubProjects from "./pages/GitHubProjects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import background from "./assets/background.webp"

function App() {


    return (
        <Router>
            <div  className={"bg-base-200"}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/professional-history" element={<ProfessionalHistory />} />
                    <Route path="/github-projects" element={<GitHubProjects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
