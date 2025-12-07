import React from 'react'
import dataSkill from './Data/Skills'
import { nanoid } from 'nanoid'

export default function About(){
    let skillObj = dataSkill.data.skills
    const skillsEl = skillObj.map((skill) =>
        <img src={skill.url} alt={skill.name} key={nanoid()}/>
    )
    return (
        <div className='aboutme' id="about">
            <section>
                <h1>About Me</h1>
                <p>
                    Hi, I’m Henry. My background is rooted in creative technology, and over time I’ve developed a growing interest in web and mobile development. I’m now dedicated to expanding my skills and creating impactful digital solutions.</p>
                <p>
                    I began experimenting with various tools and platforms, and that sparked my excitement for creating web and mobile apps that people can actually use and enjoy.
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