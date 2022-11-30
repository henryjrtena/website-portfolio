import React from 'react'
import NavBits from './Bits/NavBits'

export default function Navigation({goto__projects}){
    const openNav = () => {
        console.log('Open Nav')
        document.getElementById("overlay").style.width = "100%";
    }

    const brand = '<Henry Tena/>'
    return (
        <div className='navigation' id="navigation">
            <h2 className='nav--brand'>{brand}</h2>
            <NavBits goto__projects={goto__projects}/>
            <span className='hamburger' onClick={openNav}><i className="fa fa-bars"></i></span>
        </div>
    )
}