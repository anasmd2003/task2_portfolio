import React from 'react'
import './Works.css'
import Porfolio1 from '../../assets/portfolio-1.png'
import Porfolio2 from '../../assets/portfolio-2.png'
import Porfolio3 from '../../assets/portfolio-3.png'
import Porfolio4 from '../../assets/portfolio-4.png'
import Porfolio5 from '../../assets/portfolio-5.png'
import Porfolio6 from '../../assets/portfolio-6.png'
const Works = () => {
  return (
  <div>
    <section id="works">
    <h2 className='workstitle'>My Portfolio</h2>
    <span className="workdesc">
        I take pride in paying attention and making sure that my works is pixel perfect.
        i am excited to bring and experience to help business achieve their goals and create a strong online presence
    </span>
    <div className="worksImgs">
        <img src={Porfolio1} alt="" className="worksImg" />
        <img src={Porfolio2} alt="" className="worksImg" />
        <img src={Porfolio3} alt="" className="worksImg" />
        <img src={Porfolio4} alt="" className="worksImg" />
        <img src={Porfolio5} alt="" className="worksImg" />
        <img src={Porfolio6} alt="" className="worksImg" />
    </div>
    <button className='worksbtn'>See More</button>
   </section>
  </div>
  )
}

export default Works
