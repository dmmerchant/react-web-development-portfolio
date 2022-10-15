import React from 'react';

export default function Project({project}) {
    return (
        <div className="container">
            <a href="" className="card" target="_blank">
                <img src={project.link} alt={`Example: ${project.name}`} />
                <figcaption className="info">
                    <p>{project.name}</p>
                    <p>{project.tags}</p>
                </figcaption>
            </a>
        </div>
    );
}