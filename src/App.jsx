import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import TESTIMONIALS from './Components/TESTIMONIALS/TESTIMONIALS'

const App = () => {
  return (
    <div>

      <Navbar/>
      <Hero/>
      <div className="Container">
      <Title subtitle = 'our PROGRAM' Title='What we offer'/>
      <Program/>
      <About  />
      <Title subtitle = 'Gallery' Title='Campus photos'/>
      <Campus/>
      <Title subtitle = 'TESTIMONIALS' Title='What Students Saya'/>
      <TESTIMONIALS/>
      </div>
      
    </div>
  )
}

export default App