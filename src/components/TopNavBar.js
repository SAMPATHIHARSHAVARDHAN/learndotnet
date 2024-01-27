import React, { useState } from "react";
import "./TopNavBar.css";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const TopNavBar = () => {
  const [mnutoggle, setMenuToggle] = useState(true);
  return (
    <nav>
      <ul className="nav-item-left">
        <li ><a href="/">LEARN DOT NET AT HOME</a></li>
      </ul>
      <div className="nav-main-list">
        <ul >
          <li className="nav-item-list">
            <a href="#c_net">C#.Net</a>
          </li>
          <li className="nav-item-list">
            <a href="#vb_net">VB.Net</a>
          </li>
          <li className="nav-item-list">
            <a href="#asp_net">ASP.Net</a>
          </li>
          <li className="nav-item-list">
            <a href="#ado_net">ADO.Net</a>
          </li>
          <li className="nav-item-list">
            <a href="#sql">SQL</a>
          </li>
          <li className="nav-item-list">
            <a href="#about">About</a>
          </li>
          <li className="nav-item-list">
            <a href="#contact_us">Contact Us</a>
          </li>
        </ul>
        </div>
        <div className="nav-item-center">
        <ul>
          <li className="nav-item-list">
            <a  href="#get_certified">Get Certified</a>
          </li>
          <li className="nav-item-list">
            <a  href="#sign_up">Sign Up</a>
          </li>
          <li className="nav-item-list">
            <a  href="#sign_in">Sign In</a>
          </li>
        </ul>
      </div>
      <div className=" nav-item-right">
        <ul>
          <li className="nav-item-list" onClick={() => setMenuToggle(!mnutoggle)}>
            {mnutoggle ? <FaBars /> : <IoClose />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
