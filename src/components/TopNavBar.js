import React from "react";
import "./TopNavBar.css";

const TopNavBar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li className="item-list">
            <a  href="#c_net">
              C#Net
            </a>
          </li>
          <li className="item-list">
            <a  href="#vb_net">
              VB.Net
            </a>
          </li>
          <li className="item-list">
            <a  href="#asp_net">
              ASP.Net
            </a>
          </li>
          <li className="item-list">
            <a  href="#ado_net">
              ADO.Net
            </a>
          </li>
          <li className="item-list">
            <a  href="#sql">
              SQL
            </a>
          </li>
          <li className="item-list">
            <a  href="#about">
              About
            </a>
          </li>
          <li className="item-list">
            <a  href="#contact_us">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="item-list">
            <a  href="#get_certified">
              Get Certified
            </a>
          </li>
          <li className="item-list">
            <a  href="#sign_up">
              Sign Up
            </a>
          </li>
          <li className="item-list">
            <a  href="#sign_in">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
