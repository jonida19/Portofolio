import React from 'react'
import "../Works/projects.css"
import stayTuned from "../../assets/stayTuned.jpg"

const Projects = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Vitae nunc sed velit dignissim.</span>
        <div className="worksImgs">
            <img src={stayTuned} alt="" className="worksImg" />
            <img src={stayTuned} alt="" className="worksImg" />
            <img src={stayTuned} alt="" className="worksImg" />
            <img src={stayTuned} alt="" className="worksImg" />
        </div>
        <button className="workBtn">See more</button>
    </section>
  )
}

export default Projects
