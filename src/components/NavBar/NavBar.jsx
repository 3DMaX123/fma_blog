import React, { useState } from 'react'

import './NavBar.css';
import images from '../../constants/images.js'; 

const NavBar = () => {

  const [ grad, setGrad ] = useState(false);

  return(
    <div className='app__navbar'>
      <div className='navbar-socialmedia'>

      </div>
      <div className='Logo'>
        <object className='mainLogo' data={images.mainLogo}>Feed Motion Blog logo</object>
      </div>
      <div className='menuButton'>
        <img className='burgerMenu' src={images.menubar} alt='Menu bar(burger)' onMouseEnter={() => setGrad(true)} onMouseLeave={() => setGrad(false)}/>
      </div>
    </div>
  )
}

export default NavBar