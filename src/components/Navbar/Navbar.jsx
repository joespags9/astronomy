import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='app__navbar'>
        <div>
            <a href="/">
                Timeline
            </a>
        </div>
        <div>
            <a href="/darkenergy">
                Dark Energy
            </a>
        </div>
        <div>
            <a href="/stars">
                Stellar Lifecycle
            </a>
        </div>
        <div>
            <a href="/protons">
                Proton Decay
            </a>
        </div>
        <div>
            <a href="/hawking">
                Hawking Radiation
            </a>
        </div>
        <div>
            <a href="/alternate">
                Alternative Theories
            </a>
        </div>
    </div>
  )
}

export default Navbar
