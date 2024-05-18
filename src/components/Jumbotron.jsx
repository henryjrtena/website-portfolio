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
            <h2>Web App Developer with ASP.NET MVC.</h2>
            <div className='jumbotron--buttons'>
                <a target='_blank' href="https://drive.google.com/file/d/1xyYa42G9okso2DGnvLx5ukjtvbOMO5Gz/view?usp=sharing" className='jumbo--resume btnn'>View My Resume</a>
            </div>
        </div>
    )
}