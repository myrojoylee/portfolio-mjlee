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
      <div>
      <a href="https://www.linkedin.com/in/myro-joy-lee/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/myrojoylee">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://codepen.io/p2nd2b32r">
        <FontAwesomeIcon icon={faCodepen} />
      </a>
      </div>
      <div>
        <p>Updated 06/29/2025 by <a href="https://www.linkedin.com/in/myro-joy-lee/">Myro Joy Lee</a>.</p>
      </div>
    </footer>
  );
}
export default Footer;
