import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui_ux.png";
import WebDesign from "../../assets/web_design.PNG";
import FullStack from "../../assets/full_stack.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="ui/ux design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="Website Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={FullStack} alt="Full Stack" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Full Stack Developement</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
