import React from 'react'
import FacebookIcon from '../../assets/facebook.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
const Contact = ()=> {
return (
    <section className='contact-section'>
    <div id='contact'>
    <h1 className='contactPageTitle'> Contact Me</h1>
    <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
      <form className='contactForm'>
        <input type='text' className='name' placeholder='Your Name'/>
        <input type='email' className='email' placeholder='Your email'/>
        <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
        <button type='submit' value='send' className='submitBtn'>Submit</button>
       
      </form>
    </div>
    </section>
  )
}

export default Contact
