import React from "react";
import "../Works/projects.css";
import stayTuned from "../../assets/stayTuned.jpg";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({ image, title, description, link, github }) => (
  <div className="projectCard">
    <img src={image} alt="" className="projectImg" />
    <h3 className="projectTitle">{title}</h3>
    <p className="projectDesc">{description}</p>
    <div className="projectButtons">
    <button
      className="projectButton"
      onClick={() => window.open(link, "_blank")}
    >
      Live Demo &nbsp; <LaunchIcon/>
    </button>
    <button
      className="projectButton"
      onClick={() => window.open(github, "_blank")}
    >
     <GitHubIcon/>&nbsp;  View source
    </button>
    </div>
  </div>
);

const Projects = () => {
  const projectData = [
    {
      image: stayTuned,
      title: "NuOrder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://www.nuorder.shop/",
      github: "https://github.com/jonida19/ReactDemoPrototype",
    },
    {
      image: stayTuned,
      title: "Project 2",
      description: "Different description for Project 2.",
      link: "/project2",
      github: "/github2",
    },
    {
      image: stayTuned,
      title: "Project 3",
      description: "Another unique description for Project 3.",
      link: "/project3",
      github: "/github3",
    },
    {
      image: stayTuned,
      title: "Project 4",
      description: "A distinct description for Project 4.",
      link: "/project4",
      github: "/github4",
    },
  ];

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et
        magnis dis parturient montes nascetur ridiculus. Vitae nunc sed velit
        dignissim.
      </span>
      <div className="worksCards">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
