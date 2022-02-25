import React, { useState } from 'react';
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import CompanyDropdown from './CompanyDropdown'
import ConnectDropdown from './ConnectDropdown'


function Navbar () {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [dropdown, setDropdown] = useState(false);
    const handleDropdownClick = () => setDropdown(!dropdown);

    const onMouseEnter = () => {
      if(window.innerWidth < 850) {
          setDropdown(false)
      }else {
          setDropdown(true)
      }
  };

  const onMouseLeave = () => {
      if(window.innerWidth < 850) {
          setDropdown(false)
      }else {
          setDropdown(false)
      }
  };

  //Tryna set a timer

    return (
        <> 
     <nav className='navbar'>
         <div className='box'>
            <div className='together'>

               <div className='top-part-nav'>
                 <Link to='/' className='navbar-logo'>
                        <h1>Blogr</h1>
                 </Link>
                    <div className='menu-icon'>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick}/>
                   </div>
              </div>

                <div className={click ? 'box-shadow active' : 'box-shadow'}>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                     <li className='nav-item'>
                         <Link to='/company' className='nav-links' onClick={closeMobileMenu}>
                            Product <i className="fas fa-angle-down"></i>
                         </Link>

                      </li>
                      <li className='nav-item'>
                         <Link to='/company' className='nav-links' onClick={closeMobileMenu}>
                             Company <i className="fas fa-angle-down"></i>
                         </Link>
                      {dropdown && <CompanyDropdown />}
                       </li>
                          <li className='nav-item' onMouseEnter={onMouseEnter}>
                                 <Link to='/company' className='nav-links'>
                                    Connect <i className={dropdown ? 'fas fa-angle-up' : 'fas fa-angle-down'} onClick={handleDropdownClick}/>
                                 </Link>
                           </li>
                    </ul>
                    <div className='user-enter'>
                       <p>Login</p>
                       <button className='sign-in'>Sign Up</button>
                    </div>
                </div> 
         </div>

     </div>
     {dropdown && <ConnectDropdown />}     
 </nav>

        </>
    )
}

export default Navbar

//code is'nt as good as it should be, sigh.