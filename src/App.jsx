import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import { About } from "./components/About";
import { ContactSection } from "./components/Contact";
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* For full-page navigation */}
        <Route path="/hero" element={<Hero />} />
        <Route path="/Projects" element={<ProjectsSection />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactSection" element={<ContactSection />} />

      </Routes>
    
      <div id="hero">
        <Hero />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="ContactSection">
        <ContactSection />
      </div>
    </Router>
  );
}

export default App;
