import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import "../Works/projects.css";
import stayTuned from "../../assets/stayTuned.jpg";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

const ProjectCard = ({ image, title, description, link, github, projectDesc }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="projectCard">
      <img src={image} alt="" className="projectImg" />
      <h3 className="projectTitle">{title}</h3>
      <p className="projectDesc">{description}</p>
      <div className="projectButtons">
        <button
          className="projectButton"
          onClick={() => window.open(link, "_blank")}
        >
          Demo &nbsp; <LaunchIcon />
        </button>
        <button
          className="projectButton"
          onClick={handleModalOpen}
        >
          Info &nbsp;<ReadMoreIcon />
        </button>
        <button
          className="projectButton"
          onClick={() => window.open(github, "_blank")}
        >
          <GitHubIcon />&nbsp;  Source
        </button>
      </div>

      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <p>{projectDesc}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      image: stayTuned,
      title: "NuOrder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://www.nuorder.shop/",
      github: "https://github.com/jonida19/ReactDemoPrototype",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: stayTuned,
      title: "Project 2",
      description: "Different description for Project 2.",
      link: "/project2",
      github: "/github2",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: stayTuned,
      title: "Project 3",
      description: "Another unique description for Project 3.",
      link: "/project3",
      github: "/github3",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: stayTuned,
      title: "Project 4",
      description: "A distinct description for Project 4.",
      link: "/project4",
      github: "/github4",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
