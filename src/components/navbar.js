import React from "react";
import { 
    Navbar, 
    Nav, 
} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" id="side_nav">
          <Navbar.Brand href="#home">DEV</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">Personal Info</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#volunteer">Volunteering</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
