import React from 'react'
import cv from '../../assets/resume.pdf' // Add this import statement at the top of your file
function CTA()
{
    return (
        <div className='cta'>
        <a href={cv} download className='btn'>Download</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
    )
}
export default CTA;