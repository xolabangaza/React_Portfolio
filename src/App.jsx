import React from 'react';
import {Navbar} from './components/Navbar';
import {Hero} from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import { About } from './components/About';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />
        <ProjectsSection/>
        <About/>
      </div>
    </div>
  );
}

export default App;
