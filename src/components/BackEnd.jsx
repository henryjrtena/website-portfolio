import React from 'react'
import frontEndProjects from './Data/BE_Proj'

export default function BackEnd(){
    let backEndProj = frontEndProjects.data.projects

    const projEl = backEndProj.map((proj) =>
        <div className="project">
            <img src={proj.imgDir} alt={proj.name}/>
            <a href={proj.url} target="_new"><h3>{proj.name}</h3></a>
            <p>{proj.info}</p>
            {proj.madeWith.map((made) => <span>{made}</span>)}
        </div>
    )

    return (
        <div className='backend'>
            <h1>Back-End Projects</h1>
            <main className='backend--projects'>
                {projEl} 
            </main>
        </div>
    )
}