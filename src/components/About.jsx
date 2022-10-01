import React from 'react'
import dataSkill from './Data/Skills'

export default function About(){
    
    let skillObj = dataSkill.data.skills
    
    const skillsEl = skillObj.map((skill) =>
        <img src={skill.url} alt={skill.name} />
    )
    
    
    return (
        <div className='aboutme' id="about">
            <section>
                <h1>About Me</h1>
                <p>
                    Hey there! My name is Henry, and I graduated as a Bachelor of Science in Entertainment and Multimedia Computing but recently become interested with Web Developemnt. </p>
                <p>
                    I began my web development journey in 2022, where I join an online bootcamp for introduction to Web Development. Since then, I've developed a great passion for building web applications using the latest tech.
                </p>
                <br></br>
                <p>Here are some I've been working with:</p>
                <div className='skillList'>
                    {skillsEl}
                </div>
            </section>
        </div>
    )
}