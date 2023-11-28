import React, {useState} from "react";
import "./navbar.css";
import logo from '../../assets/logo_orange.png';
import {Link} from 'react-scroll';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo"/>
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portofolio</Link>
        {/* <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Blog</Link> */}
      </div>
      <button className="desktopMenuButton" onClick={() =>
      document.getElementById("contactPage").scrollIntoView({behavior: "smooth"})}>
        <ChatBubbleOutlineIcon/>
        &nbsp; Contact Me
      </button>

      <MenuIcon className="mobMenu" alt="Menu" onClick={()=> setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? "flex" : "none"}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}  className="listItem"  onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portofolio</Link>
        {/* <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Blog</Link> */}
        <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
