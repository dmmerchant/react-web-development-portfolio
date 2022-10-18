import React from 'react';
import imgGitHubLogo from '../../../assets/media/github.png'
import imgDeploy from '../../../assets/media/DeployIcon.png'
import './Project.css';
export default function Project({ object }) {

    return (
        <div className='card'>
            <div className="card_header">
                <img src={object.image} alt="card_image" className="card_image" />
            </div>
            <div className='card_body'>
                <div className='card_body_title'>
                    <div>
                        <h4>{object.name}</h4>
                        <div className='card_tags'>
                            {object.tags.map((element) => (
                                <span className={`tag ${element}`}>{element}</span>
                            ))}
                        </div>
                    </div>
                    <div className='card_nav'>
                        <a className='imgLink' href={object.urlGitHub} rel="noreferrer" target="_blank">
                            <img src={imgGitHubLogo} alt='github logo' height='40px'></img>
                        </a>
                        <a className='imgLink' href={object.urlDeploy} rel="noreferrer" target="_blank">
                            <img src={imgDeploy} alt='github logo' height='40px'></img>
                        </a>
                    </div>
                </div>



                <p>{object.description}</p>

            </div>
        </div>
    );
}