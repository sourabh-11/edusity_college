import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import TESTIMONIALS from './Components/TESTIMONIALS/TESTIMONIALS'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


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
      <Title subtitle = 'Contact us' Title='Get in Touch'/>
      <Contact/>
      <Footer/>
     
      </div>
      
    </div>
  )
}

export default App