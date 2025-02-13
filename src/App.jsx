import React from 'react';
import {Navbar} from './components/Navbar';
import {Hero} from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />
        <ProjectsSection/>
      </div>
    </div>
  );
}

export default App;
