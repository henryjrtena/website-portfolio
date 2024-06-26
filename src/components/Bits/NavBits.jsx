import React from 'react'

export default function NavBits({goto__projects}){
    const closeNav = () => {
        console.log('Close Nav')
        document.getElementById("overlay").style.width = "0%";
    }
    return (
        <ul className='nav'>
            <span className='hamburger' onClick={closeNav}><i className="fa fa-times"></i></span>
            <li className='nav--list'><a href='#about'>About</a></li>
            <li className='nav--list'><a href='#contact'>Contact</a></li>
            <li className='nav--list'><a target='_blank' href='https://www.linkedin.com/in/hjratena/'><i className='fa fa-linkedin'></i></a></li>
            <li className='nav--list'><a target='_blank' href='https://github.com/henryjrtena'><i className='fa fa-github'></i></a></li>
            <li className='nav--list'><a target='_blank' href='https://bitbucket.org/henryjrtena/workspace/repositories'><i className='fa fa-bitbucket'></i></a></li>
        </ul>
    )
}