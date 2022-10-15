import React from 'react';
import AboutMe from '../AboutMe';
import Project from '../Project';
import './Hero.css';

export default function Hero({hero , project}) {
  return (
    <div>
      {(hero === "AboutMe" || !project) ? (
        <AboutMe />
      ) : (
        // If we are logged out, render this:
        <Project project={project}/>
      )}
    </div>
  );
}
