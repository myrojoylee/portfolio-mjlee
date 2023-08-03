import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-color navbar-wrapper"
    >
      <Navbar.Brand href="#home" className="full-name">
        Myro Joy Lee
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="align-self-end">
        <Nav className="ms-auto" variant="tabs" defaultActiveKey="/aboutme">
          <Link key={1} className="nav-link navbar-gradient" to="/">
            About Me
          </Link>
          <Link key={2} className="nav-link navbar-gradient" to="/portfolio">
            Portfolio
          </Link>
          <Link key={3} className="nav-link navbar-gradient" to="/contact">
            Contact
          </Link>
          <Link key={4} className="nav-link navbar-gradient" to="/resume">
            Resume
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
