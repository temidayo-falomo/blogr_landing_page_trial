import React from 'react'
import Navbar from './Navbar'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <Navbar />
            <div className='top-text'>
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
            </div>
            <div className='btns'>
                <button className='white-btn'>Start for Free</button>
                <button className='trans-btn'>Learn More</button>
            </div>
        </div>
    )
}

export default Header
