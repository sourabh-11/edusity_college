import React, { useEffect, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';


const Navbar = () => {

  const [sticky,setsticky]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false)  })
  },[])
 
  const [mobilemenu,setmobilemenu] = useState(false)
  const toggleMenu  = () =>{
    mobilemenu ? setmobilemenu(false): setmobilemenu(true)
  }
  return (
   <nav className={`Container ${sticky ? 'dark-nav' : ' '}`}> 
    <img src={logo} alt=" " className='logo'/>
      <ul className={mobilemenu?' ':'hide-mobile-menu'}>
        <li> <Link to='hero' smooth = {true} offset={0} duration={500}>Home</Link> </li>
        <li> <Link to='programs' smooth = {true} offset={-250} duration={500}>Program</Link>  </li> 
        <li> <Link to='about' smooth = {true} offset={-150} duration={500}> About us</Link></li>
        <li> <Link to='Campus' smooth = {true} offset={-250} duration={500}>Campus </Link></li> 
        <li>  <Link to='TESTIMONIALS' smooth = {true} offset={-150} duration={500}> Testimonials </Link></li>
        <li><Link className='btn' to='Contact' smooth = {true} offset={-250} duration={500} >Contact</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu} />
   </nav>
  )
}

export default Navbar