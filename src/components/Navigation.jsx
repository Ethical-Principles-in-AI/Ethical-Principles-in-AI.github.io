import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../images/epai_logo.png";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
    <Container>
      <Navbar.Brand href="/">
      <img alt="EPAI logo" style={{"width": "55px"}} src={logo}/>
        &nbsp; UofT EPAI
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
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
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
