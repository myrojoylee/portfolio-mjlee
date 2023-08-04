import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

import "../styles/Navigation.css";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-color navbar-wrapper"
    >
      <Navbar.Brand className="full-name">Myro Joy Lee</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="align-self-end">
        <Nav className="ms-auto" variant="tabs" defaultActiveKey="/aboutme">
          <Link
            className={
              currentPage === "/"
                ? " active nav-link navbar-gradient"
                : "nav-link navbar-gradient"
            }
            to="/"
          >
            About Me
          </Link>
          <Link
            className={
              currentPage === "/portfolio"
                ? " active nav-link navbar-gradient"
                : "nav-link navbar-gradient"
            }
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className={
              currentPage === "/contact"
                ? " active nav-link navbar-gradient"
                : "nav-link navbar-gradient"
            }
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className={
              currentPage === "/resume"
                ? " active nav-link navbar-gradient"
                : "nav-link navbar-gradient"
            }
            to="/resume"
          >
            Resume
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
