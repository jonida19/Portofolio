import React from "react";
import "./navbar.css";
import logo from '../../assets/jd_logo.png';
import {Link} from 'react-scroll';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo"/>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portofolio</Link>
        <Link className="desktopMenuListItem">Blog</Link>
      </div>
      <button className="desktopMenuButton">
        <ChatBubbleOutlineIcon/>
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
