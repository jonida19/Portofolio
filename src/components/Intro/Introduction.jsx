import React from "react";
import "./introduction.css";
import foto from "../../assets/jonida_circle.png";
import ArticleIcon from "@mui/icons-material/Article";

const Introduction = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I am <span className="introName">Jonida </span>
          <span className="title">
            <br />
            Full Stack Web Developer
          </span>
        </span>
        <p className="introPara">
          High Level Experience in web design <br />
          and development knowledge, producing quality work.
        </p>
        <a
          href="/Jonida_Durbaku_Resume.pdf"
          target="_blank"
          download="Jonida_Durbaku_Resume.pdf"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <ArticleIcon className="resume-icon"/> &nbsp; Resume
          </button>
        </a>
      </div>
      <img src={foto} alt="profile" className="bg" />
    </section>
  );
};

export default Introduction;