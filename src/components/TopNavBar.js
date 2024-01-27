import React, { useState } from "react";
import "./TopNavBar.css";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  const [mnutoggle, setMenuToggle] = useState(true);
  return (
    <nav>
      <ul className="nav-item-left">
        <li ><Link to="/">LEARN DOT NET AT HOME</Link></li>
      </ul>
      <div className="nav-main-list">
        <ul >
          <li className="nav-item-list">
            <Link to="/c_net">C#.Net</Link>
          </li>
          <li className="nav-item-list">
            <Link to="/vb_net">VB.Net</Link>
          </li>
          <li className="nav-item-list">
            <Link to="/asp_net">ASP.Net</Link>
          </li>
          <li className="nav-item-list">
            <Link to="/ado_net">ADO.Net</Link>
          </li>
          <li className="nav-item-list">
            <Link to="/sql">SQL</Link>
          </li>
          <li className="nav-item-list">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item-list">
            <Link to="/contact_us">Contact Us</Link>
          </li>
        </ul>
        </div>
        <div className="nav-item-center">
        <ul>
          <li className="nav-item-list">
            <Link to="/get_certified">Get Certified</Link>
          </li>
          <li className="nav-item-list">
            <Link to="/sign_up">Sign Up</Link>
          </li>
          <li className="nav-item-list">
            <Link to="/sign_in">Sign In</Link>
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
