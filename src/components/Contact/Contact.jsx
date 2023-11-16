import React from 'react'
import "../Contact/contact.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <section id="contactPage">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
      <form className="contactForm">
        <input type="text" className="name" placeholder='Your Name'/>
        <input type="email" className="email" placeholder='Your email'/>
        <textarea className="msg" name="message" rows="5" placeholder='Your message '></textarea>
        <button type= "submit" value="send" className="submitBtn">Submit</button>
        <div className="links">
            {/* the social media icons */}
            <LinkedInIcon className='link'/>
            <GitHubIcon className='link'/>
        </div>
      </form>
    </section>
  )
}

export default Contact
