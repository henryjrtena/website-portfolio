import React from 'react'
import styled from 'styled-components';


const Button = styled.button`

`

export default function Jumbotron({ goto__projects }) {
    return (
        <div className="jumbotron">
            <h4>Hi. My name is</h4>
            <h1 className='name'>Henry Tena</h1>
            <h2>Mobile Developer with Flutter.</h2>
            <div className='jumbotron--buttons'>
                <Button href='#projects' className='jumbo--projects goto__projects' onClick={() => goto__projects()}>Check Out My Projects</Button>
                <Button href='https://drive.google.com/drive/folders/1j9wLXRAUr3c5fGvA9lQ09xrhyiS1E3hu?usp=sharing' target="_blank" className='jumbo--resume btnn'>View My Resume</Button>
            </div>
        </div>
    )
}