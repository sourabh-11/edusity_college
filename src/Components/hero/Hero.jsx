import React from 'react'
import './Hero.css'
import darkarr from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero Container'>
        <div className="hero-text">
          <h1>We Ensure better education for better  world</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, sed iste ab nihil rem repudiandae maxime laudantium beatae maiores harum molestiae, voluptatum, minus nostrum? Soluta corporis eveniet porro? Iste, dolor?</p>
          <button className='btn'>Explore more <img src={darkarr} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero