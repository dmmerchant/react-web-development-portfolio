import React from 'react';
import Project from '../../AppSpecific/Project'
import {projects} from '../../../data/projects'
import './Main.css';
export default function Main() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="main">
            <section id="AboutMe">
                <h2>About Me</h2>
                <article>
                    <p>I am currently a programmer for Hitachi Cable America. Throughout my ten years with the company, I have built several applications that have assisted the company with daily functions.</p>
                </article>
            </section>
            <section id="MyWork">
                <h2>Work</h2>
                <article className="container">
                    {projects.map((project) => (
                        <Project object={project} key={project.id} />
                    ))}
                </article>
            </section>
        </div>
    );
}