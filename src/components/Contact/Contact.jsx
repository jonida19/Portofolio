import React, { useRef } from "react";
import "../Contact/contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your service key",
        "your template key",
        form.current,
        "your public key"   //public key
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your name" name="your_name"/>
        <input type="email" className="email" placeholder="Your email" name="your_email"/>
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your message "
        ></textarea>
        <button type="submit" value="send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          {/* the social media icons */}
          <LinkedInIcon className="link" />
          <GitHubIcon className="link" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
