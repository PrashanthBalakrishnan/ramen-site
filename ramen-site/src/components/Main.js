import React from 'react'
import MainImage from '../images/main-image.png'

export default function Main() {
  return (
    <div className='main'>
        
        <h1 className='main-title'>ICHI RAMEN</h1>
        <p className='main-text'>ONLINE ORDERING AVAILABLE</p>
        <img className='main-image' src={MainImage} alt='Ramen'/>
    </div>
  )
}
