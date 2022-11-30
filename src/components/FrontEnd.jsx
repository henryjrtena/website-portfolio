import React from 'react'
import frontEndProjects from './Data/FE_Proj'
import { nanoid } from 'nanoid' 

export default function FrontEnd(){

    let frontEndProj = frontEndProjects.data.projects

    const projEl = frontEndProj.map((proj) =>
        <div className="project" key={nanoid()}>
            <img src={proj.imgDir} alt={proj.name} key={nanoid()}/>
            <a href={proj.url} target="_new"><h3>{proj.name}</h3></a>
            <p>{proj.info}</p>
            {proj.madeWith.map((made) => <span key={nanoid()}>{made}</span>)}
        </div>
    )

    return (
        <div className='frontend' id="projects">
            <h1>Front-End Projects</h1>
            <main className='frontend--projects'>
                {projEl} 
            </main>
        </div>
    )
}