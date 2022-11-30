import React from 'react'

export default function Footer(){
    function goto__top(){
        var goto__ = document.querySelector('html')
        goto__.scrollIntoView({ behavior: 'smooth', block: 'start'});
      }
    return (
        <div className='footer'>
            <a alt="back to top" onClick={goto__top}>Back to top</a>
        </div>
    )
}