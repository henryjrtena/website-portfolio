import React from 'react'

export default function Jumbotron(){
    return (
        <div className="jumbotron">
            <h4>Hi. My name is</h4>
            <h1 className='name'>Henry Tena</h1>
            <h2>I'm a Full-Stack Web Developer.</h2>
            <div className='jumbotron--buttons'>
                <button href='#projects' className='jumbo--projects'>Check Out My Projects</button>
                <button href='https://drive.google.com/drive/folders/1j9wLXRAUr3c5fGvA9lQ09xrhyiS1E3hu?usp=sharing' target="_blank" className='jumbo--resume'>View My Resume</button>
            </div>
        </div>
    )
}