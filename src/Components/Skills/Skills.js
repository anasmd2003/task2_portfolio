import React from 'react'
import './Skills.css'
import uiDesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import appDesign from '../../assets/app-design.png'
const Skills = () => {
  return (
    <div>
      <section id="skills">
         <span className="skillTitle">What I do</span>
         <span className="skillDesc">
         I am a skilled web design with experience in creating visually appealing and user friendly website
         I have strong understanding of design and keen eye for detail. I am proficient
         in HTML,CSS, and Javascript , as well as design software such as Adobe Photoshop and illustrator
        
         </span>
         <div className="skillBars">
            <div className="skillBar">
                <img src={uiDesign} alt="iDesign" className="skillBarImg" />
                <div className="skillBartext">
                    <h2>UI/UX Design</h2>
                    <p>As a UI/UX designer,I design intuitive and engaging digital experiences through user research, wireframing, prototyping, visual design, and usability testing. Proficient in tools like Sketch, Figma, and Adobe XD, I create seamless interfaces that balance aesthetics and functionality.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webDesign} alt="webDesign" className="skillBarImg" />
                <div className="skillBartext">
                    <h2>Website Design</h2>
                    <p>As a web designer, I create visually appealing and user-friendly websites, combining aesthetics with functionality to deliver seamless online experiences. Proficient in HTML, CSS, JavaScript, and design tools like Adobe XD and Figma, I ensure responsive and engaging web interfaces.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={appDesign} alt="appDesign" className="skillBarImg" />
                <div className="skillBartext">
                    <h2>App Design</h2>
                    <p>As a app designer,I design user-friendly and visually appealing mobile apps, focusing on creating intuitive experiences. Skilled in Sketch, Figma, and Adobe XD, I ensure that every app I design is functional, engaging, and meets user needs.</p>
                </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default Skills
