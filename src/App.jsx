import React from "react";
import { Hero } from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { ContactSection } from "./components/Contact";
import { Footer } from "./components/Footer";
import StarryBackground from "./components/StarryBackground";
// At the top of your App.jsx
import { Navbar } from './components/Navbar'; // Adjust the path based on where your Navbar file is located

import './index.css';

function App() {
  return (
    <StarryBackground>
      <div>
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </StarryBackground>
  );
}

export default App;
