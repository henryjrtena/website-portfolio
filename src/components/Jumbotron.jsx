import React from 'react'

export default function Jumbotron(){
    return (
        <div className="jumbotron">
            <h4>Hi. My name is</h4>
            <h1 className='name'>Henry Tena</h1>
            <h2>I'm a Full-Stack Web Developer.</h2>
            <div className='jumbotron--buttons'>
                <button href='#' className='jumbo--projects'>Check Out My Projects</button>
                <button href='#' className='jumbo--resume'>View My Resume</button>
            </div>
        </div>
    )
}