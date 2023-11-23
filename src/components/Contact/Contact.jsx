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
      "service_mmtzkwb",
      "template_kpj9a13",
      form.current,
      "X8xmX5nqlhwFu_KEJ"
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
          <a className="socialMedia" href="https://www.linkedin.com/in/jonida-durbaku/" target="_blank" rel="noopener noreferrer"><div className="icondiv"><LinkedInIcon className="link" /></div></a>
          <a className="socialMedia" href="https://github.com/jonida19" target="_blank" rel="noopener noreferrer"><GitHubIcon className="link" /></a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
