import React from 'react'
import styled from 'styled-components';
import { gsap } from "gsap/all";
const { useEffect, useRef } = React;

let callCount = 0;

const Box = styled.div`
    display: grid;
    align-content: center;
    width: 100px;
    height: 100px;
    background-color: papayawhip;
    border: 5px;
    color: #333;
`

export default function Footer(){

    const component = useRef(null);

    function goto__top(){
        var goto__ = document.querySelector('html')
        goto__.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }

    useEffect(() => {
    
        let ctx = gsap.context(() => {
          
          gsap.from('.box', {
            x: 300,
            duration: 2,
            scrollTrigger: {
                trigger: '.footer',
                pin: true,   // pin the trigger element while active
                start: "top top", // when the top of the trigger hits the top of the viewport
                end: "+=500", // end after scrolling 500px beyond the start
                scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
          });
        }, component); // <- scopes all selector text inside the context to this component (optional, default is document)
        
        return () => {}//ctx.revert(); // cleanup! 
      }, []);

    return (
        <div className='footer' ref={component}>
            <a alt="back to top" onClick={goto__top}>Back to top</a>
            <Box className='box'>Hello</Box>
        </div>
    )
}