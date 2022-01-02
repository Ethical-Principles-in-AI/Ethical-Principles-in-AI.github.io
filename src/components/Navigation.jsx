import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../images/epai_logo.png";

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
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Events">Events</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="/News">Newsletter</Nav.Link>
          <Nav.Link href="/joinus">Join Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
