import React from "react";
import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/myro-joy-lee/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/myrojoylee">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://codepen.io/p2nd2b32r">
        <FontAwesomeIcon icon={faCodepen} />
      </a>
    </footer>
  );
}
export default Footer;
