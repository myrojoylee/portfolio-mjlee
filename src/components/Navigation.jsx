import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

import "../styles/Navigation.css";

function Navigation() {
  const currentPage = useLocation().pathname;

  const getNavLinkClass = (path) => currentPage === path ? "active nav-link navbar-gradient" : "nav-link navbar-gradient";

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-color navbar-wrapper"
    >
      <Navbar.Brand className="full-name">Myro Joy Lee</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="align-self-end nav-menu"
      >
        <Nav className="ms-auto" variant="tabs" defaultActiveKey="/aboutme">
          <Link
            className={getNavLinkClass("/")}
            to="/"
          >
            About Me
          </Link>
          <Link
            className={getNavLinkClass("/portfolio")}
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className={getNavLinkClass("/contact")}
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className={getNavLinkClass("/resume")}
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
