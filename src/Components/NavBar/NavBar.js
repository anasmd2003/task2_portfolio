import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'
const NavBar = () => {
  const [showMenu,setShowMenu] = useState(false); 
  return (
       <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="destopMenu">
            <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className="destopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} offset={-47} duration={500} className="destopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} offset={-45} duration={500} className="destopMenuListItem">Portfolio</Link>
            {/* <Link activeClass='active' to='clients' spy={true} offset={-50} duration={500} className="destopMenuListItem">Clients</Link> */}
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />contact Me
        </button>


        <img src={menu} alt="mobMenu" className='mobMenu'  onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className="ListItem" onclick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className="ListItem" onclick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} offset={-50} duration={500} className="ListItem" onclick={()=>setShowMenu(false)}>Portfolio</Link>
            {/* <Link activeClass='active' to='clients' spy={true} offset={-50} duration={500} className="ListItem" onclick={()=>setShowMenu(false)}>Clients</Link> */}
            <Link activeClass='active' to='contact' spy={true} offset={-50} duration={500} className="ListItem" onclick={()=>setShowMenu(false)}>Contact</Link>
       </div>
       </nav>
  
  )
}

export default NavBar
