import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/epai_logo.png"

function Navigation() {
  return (
    <div className="navigation fixed-top">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img alt="EPAI logo" style={{"width": "55px"}} src={logo}/>
            &nbsp; UofT EPAI
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink style={{"white-space": 'nowrap'}} className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{"white-space": 'nowrap'}} className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{"white-space": 'nowrap'}} className="nav-link" to="/events">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{"white-space": 'nowrap'}} className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{"white-space": 'nowrap'}} className="nav-link" to="/news">
                  Newsletter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{"white-space": 'nowrap'}} className="nav-link" to="/joinus">
                  Join Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
