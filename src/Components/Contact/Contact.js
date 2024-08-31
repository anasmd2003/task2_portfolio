import React, { useRef } from 'react'
import './Contact.css'
// import Walmart from '../../assets/walmart.png'
// import Adobe from '../../assets/adobe.png'
// import Microsoft from '../../assets/microsoft.png'
// import Facebook from '../../assets/facebook.png'
import FbIcon from '../../assets/facebook-icon.png'
import InIcon from '../../assets/instagram.png'
import YTIcon from '../../assets/youtube.png'
import twtrIcon from '../../assets/twitter.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_emnzh9g', 'template_1x9peig', form.current,'YxSNNkx1TwK7HaFrf')
        .then ((result)=> {
          console.log(result.text);
          e.target.reset();
          alert('Email sent !');

        },(Error)=> {
          console.log(Error.text);
        });
            
    };
  return (
    <div>
        <section id="contactpage">
            {/* <div id="clients">
             <h1 className="contactPgTitle">My Clients</h1>
             <p className="clientDesc">
                I have had the oppurtunity to work with diverse group of 
                companies. Some of the notable companies I have worked with includes
             </p>
             <div className="clientImgs">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
             </div>
            </div> */}
            <div id="contact">
            <h1 className="contactPgTitle">Contact Me</h1>
            <span className="contactdesc">
                please fill out the form to discuss any work oppurtunities.
            </span>
            <form ref={form} className='contactForm' onSubmit={sendEmail} >
                <input type="text" className="name"placeholder='Your Name' name='from_name' />
                <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message' ></textarea>
                <button value="send" type='submit' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FbIcon} alt="FbIcon" className="link" />
                    <img src={twtrIcon} alt="twtrIcon" className="link" />
                    <img src={YTIcon} alt="YTIcon" className="link" />
                    <img src={InIcon} alt="InIcon" className="link" />
                   
                </div>
            </form>
            </div>
        </section>
    </div>
  )
}

export default Contact
