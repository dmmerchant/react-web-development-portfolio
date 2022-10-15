import React from 'react';
import './Card.css';
export default function Card(
    {
        object,
        onMouseOver = false,
        onMouseDown = false
    }) {
    const onHover = onMouseOver ? onMouseOver : () => { };
    const onClick = onMouseDown ? onMouseDown : () => { };

    return (
        <div className='card' href={object.link} target="_blank" onMouseOver={onHover} onMouseDown={onClick}>
            <img src={object.image} alt={`Example: ${object.name}`} />
            <figcaption className="info">
                <p>{object.name}</p>
                <p>{object.tags}</p>
            </figcaption>
        </div>
    );
}
