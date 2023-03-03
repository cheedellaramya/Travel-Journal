import React from 'react'

const Navbar = (props) => {
  return (
    <div className='navbar-container'>
        <div className='navbar-middle-container'>
            <img className='navbar-image' src={props.img} alt='world'/>
            <span className='nav-heading'>My Travel Journal</span>
        </div>
    </div>
  )
}

export default Navbar;
