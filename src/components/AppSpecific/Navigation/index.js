import React from 'react';
import './Navigation.css';
export default function Navigation() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="nav">
            <ul>
                <li><a href="#AboutMe">About Me</a></li>
                <li><a href="#MyWork">Work</a></li>
                <li><a href="#ContactMe">Contact Me</a></li>
                <li><a href="">Resume</a></li>
            </ul>
        </div>
    );
}
