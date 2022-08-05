import React from 'react'
import logo from '../images/ramen-logo.png'

export default function Nav() {
  return (
    <div className='nav-bar container'>
      <header className='header'>
        <div className='logo '>
          <img className='header-logo' src={logo} alt='ramen logo'/>
        </div>
        <nav>
          <ul>
            <li><a className='nav-links' href="#nothing">MENU</a></li>
            <li><a className='nav-links' href="#nothing">LOCATIONS</a></li>
            <li><a className='nav-links' href="#nothing">ABOUT</a></li>
            <li><a className='nav-button' href="#nothing">ORDER ONLINE</a></li>
          </ul>
        </nav>
      </header>

    </div>
  )
}
