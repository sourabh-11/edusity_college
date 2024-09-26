import React from 'react'
import './About.css'
import aboutimg from '../../assets/about.png'
import playicon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="aboutleft">
         <img src={aboutimg} alt=""className='about-img' />
         <img src={playicon} alt=""className='play-img' />
        </div>
        <div className="aboutright">
         <h3>About University</h3>
         <h2>Nurting Tomorrw's Leaders Today</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore adipisci rerum hic deleniti velit provident tempore quae nihil cumque, officiis, consectetur repudiandae beatae necessitatibus doloremque accusantium! Error magnam eos ratione.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore adipisci rerum hic deleniti velit provident tempore quae nihil cumque, officiis, consectetur repudiandae beatae necessitatibus doloremque accusantium! Error magnam eos ratione.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore adipisci rerum hic deleniti velit provident tempore quae nihil cumque, officiis, consectetur repudiandae beatae necessitatibus doloremque accusantium! Error magnam eos ratione.</p>
        </div>
        
    </div>

  )
}

export default About