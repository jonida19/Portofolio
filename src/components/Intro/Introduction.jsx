import React from "react";
import "./introduction.css";
import foto from "../../assets/on_the_keyboard.PNG";
import {Link} from 'react-scroll';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const Introduction = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">I am <span className="introName">Jonida </span><span className="title"><br/>Full Stack Web Developer</span></span>
        <p className="introPara">High Level Experience in web design <br/>and development knowledge, producing quality work.</p>
        <Link>
        <button className="btn"><WorkOutlineIcon/> &nbsp; Hire Me</button>
        </Link> 
      </div>
      <img src={foto} alt="profile" className="bg" />
    </section>
  );
};

export default Introduction;
