import React from 'react'
import './Features3.css'

function Features3() {
    return (
        <div className='features3'>
          <div className='features-3-container'>
            <div className='editor-3-container'>
                <img src='./images/illustration-laptop-mobile.svg' alt='laptop-mobile' className='editor-3'/>
                <img src='./images/illustration-laptop-desktop.svg' alt='editor-rmv' className='editor-3-rmv'/>
            </div>
            <div className='features-3-texts'>
 
                <div className='feat-text-3'>
                   <h1>Free, open, simple</h1>
                     <p>
                     Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                     features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                     and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                     </p>
                 </div>
 
                 <div className='feat-text-3'>
                   <h1>Powerful tooling</h1>
                     <p>
                     Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                     capable of producing even the most complicated sites.
                     </p>
                 </div>
 
            </div>
      </div>
    </div>
    )
}

export default Features3
