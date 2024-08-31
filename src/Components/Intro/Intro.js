import React from 'react'
import './Intro.css'
import bg from '../../assets/anas.png'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'
const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className='hello'>Hello</span>
          <span className="introText"> I'm <span className="introName">Anas</span> <br />
           Website Designer
          </span>
          <p className="introPara">
            I am a skilled web design with experience in creating visually appealing and user friendly website
          </p>
           <div className="introbtn">
       <Link><button className="btn"><img   className='btnImg' src={btnImg} alt="Hire Me" />Hire Me</button></Link>
       <a href="Resume.pdf" download><button className='resumebtn'>Resume</button> </a>
           </div>
        </div>
        <img className='bg' src={bg} alt="" />
      </section>
    </div>
  )
}

export default Intro
