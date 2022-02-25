import React from 'react'
import './Features1.css'

function Features1() {
    return (
     <div className='features1'>
       <h1 className='mgb'>Designed for the Future</h1>
        <div className='features'>
           <div className='editor-container'>
               <img src='./images/illustration-editor-mobile.svg' alt='editor' className='editor'/>
               <img src='./images/illustration-editor-desktop.svg' alt='editor-rmv' className='editor-rmv'/>
           </div>
           <div className='features-texts'>

               <div className='feat-text'>
                  <h1>Introducing an extensible editor</h1>
                    <p>
                      Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                      The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                      videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                      change the looks of a blog.
                    </p>
                </div>

                <div className='feat-text'>
                  <h1>Robust content management</h1>
                    <p>
                      Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                      by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                    </p>
                </div>

           </div>
     </div>
   </div>
    )
}

export default Features1
