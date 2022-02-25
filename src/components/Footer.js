import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <h1>Blogr</h1>

                <div className='footer-line'>
                    <span>Product</span>
                    <p>Overview</p>
                    <p>Pricing</p>
                    <p>Marketplace</p>
                    <p>Features</p>
                    <p>Integrations</p>
                </div>

                <div className='footer-line'>
                    <span>About</span>
                    <p>Team</p>
                    <p>Pricing</p>
                    <p>Blog</p>
                    <p>Careers</p>
                </div>

                <div className='footer-line'>
                    <span>Connect</span>
                    <p>Contact</p>
                    <p>Newsletter</p>
                    <p>LinkedIn</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
